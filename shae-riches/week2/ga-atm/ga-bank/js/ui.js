console.log('ui connected');


$('#checking-deposit').on('click', function(){

    $checkingAmountValue = parseInt($('#checking-amount').val());
    $depositIntoCheckingAcct();     //      invokes depositIntoCheckingAcct fuct.
    $('#checking-balance').text('$'+`${$balanceOfCheckingAcct}`);

    $('#checking-amount').val("");

}); //      closes checking-deposit.on-click

$('#savings-deposit').on('click', function(){
    
    // if ($('#savings-amount').val("")){
        
    //     $('#savings-amount').css('border', '3px solid red')

    // } else {
    $savingsAmountValue  = parseInt($('#savings-amount').val());
    $depositIntoSavingsAcct();      //      invokes depositIntoSavingsAcct fuct.
    $('#savings-balance').text('$'+`${$balanceOfSavingsAcct}`);
    
    $('#savings-amount').val("");


    // }
    
    

}); //      closes savings-deposit.on-click

// withdrawl savings function 

// withdrawl checkings function


