
// console.log('Hello ATM challenge');
const atm = function(){


    const $div = $('div');
    const $divCheckingAccount = $('#checking.account');
    const $divSavingsAccount = $('#savings.account');
    const $body = $('body');
    const $input = $('input');
    const $balance = $('.balance');
        
    $div.css({
        width: '100%',
        marginTop: '20px',
    }),

    $divCheckingAccount.css({
        borderRadius: '5px',
        padding: '10px',
        width: '40%',
        marginLeft: '65px',
        marginRight: '5px',

    }),


    $divSavingsAccount.css({
        borderRadius: '5px',
        padding: '10px',
        width: '40%',
        marginRight: '65px',
        marginLeft: '5px',

    }),


    $body.css({
        background: 'black',

    }),


    $input.css({
        borderRadius: '5px',
        padding: '5px',
        marginTop: '5px',

    })

    $balance.css({
        borderRadius: '5px',
        backgroundColor: 'rgb(211, 211, 211)',
        marginBottom: '5px',
    })

    // debugger


    // ATM


    // CHECKING DEPOSIT
    let checkingBalance = 0; // base value 
    const $displayCheckingBalance = $('#checking-balance');

    const checkingDeposit = function() {

        let checkingValue = parseInt($(`#checking-amount`).val());
        checkingBalance = checkingBalance + checkingValue;
        $('#checking-balance').css('background-color', 'rgb(211, 211, 211)');

        $displayCheckingBalance.html(`$${checkingBalance}`);
        console.log(checkingBalance); 

    }; // closes checkingDeposit

    $('#checking-deposit').on('click', checkingDeposit);
    // $('#checking-deposit').on( 'click', function() {
    //     $('#checking-amount').val('');
    // } );


    // CHECKING WITHDRAWAL
    const withdrawChecking = function() {

        let checkingValue = parseInt($(`#checking-amount`).val());
        
        if ( checkingBalance === 0 ){
            console.log('checkingBalance = 0');
        // if value = 0, turn checking background red   
            $('#checking-balance').css('background-color', 'red');

        } else if (checkingBalance >= checkingValue) {
            checkingBalance = checkingBalance - checkingValue;
            // return checkingBalance - checkingValue;
        } else if (checkingValue > checkingBalance) {
            // return "Insufficient Funds";  
            
        };

        // console.log(withdrawChecking);
        $displayCheckingBalance.html(`$${checkingBalance}`);
        console.log(checkingBalance);
        
    }; //   closes withdrawChecking

    $('#checking-withdraw').on('click', withdrawChecking);
    // $('#checking-withdraw').on( 'click', function() {
    //     $('#checking-amount').val('');
    // } );
    // Problems to solve

    // keep '$' in display
    // $displayCheckingBalance.html(`$${checkingBalance}`);

    // once value reaches 0, can't go below.
    // if-else statement

    // once value reaches 0, turn red. Use below in if-statement
    // $('#checking-balance').css('background-color', 'red')
    // $('#savings-balance').css('background-color', 'red')

    // clear value field after button clicked
    //event handler 


    // SAVINGS ATM
    let savingsBalance = 0; // base value 
    // console.log($savingsBalance); 
    const $displaySavingsBalance = $('#savings-balance');

    // SAVINGS DEPOSIT 
    const savingsDeposit = function() {

        let savingsValue = parseInt($(`#savings-amount`).val());
        savingsBalance = savingsBalance + savingsValue;
        $('#savings-balance').css('background-color', 'rgb(211, 211, 211)');

        $displaySavingsBalance.html(`$${savingsBalance}`);
        console.log(savingsBalance); 

    }; // closes savingsDeposit

    $('#savings-deposit').on('click', savingsDeposit);
    // $('#savings-deposit').on( 'click', function() {
    //     $('#savings-amount').val('');
    // } )

    // SAVINGS WITHDRAWAL
    const savingsWithdraw = function() {
        
        let savingsValue = parseInt($(`#savings-amount`).val());
        
        if ( savingsBalance === 0 ){
                console.log('savingsBalance = 0');
            // if value = 0, turn deposit background red
                $('#savings-balance').css('background-color', 'red')
            
            } else if (savingsBalance >= savingsValue) {
                savingsBalance = savingsBalance - savingsValue;

            } else if (savingsValue > savingsBalance) {
                return "Insufficient funds";
        };
        
        $displaySavingsBalance.html(`$${savingsBalance}`);
        console.log(savingsBalance); 
        
                
    }; // closes savingsWithdraw
            
    $('#savings-withdraw').on('click', savingsWithdraw);
    // $('#savings-withdraw').on( 'click', function() {
    //     $('#savings-amount').val('');
    // } )       
};

atm();