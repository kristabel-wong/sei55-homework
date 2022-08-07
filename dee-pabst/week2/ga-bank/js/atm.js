console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;');

// front end - display logic
const atm = function(){
    
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

    // enable buttons only when the input is valid
    $('input[type=\'text\']').on('keyup', function(e){
        const $siblingButtons = $(this).siblings('input[type=\'button\']');
        if(validateInput(e.target.value)){
            // activate buttons
            $siblingButtons.prop('disabled', false);
        } else{
            $siblingButtons.prop('disabled', true);
        }
    }) // input field validator handler

    // button click handler
    const $buttons = $('input[type=\'button\']')
    $buttons.on('click', function(e){
        // which button?
        // split halves of the <button> id e.g. #account-method
        let buttonId = (e.currentTarget.id).split('-');
        // find sibling input field
        const $inputField = $(this).siblings('input[type=\'text\']').val();
        // validate the input field contents
        validateInput($inputField);
        // parse to an int
        let amount = parseInt($inputField);
        // use first half of id to choose target account
        // use second half of id to decide method (deposit/withdraw)
        if(buttonId[1] === 'deposit'){
            bank.deposit(buttonId[0], amount);
        } else {
            let success = bank.withdraw(buttonId[0], amount);
            // if withdrawal successful play video
            if(success){
                playVideo();
            }
        }
        // refresh the screen
        refreshScreen();
    }) // buttons click handler
    
    const playVideo = function() {
        $('#atm-withdrawal').trigger('play');
    }
    
    // initialise UI
    refreshScreen();
} // atm()

atm();