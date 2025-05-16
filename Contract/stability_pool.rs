use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    program_pack::{Pack, IsInitialized},
    sysvar::{rent::Rent, Sysvar},
};

#[derive(Debug, Default)]
pub struct StabilityPool {
    pub total_deposits: u64,
    pub fee_rate: u64,         // 基点表示，1% = 100
    pub last_update_time: i64,
    pub treasury: Pubkey,
    pub is_initialized: bool,
}

#[derive(Debug)]
pub struct UserDeposit {
    pub amount: u64,
    pub reward_debt: u64,
}

#[derive(Debug)]
pub enum StabilityInstruction {
    Initialize {
        fee_rate: u64,
        treasury: Pubkey,
    },
    Deposit {
        amount: u64,
    },
    Withdraw {
        amount: u64,
    },
    CollectFees,
    UpdateFeeRate {
        new_rate: u64,
    },
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = StabilityInstruction::unpack(instruction_data)?;

    match instruction {
        StabilityInstruction::Initialize { fee_rate, treasury } => {
            msg!("Instruction: Initialize");
            process_initialize(accounts, fee_rate, treasury, program_id)
        },
        StabilityInstruction::Deposit { amount } => {
            msg!("Instruction: Deposit");
            process_deposit(accounts, amount, program_id)
        },
        StabilityInstruction::Withdraw { amount } => {
            msg!("Instruction: Withdraw");
            process_withdraw(accounts, amount, program_id)
        },
        StabilityInstruction::CollectFees => {
            msg!("Instruction: CollectFees");
            process_collect_fees(accounts, program_id)
        },
        StabilityInstruction::UpdateFeeRate { new_rate } => {
            msg!("Instruction: UpdateFeeRate");
            process_update_fee_rate(accounts, new_rate, program_id)
        },
    }
}

fn process_initialize(
    accounts: &[AccountInfo],
    fee_rate: u64,
    treasury: Pubkey,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let pool_account = next_account_info(account_info_iter)?;
    let admin = next_account_info(account_info_iter)?;
    let rent = &Rent::from_account_info(next_account_info(account_info_iter)?)?;

    if !rent.is_exempt(pool_account.lamports(), pool_account.data_len()) {
        return Err(ProgramError::AccountNotRentExempt);
    }

    let mut pool_data = pool_account.try_borrow_mut_data()?;
    let mut pool = StabilityPool::unpack_unchecked(&pool_data)?;

    if pool.is_initialized {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    pool.is_initialized = true;
    pool.fee_rate = fee_rate;
    pool.treasury = treasury;
    pool.last_update_time = solana_program::clock::Clock::get()?.unix_timestamp;

    StabilityPool::pack(pool, &mut pool_data)?;

    Ok(())
}

fn process_deposit(
    accounts: &[AccountInfo],
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let pool_account = next_account_info(account_info_iter)?;
    let user_account = next_account_info(account_info_iter)?;
    let usdh_token_account = next_account_info(account_info_iter)?;

    let mut pool_data = pool_account.try_borrow_mut_data()?;
    let mut pool = StabilityPool::unpack(&pool_data)?;

    // Transfer USDH tokens to pool
    // Implementation needed for token transfer

    pool.total_deposits = pool.total_deposits.checked_add(amount)
        .ok_or(ProgramError::Overflow)?;

    // Update user deposit info
    let mut user_data = user_account.try_borrow_mut_data()?;
    let mut user_deposit = UserDeposit::unpack(&user_data)?;
    user_deposit.amount = user_deposit.amount.checked_add(amount)
        .ok_or(ProgramError::Overflow)?;

    StabilityPool::pack(pool, &mut pool_data)?;
    UserDeposit::pack(user_deposit, &mut user_data)?;

    Ok(())
}

fn process_withdraw(
    accounts: &[AccountInfo],
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let pool_account = next_account_info(account_info_iter)?;
    let user_account = next_account_info(account_info_iter)?;
    let usdh_token_account = next_account_info(account_info_iter)?;

    let mut pool_data = pool_account.try_borrow_mut_data()?;
    let mut pool = StabilityPool::unpack(&pool_data)?;

    let mut user_data = user_account.try_borrow_mut_data()?;
    let mut user_deposit = UserDeposit::unpack(&user_data)?;

    if user_deposit.amount < amount {
        return Err(ProgramError::InsufficientFunds);
    }

    // Transfer USDH tokens back to user
    // Implementation needed for token transfer

    pool.total_deposits = pool.total_deposits.checked_sub(amount)
        .ok_or(ProgramError::Overflow)?;
    user_deposit.amount = user_deposit.amount.checked_sub(amount)
        .ok_or(ProgramError::Overflow)?;

    StabilityPool::pack(pool, &mut pool_data)?;
    UserDeposit::pack(user_deposit, &mut user_data)?;

    Ok(())
}

fn process_collect_fees(accounts: &[AccountInfo], program_id: &Pubkey) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let pool_account = next_account_info(account_info_iter)?;
    let treasury_account = next_account_info(account_info_iter)?;
    let usdh_token_account = next_account_info(account_info_iter)?;

    let pool_data = pool_account.try_borrow_data()?;
    let pool = StabilityPool::unpack(&pool_data)?;

    // Calculate accumulated fees
    let time_elapsed = solana_program::clock::Clock::get()?.unix_timestamp - pool.last_update_time;
    let fee_amount = (pool.total_deposits * pool.fee_rate * time_elapsed as u64) / (365 * 24 * 3600 * 10000);

    // Transfer fees to treasury
    // Implementation needed for token transfer

    Ok(())
}

fn process_update_fee_rate(
    accounts: &[AccountInfo],
    new_rate: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let pool_account = next_account_info(account_info_iter)?;
    let admin = next_account_info(account_info_iter)?;

    if !admin.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    let mut pool_data = pool_account.try_borrow_mut_data()?;
    let mut pool = StabilityPool::unpack(&pool_data)?;

    // Maximum fee rate is 10% (1000 basis points)
    if new_rate > 1000 {
        return Err(ProgramError::InvalidArgument);
    }

    pool.fee_rate = new_rate;
    pool.last_update_time = solana_program::clock::Clock::get()?.unix_timestamp;

    StabilityPool::pack(pool, &mut pool_data)?;

    Ok(())
} 