console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;');

// back-end - business logic
const bank = {
    checking: 2,
    savings: 100,
    deposit: function(account, amount){
        this[account] = this[account] + amount;
        console.log(`deposited ${amount} into account ${account}`);
        return this[account];
    },
    withdraw: function(account, amount){
 
        // check if account has enough funds to withdraw
        if(this[account] >= amount){
            this[account] = this[account] - amount;
            console.log(`withdrew ${amount} from account ${account}`);
        } else{
            // check the other acount has enough to withdraw shortfall
            let shortfall = Math.abs(this[account] - amount);
            let otherAccount;
            if(account === 'checking'){
                otherAccount = 'savings';
            }else{
                otherAccount = 'checking';
            }
            // if there is enough in both accounts to cover the withdrawal
            // withdraw all of the first accounts funds
            // withdraw the shortfall from the second
            if(this[otherAccount] >= shortfall){
                // adjust respective balances
                this[account] = this[account] - (amount - shortfall);
                this[otherAccount] = this[otherAccount] - shortfall;
                console.log(`withdrew ${amount - shortfall} from account ${account}`);
                console.log(`withdrew ${shortfall} from account ${otherAccount}`);
            }
        }
        return this[account];
    }
}

// front end - display logic
const atm = function(){
    
    // ATM UI controls
    // Checking screen
    const $checkingInputField = $('#checking-amount');
    const $depositToCheckingButton = $('#checking-deposit');
    const $withdrawFromCheckingButton = $('#checking-withdraw');
    
    // Savings screen
    const $savingsInputField = $('#savings-amount');
    const $depositToSavingsButton = $('#savings-deposit');
    const $withdrawFromSavingsButton = $('#savings-withdraw');
    
    // input validation helper function
    const validateInput = function(input){
        let isValid;
        let parsed = parseInt(input);
        if(isNaN(parsed) === false){
            if(parsed > 0){
                isValid = true;
            } else {
                isValid = false;
                console.log(`input ${input} is zero or a negative number`);
            }
        } else {
            console.log(`Invalid input ${input} is not a number`);
            isValid = false;
        }
        return isValid;
    } // validateInput()

    const refreshScreen = function(){
        
        // update balances to the screen
        $('#checking-balance').html(`$ ${bank.checking}`);
        $('#savings-balance').html(`$ ${bank.savings}`);
        
        // check if amounts are zero and adjust the BG color
        if(bank.checking > 0){
            $('#checking-balance').css('background-color', 'grey');
        } else {
            $('#checking-balance').css('background-color', 'red');
        }
        if(bank.savings > 0){
            $('#savings-balance').css('background-color', 'grey');
        } else {
            $('#savings-balance').css('background-color', 'red');
        }
        
        // deactivate buttons
        $('input[type=\'button\']').prop('disabled', true);
        
        // clear inputs
        $('input[type=\'text\']').val('');

    } // refreshScreen()

    // enable buttons only when the input is valid
    $('input[type=\'text\']').on('keyup', function(e){
        const $siblingButtons = $(this).siblings('input[type=\'button\']');
        if(validateInput(e.target.value)){
            // activate buttons
            $siblingButtons.prop('disabled', false);
        } else{
            $siblingButtons.prop('disabled', true);
        }
    })

    $depositToCheckingButton.on('click', function(){
        if(validateInput($checkingInputField.val())){
            let amount = parseInt($checkingInputField.val());
            bank.deposit('checking', amount);
            refreshScreen();
        }
    })
    
    $withdrawFromCheckingButton.on('click', function(){
        if(validateInput($checkingInputField.val())){
            let amount = parseInt($checkingInputField.val())
            bank.withdraw('checking', amount);
            refreshScreen();
        }
    })
    
    $depositToSavingsButton.on('click', function(){
        if(validateInput($savingsInputField.val())){
            let amount = parseInt($savingsInputField.val());
            bank.deposit('savings', amount);
            refreshScreen();
        }
    })
    
    $withdrawFromSavingsButton.on('click', function(){
        if(validateInput($savingsInputField.val())){
            let amount = parseInt($savingsInputField.val())
            bank.withdraw('savings', amount);
            refreshScreen();
        }
    })

    // initialise UI
    refreshScreen();

} // atm()

atm();