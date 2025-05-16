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
pub struct TokenAccount {
    pub mint: Pubkey,
    pub owner: Pubkey,
    pub amount: u64,
    pub delegate: Option<Pubkey>,
    pub state: AccountState,
    pub is_native: Option<u64>,
    pub delegated_amount: u64,
    pub close_authority: Option<Pubkey>,
}

#[derive(Debug, PartialEq)]
pub enum AccountState {
    Uninitialized,
    Initialized,
    Frozen,
}

impl Default for AccountState {
    fn default() -> Self {
        AccountState::Uninitialized
    }
}

#[derive(Debug)]
pub enum USDHInstruction {
    InitializeMint {
        decimals: u8,
        mint_authority: Pubkey,
        freeze_authority: Option<Pubkey>,
    },
    InitializeAccount,
    Transfer { amount: u64 },
    Mint { amount: u64 },
    Burn { amount: u64 },
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = USDHInstruction::unpack(instruction_data)?;

    match instruction {
        USDHInstruction::InitializeMint { decimals, mint_authority, freeze_authority } => {
            msg!("Instruction: InitializeMint");
            process_initialize_mint(accounts, decimals, mint_authority, freeze_authority, program_id)
        },
        USDHInstruction::InitializeAccount => {
            msg!("Instruction: InitializeAccount");
            process_initialize_account(accounts, program_id)
        },
        USDHInstruction::Transfer { amount } => {
            msg!("Instruction: Transfer");
            process_transfer(accounts, amount, program_id)
        },
        USDHInstruction::Mint { amount } => {
            msg!("Instruction: Mint");
            process_mint(accounts, amount, program_id)
        },
        USDHInstruction::Burn { amount } => {
            msg!("Instruction: Burn");
            process_burn(accounts, amount, program_id)
        },
    }
}

fn process_initialize_mint(
    accounts: &[AccountInfo],
    decimals: u8,
    mint_authority: Pubkey,
    freeze_authority: Option<Pubkey>,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let mint_info = next_account_info(account_info_iter)?;
    let rent = &Rent::from_account_info(next_account_info(account_info_iter)?)?;

    if !rent.is_exempt(mint_info.lamports(), mint_info.data_len()) {
        return Err(ProgramError::AccountNotRentExempt);
    }

    let mut mint_data = mint_info.try_borrow_mut_data()?;
    let mint = TokenAccount::unpack_unchecked(&mint_data)?;
    if mint.is_initialized() {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    // Initialize mint data
    let mint = TokenAccount {
        mint: *mint_info.key,
        owner: mint_authority,
        amount: 0,
        delegate: None,
        state: AccountState::Initialized,
        is_native: None,
        delegated_amount: 0,
        close_authority: freeze_authority,
    };
    TokenAccount::pack(mint, &mut mint_data)?;

    Ok(())
}

fn process_initialize_account(accounts: &[AccountInfo], program_id: &Pubkey) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let account = next_account_info(account_info_iter)?;
    let mint = next_account_info(account_info_iter)?;
    let owner = next_account_info(account_info_iter)?;
    let rent = &Rent::from_account_info(next_account_info(account_info_iter)?)?;

    if !rent.is_exempt(account.lamports(), account.data_len()) {
        return Err(ProgramError::AccountNotRentExempt);
    }

    let mut account_data = account.try_borrow_mut_data()?;
    let mut acc = TokenAccount::unpack_unchecked(&account_data)?;

    if acc.is_initialized() {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    acc.mint = *mint.key;
    acc.owner = *owner.key;
    acc.state = AccountState::Initialized;
    TokenAccount::pack(acc, &mut account_data)?;

    Ok(())
}

fn process_transfer(
    accounts: &[AccountInfo],
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let source = next_account_info(account_info_iter)?;
    let destination = next_account_info(account_info_iter)?;
    let authority = next_account_info(account_info_iter)?;

    let mut source_data = source.try_borrow_mut_data()?;
    let mut source_account = TokenAccount::unpack(&source_data)?;

    let mut dest_data = destination.try_borrow_mut_data()?;
    let mut dest_account = TokenAccount::unpack(&dest_data)?;

    if source_account.amount < amount {
        return Err(ProgramError::InsufficientFunds);
    }

    source_account.amount = source_account.amount.checked_sub(amount)
        .ok_or(ProgramError::Overflow)?;
    dest_account.amount = dest_account.amount.checked_add(amount)
        .ok_or(ProgramError::Overflow)?;

    TokenAccount::pack(source_account, &mut source_data)?;
    TokenAccount::pack(dest_account, &mut dest_data)?;

    Ok(())
}

fn process_mint(
    accounts: &[AccountInfo],
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let mint = next_account_info(account_info_iter)?;
    let account = next_account_info(account_info_iter)?;
    let owner = next_account_info(account_info_iter)?;

    let mut account_data = account.try_borrow_mut_data()?;
    let mut token_account = TokenAccount::unpack(&account_data)?;

    token_account.amount = token_account.amount.checked_add(amount)
        .ok_or(ProgramError::Overflow)?;

    TokenAccount::pack(token_account, &mut account_data)?;

    Ok(())
}

fn process_burn(
    accounts: &[AccountInfo],
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let account = next_account_info(account_info_iter)?;
    let owner = next_account_info(account_info_iter)?;

    let mut account_data = account.try_borrow_mut_data()?;
    let mut token_account = TokenAccount::unpack(&account_data)?;

    if token_account.amount < amount {
        return Err(ProgramError::InsufficientFunds);
    }

    token_account.amount = token_account.amount.checked_sub(amount)
        .ok_or(ProgramError::Overflow)?;

    TokenAccount::pack(token_account, &mut account_data)?;

    Ok(())
} 