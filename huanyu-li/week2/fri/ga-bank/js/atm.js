// https://gist.github.com/textchimp/c71a71a95ab2ff17539f48decf42c367

import { balance, assignTask } from './bank.js';

// ========== Frontend : ATM ===============
const atm = {
    // atm Object used to manipulate the DOM using jQuery

    getData: function () {
        // !!!!!!'this' is HTML button!!!!!
        const account = this.id.split('-')[0]
        // checking or savings
        const action = this.id.split('-')[1]
        // deposit or withdraw
        const $input = $('#' + account + '-amount');
        const $amount = Number($input.val());
        // string to number

        const anotherAccount = account === 'savings' ? 'checking' : 'savings';
        const anotherAccountAmount = balance[anotherAccount];
        // monitor another account to see if it change

        !isNaN($amount) && $amount >= 0 && assignTask(account, action, $amount);
        // check if the amount is a number, then send the information to the backend bank to process the data

        if (balance[anotherAccount] !== anotherAccountAmount) {
            atm.display(anotherAccount, balance)
        } // if the another account amount changed, updats the another account information, otherwise skip.

        atm.display(account, balance);
        // update the balance to the DOM

        $input.val('').focus();
        // reset the input

    }, // getData

    display: function (account, balance) {
        const amount = balance[account];
        const isSufficient = balance.isSufficient;

        if (isSufficient) {
            const $accHTML = $(`#${account}-balance`);
            $accHTML.text('$' + amount);
            amount === 0 ? $accHTML.css('background-color', 'red') :
                $accHTML.css('background-color', '#E3E3E3')
        } else {
            const $alertDiv = $('<div>').text('InSufficient').addClass('balance').css({
                color: 'red',
                position: 'relative',
                top: '-143px'
            });
            $alertDiv.appendTo('#content').fadeOut(3000)
        }
    }, // display
}


//============ Events ============

// $("#checking-deposit").on('click', atm.getData);
// $('#checking-withdraw').on('click', atm.getData);

// $('#savings-deposit').on('click', atm.getData);
// $('#savings-withdraw').on('click', atm.getData);

$("input[type='button']").on('click',atm.getData)
//learned from Dee