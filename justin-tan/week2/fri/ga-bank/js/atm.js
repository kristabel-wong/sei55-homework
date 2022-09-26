//LETS DO THIS!!!!!!!!!!!!!!!
// console.log('LETSGO')

// Specification:

//     Keep track of the checking and savings balances somewhere
//     Add functionality so that a user can deposit money into one of the bank accounts.
//     Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
//     Add functionality so that a user can withdraw money from one of the bank accounts.
//     Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
//     Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
//     When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
//     What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
//     Make sure there is overdraft protection going both ways.
//     Are there ways to refactor your code to make it DRYer?
//     Avoid using the DOM to store your app data! This means you should try to store the account balances in JS variables and use them to update the DOM - don't query the HTML contents of a DOM element to find out what the current account balances are!



//PSUEDOCODE
//1. Get the data (amount) from the input into JS. 
//1a. make sure that the data collected is in a form of number, if it is a string you will need to convert it to number.

//2. (For the checking account), once the amount is gathered, depending on which button is clicked:
    //2a. When the "deposit" button is clicked, add the amount to the acccount.
    //2b. When the "withdraw" button is clicked, subtract the amount to the account.

//3. Repeat step 1-2 for another "savings account".

//4. Things to note while withdrawing:
    //a. If the withdrawal amount is higher than the balance in the respective account, it will withdraw all the money in that account (which results in $0 and a red background), and proceed to withdraw the remaining from the second other account. (this is called overdraft protection)
    
    //b. if the sum of both accounts are less than the withdrawal amount, the transaction will not happen and it will give an error saying "insufficient funds"


//Questions:
//ask about DRY code
//ask about "total balance" variable - being local or global


//global variables for balances
let $checkingBalance = 0    //do not need $ for this variable
let $savingsBalance = 0


//==========================================================


//function for CHECKING ACCOUNT deposit
const checkingDeposit = function() {
    //set input value into a number
    const $checkingValue = $('#checking-amount').val();
    const $checkingAmount = parseInt($checkingValue);
    
    //add input amount into account balance
    $checkingBalance = $checkingBalance + $checkingAmount;
    $('#checking-balance').text(`$${$checkingBalance}`);
}

//==========================================================

//function for CHECKING ACCOUNT withdrawal
const checkingWithdrawal = function() {
    //set variable for total balance
    let totalBalance = $checkingBalance + $savingsBalance;

    //set input value into a number
    const $checkingValue = $('#checking-amount').val();
    const $checkingAmount = parseInt($checkingValue);
    
    //set conditions for withdrawal:
    //when you have sufficient balance to initiate withdraw
    if ( $checkingBalance >= $checkingAmount ) {
        $checkingBalance = $checkingBalance - $checkingAmount;
        $('#checking-balance').text(`$${$checkingBalance}`)
        
        //when overdraft protection initiated
    } else if ( $checkingBalance < $checkingAmount && $checkingAmount <= totalBalance) {
        
        //set variable for overdraft
        let overdraft = $checkingBalance - $checkingAmount;
        
        //formula for remaining balances for both account
        $checkingBalance = $checkingBalance - $checkingBalance;
        $savingsBalance = $savingsBalance + overdraft; //could use a comment
        $('#checking-balance').text(`$${$checkingBalance}`);
        $('#savings-balance').text(`$${$savingsBalance}`);
    
        //when you have insufficient total balance to withdraw //dry up the conditions
    } else if ( $checkingAmount > totalBalance ) {
        $('#checking-balance').text(`Insufficient $$`)  
    }
}

//===========================================================


//function for CHECKING BALANCE background color
const backgroundCheckingColor = function () {
    if ( ($checkingBalance === 0 || $(`#checking-balance`).text() === `Insufficient $$`) ) {
        $('#checking-balance').css('background-color', 'red');
    } else {
        $('#checking-balance').css('background-color', 'rgb(227, 227, 227');
    }
}

//===========================================================


//event handlers for checking account deposit and withdrawal buttons
$('#checking-deposit').on( 'click', checkingDeposit );
$('#checking-withdraw').on( 'click', checkingWithdrawal );


//event handlers for checking account background color
$('#checking-withdraw').on( 'click', backgroundCheckingColor );
$('#checking-deposit').on( 'click', backgroundCheckingColor );


//=========================================================
//=========================================================
//=========================================================


//function for SAVINGS deposit
const savingsDeposit = function() {
    //set input value into a number
    const $savingsValue = $('#savings-amount').val();
    const $savingsAmount = parseInt($savingsValue);

    //add input amount into account balance
    $savingsBalance = $savingsBalance + $savingsAmount;
    $('#savings-balance').text(`$${$savingsBalance}`);
}

//===========================================================


//function for SAVINGS withdrawal
const savingsWithdrawal = function() {
    //set variable for total balance
    let totalBalance = $checkingBalance + $savingsBalance

    //set input value into a number
    const $savingsValue = $('#savings-amount').val();
    const $savingsAmount = parseInt($savingsValue);
    
    //set conditions withdrawal:
    //when you have sufficient balance to initiate withdraw
    if ( $savingsBalance >= $savingsAmount ) {
        $savingsBalance = $savingsBalance - $savingsAmount;
        $('#savings-balance').text(`$${$savingsBalance}`);
    
    //when overdraft protection initiated
    } else if ( $savingsBalance < $savingsAmount && $savingsAmount <= totalBalance) {
        
        //set variable for overdraft
        let overdraft = $savingsBalance - $savingsAmount;

        //formula for remaining balances for both account
        $savingsBalance = $savingsBalance - $savingsBalance;
        $checkingBalance = $checkingBalance + overdraft;
        $('#checking-balance').text(`$${$checkingBalance}`) ;
        $('#savings-balance').text(`$${$savingsBalance}`);

    //when you have insufficient total balance to withdraw
    } else if ( $savingsAmount > totalBalance ) {
        $('#savings-balance').text(`Insufficient $$`);
    }
}

//===========================================================

//function for SAVINGS BALANCE background color
const backgroundSavingsColor = function () {
    if ( ($savingsBalance === 0 || $(`#savings-balance`).text() === `Insufficient $$`) ) {
        $('#savings-balance').css('background-color', 'red');
    } else {
        $('#savings-balance').css('background-color', 'rgb(227, 227, 227');
    }
}

//============================================================

//event handlers for savings account deposit and withdrawal buttons
$('#savings-deposit').on( 'click', savingsDeposit );
$('#savings-withdraw').on( 'click', savingsWithdrawal );

//event handlers for checking account background color
$('#savings-withdraw').on( 'click', backgroundSavingsColor );
$('#savings-deposit').on( 'click', backgroundSavingsColor );


//============================================================

//event handlers to return input field to default
$('#checking-deposit').on( 'click', function() {
    $('#checking-amount').val('');
} )

$('#checking-withdraw').on( 'click', function() {
    $('#checking-amount').val('');
} )

$('#savings-deposit').on( 'click', function() {
    $('#savings-amount').val('');
} )

$('#savings-deposit').on( 'click', function() {
    $('#savings-amount').val('');
} )

//============================================================







