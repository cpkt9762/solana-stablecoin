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
pub struct PriceData {
    pub price: u64,
    pub last_update_time: i64,
    pub is_initialized: bool,
}

#[derive(Debug)]
pub enum OracleInstruction {
    Initialize,
    UpdatePrice { price: u64 },
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = OracleInstruction::unpack(instruction_data)?;

    match instruction {
        OracleInstruction::Initialize => {
            msg!("Instruction: Initialize");
            process_initialize(accounts, program_id)
        },
        OracleInstruction::UpdatePrice { price } => {
            msg!("Instruction: UpdatePrice");
            process_update_price(accounts, price, program_id)
        },
    }
}

fn process_initialize(accounts: &[AccountInfo], program_id: &Pubkey) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let price_account = next_account_info(account_info_iter)?;
    let admin = next_account_info(account_info_iter)?;
    let rent = &Rent::from_account_info(next_account_info(account_info_iter)?)?;

    if !rent.is_exempt(price_account.lamports(), price_account.data_len()) {
        return Err(ProgramError::AccountNotRentExempt);
    }

    let mut price_data = price_account.try_borrow_mut_data()?;
    let mut oracle = PriceData::unpack_unchecked(&price_data)?;

    if oracle.is_initialized {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    oracle.is_initialized = true;
    oracle.price = 0;
    oracle.last_update_time = solana_program::clock::Clock::get()?.unix_timestamp;

    PriceData::pack(oracle, &mut price_data)?;

    Ok(())
}

fn process_update_price(
    accounts: &[AccountInfo],
    new_price: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let price_account = next_account_info(account_info_iter)?;
    let admin = next_account_info(account_info_iter)?;

    // Verify admin signature
    if !admin.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    let mut price_data = price_account.try_borrow_mut_data()?;
    let mut oracle = PriceData::unpack(&price_data)?;

    oracle.price = new_price;
    oracle.last_update_time = solana_program::clock::Clock::get()?.unix_timestamp;

    PriceData::pack(oracle, &mut price_data)?;

    Ok(())
}

// Helper function to get current price
pub fn get_price(price_account: &AccountInfo) -> Result<u64, ProgramError> {
    let price_data = price_account.try_borrow_data()?;
    let oracle = PriceData::unpack(&price_data)?;
    
    // Check if price is stale (older than 1 hour)
    let current_time = solana_program::clock::Clock::get()?.unix_timestamp;
    if current_time - oracle.last_update_time > 3600 {
        return Err(ProgramError::InvalidAccountData);
    }

    Ok(oracle.price)
} 