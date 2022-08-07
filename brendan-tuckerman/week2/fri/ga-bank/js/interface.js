

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


export * from "./interface.js" 