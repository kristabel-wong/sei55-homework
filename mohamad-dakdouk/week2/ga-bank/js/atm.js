
// Specification:

// Keep track of the checking and savings balances somewhere


// Add functionality so that a user can deposit money into one of the bank accounts.


// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.


// Add functionality so that a user can withdraw money from one of the bank accounts.


// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.


// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.



// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.


// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
// Avoid using the DOM to store your app data! This means you should try to store the account balances in JS variables and use them to update the DOM - don't query the HTML contents of a DOM element to find out what the current account balances are!

// aligning savings to checking


$(`#checking`).css({

    // flex: `center`,
    // display: `inline-block`
    // alignItems: `stretch`,
//    display: `flex`,
//    flexDirection: `column`,
//    float: `left`,
//    position: `center`,
  
});

$(`#savings`).css({
   
    // flex:zz
    position: `relative`,
    top: `-236px`,
    // display: `flex`,
    // flexDirection: `column`,
    // float: `right`,
  
  
});





// Created global veriables to store checking amount 
let checkingBalance = 0;
let savingBalance = 0;

// Check if the system is connect to JQ and CSS
console.log(`connected`);

// Create function to store data and local variables 
//// functions for deposit, including color

const savingsDeposit = function(){
    let savingAmount = parseInt($(`#savings-amount`).val());
    savingBalance = savingBalance + savingAmount;
    
    // inserting new total back into the display as $ 
    $(`#savings-balance`).html(`$${savingBalance}`);

    //Returning the color back to the orginal/keeping the same
    $(`#savings-balance`).css(`background-color`, `#E3E3E3`);

    // Clearing up the field below

    $(`#savings-amount`).val(``);
}

$(`#savings-deposit`).on(`click`, savingsDeposit);
        


const checkingDeposit = function(){
    let checkingAmount = parseInt($(`#checking-amount`).val());
    console.log(checkingBalance, `checking balance`);
    checkingBalance = checkingBalance + checkingAmount;
   
    $(`#checking-balance`).html(`$${checkingBalance}`);
    $(`#checking-balance`).css(`background-color`, `#E3E3E3`);
}

$(`#checking-deposit`).click(checkingDeposit);


// function for withdrawing including color

const checkingWithdraw = function(){
    let checkingAmount = parseInt($(`#checking-amount`).val());
    
// Checking current avaible balance before withdrawing 

    if (checkingBalance >= checkingAmount){
        checkingBalance = checkingBalance - checkingAmount;

        // must convert balance but into $ then return into display
        $(`#checking-balance`).html(`$${checkingBalance}`);

        // checking if other account can be used for withdrawal 
    } else if( savingBalance >= checkingAmount){
        savingBalance = savingBalance - checkingAmount;
        $(`savings-balance`).html(`$${savingBalance}`);
    } else {
        // CSS red background
        $(`#checking-balance`).css(`background-color`, `red`);
        console.log(`insufficent funds`)
    }
}

$(`#checking-withdraw`).click(checkingWithdraw);



const savingsWithdraw = function(){
    let savingAmount = parseInt($(`#savings-amount`).val());
    
    if (savingBalance >= savingAmount){
        savingBalance = savingBalance - savingAmount;
        $(`#savings-balance`).html(`$${savingBalance}`);
    } else if( checkingBalance >= savingAmount){
        checkingBalance = checkingBalance - savingAmount;
        $(`checking-balance`).html(`$${checkingBalance}`);
    } else {
        console.log(`insufficent funds`)
        $(`#savings-balance`).css(`background-color`, `red`);
    };
    // Clearing up the field below

    $(`#savings-amount`).val(``);
}

$(`#savings-withdraw`).click(savingsWithdraw);

