// Title: GA ATM App
// Summary

//     This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
//     You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

// Objectives:

//     DOM selection, appending, removal, updating
//     code organisation: separation of concerns, i.e. display logic vs. business logic




const bank = {
  accounts: [
    { name: "checking", balance: 200 },//account[0]
    { name: "savings", balance: 100 },//account[1]
  ],
  totalBalance: function () {
    let totalBalance = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      totalBalance += account.balance
    }
    return totalBalance;
  },
  deposit: function (accountToDepositTo, amountToDeposit) {
    //need to loop through an array of accounts to get the account holder's name
    //need to update account's balance
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      if (account.name === accountToDepositTo) {
        account.balance += amountToDeposit
        return account;
      }
    }
  },
  withdrawals: function (accountToWithdrawFrom, amountToWithdraw) {
    //need to loop through an array of accounts to get the account holder's name
    //need to update account's balance
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      if (account.name === accountToWithdrawFrom && account.balance >= amountToWithdraw) {
        account.balance -= amountToWithdraw;
        return account;

      } else if (account.name === accountToWithdrawFrom && account.balance <= amountToWithdraw) {
        // Correct account & insufficient balance
        if (this.totalBalance() >= amountToWithdraw) {
          // Enough money in accounts to make withdrawal
          console.log(`Insufficient balance in ${account.name}. We will overdraft your other account.`)

          // if account checking is less than amount, subtract money from another account 
          const amountToDeductFromOtherAccount = amountToWithdraw - account.balance

          if (this.accounts[0].name === accountToWithdrawFrom) {
            this.accounts[0].balance = 0 // removes money from specified account
            this.accounts[1].balance -= amountToDeductFromOtherAccount // then deduct remainder from other account
          } else if (this.accounts[1].name === accountToWithdrawFrom) {
            this.accounts[1].balance = 0 // removes money from specified account
            this.accounts[0].balance -= amountToDeductFromOtherAccount // then deduct remainder from other account
          }
          return account;
        } else {
          console.log(`No money, no honey! You only have ${this.totalBalance()} in your account. Go get the bacon baby boo`)
          return account;
        }
      }
    }
  }
}//bank object 




// DOM

// Helper Functions------------
const updateAccounts = function () {
  $('#checking-balance').text(`$ ${bank.accounts[0].balance}`)
  $('#savings-balance').text(`$ ${bank.accounts[1].balance}`)
  updateAccountsBackgroundColor()
}

const updateAccountsBackgroundColor = function () {
  if (bank.accounts[0].balance === 0) {
    $("#checking-balance").css("background", "red")
  } else {
    $("#checking-balance").css("background", "")
  }

  if (bank.accounts[1].balance === 0) {
    $("#savings-balance").css("background", "red")
  } else {
    $("#savings-balance").css("background", "")
  }
}

// const amountEnteredIntoChecking = function () {
//   const checkingEnterAmount = Number($("#checking-amount").val()); // getting value of input
//   $("#checking-amount").val('') // clearing value of input
//   console.log(checkingEnterAmount)
//   return checkingEnterAmount
// }

// const amountEnteredIntoSavings = function () {
//   const savingsEnterAmount = Number($("#savings-amount").val());
//   $("#savings-amount").val('')
//   console.log(savingsEnterAmount)
//   return savingsEnterAmount
// }

const getAmountInput = function (accountName) {
  const inputAmount = Number($(`#${accountName}-amount`).val());
  $(`#${accountName}-amount`).val('')
  console.log(inputAmount)
  return inputAmount
}
// ----------------------------

//show balance of both accounts 
updateAccounts()

$('#checking-deposit').on('click', function () {
  const depositAmount = getAmountInput('checking')
  bank.deposit('checking', depositAmount)
  updateAccounts()
});

//withdraw button 
$('#checking-withdraw').on('click', function () {
  const withdrawalAmount = getAmountInput('checking')
  bank.withdrawals('checking', withdrawalAmount)
  updateAccounts()
});


//SAVINGS ACCOUNT
//deposit
$('#savings-deposit').on('click', function () {
  const depositAmount = getAmountInput('savings')
  bank.deposit('savings', depositAmount)
  updateAccounts()

});

//withdraw button 
$('#savings-withdraw').on('click', function () {
  const withdrawalAmount = getAmountInput('savings')
  bank.withdrawals('savings', withdrawalAmount)
  updateAccounts()
});







//Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// When the balance of the bank account is $0 the background of that bank account should be red.It should be gray when there is money in the account.




