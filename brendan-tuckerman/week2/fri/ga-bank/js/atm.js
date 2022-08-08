console.log('Mic check one two one two');

//========BANK==========//

const bank = {

account:  //account details
        {
            accountNumber: 101,
            firstName: "Alice",
            lastName: "Pung",
            checkingBalance: 2000 ,
            savingsBalance: 1000,

    },

    getBalance: function( accountType ) { //this duplication could be avoided with a parameter
        return this.account[`${accountType}Balance`];
    },

    setBalance: function ( accountType, newAmount ) {
        this.account[`${accountType}Balance`] = newAmount;
    },


    calculateTotalFunds: function () { //returns a total count of all the money in the two accounts
        return this.account.checkingBalance + this.account.savingsBalance;  
    },  //end calculateTotal funds


    depositFunds: function ( accountType, depositAmount ) {
        //add deposit amount
        if (depositAmount > 0){
            this.account[`${accountType}Balance`] += depositAmount; //DRY
        } else {
            return this.account[`${accountType}Balance`]; //if nothing or letters are entered
        }
    }, //end depositFunds


    withdrawFunds: function ( accountType, withdrawAmount ) { //returns True or False dependent on whether withdrawal is possible
        const currentAccountBalance =  this.account[`${[accountType]}Balance`];
        const finalBalance = currentAccountBalance - withdrawAmount;
        const oldTotalFunds = this.calculateTotalFunds();
        const newTotalFunds = oldTotalFunds - withdrawAmount
        
        //determine whether the withdrawal is possible
        if (finalBalance >= 0) {
            this.setBalance(accountType, finalBalance)
            return true;
        } 
        else if (newTotalFunds >= 0 && accountType === 'checking'){
            this.setBalance('checking', 0);
            this.setBalance('savings', newTotalFunds);
            return true;
        }       
        else {
            console.log(`*****Insufficient Funds******`);
            return false;
        } //end if/else

    }, //end withdrawFunds


}; //end bank


//=========INIT===========//

//Display balances
$('#checking-balance').html(`$${bank.getBalance('checking')}`);
$('#savings-balance').html(`$${bank.getBalance('savings')}`);

//=========ATM============//



//Displays red if balance is at 0, grey if not
const displayRed = (accountType) => {
    if ($(`#${accountType}-balance`).html() === '$0'){
        $(`#${accountType}-balance`).css('backgroundColor', 'red')
    }
    else {
        $(`#${accountType}-balance`).css('backgroundColor', '#e3e3e3')
    }
}; //end displayRed



//deposit funds into a checking account
$('#checking-deposit').on('click', function() {
    const amount = $('#checking-amount').val();
    bank.depositFunds('checking', parseInt(amount));
    $('#checking-balance').html(`$${bank.getBalance('checking')}`);
    displayRed('checking');
});

//checking withdrawal button
$('#checking-withdraw').on('click', function() {
    const amount = $('#checking-amount').val();
    bank.withdrawFunds('checking', parseInt(amount));
    $('#checking-balance').html(`$${bank.getBalance('checking')}`);
    $('#savings-balance').html(`$${bank.getBalance('savings')}`);
    displayRed('checking');
    displayRed('savings');
});

//deposit funds into a savings account
$('#savings-deposit').on('click', function() {
    const amount = $('#savings-amount').val();
    bank.depositFunds('savings', parseInt(amount));
    $('#savings-balance').html(`$${bank.getBalance('savings')}`);
    displayRed('savings');
});

//Savings withdrawal button
$('#savings-withdraw').on('click', function() {
    const amount = $('#savings-amount').val();
    bank.withdrawFunds('savings', parseInt(amount));
    $('#checking-balance').html(`$${bank.getBalance('checking')}`);
    $('#savings-balance').html(`$${bank.getBalance('savings')}`);
    displayRed('savings');
});


