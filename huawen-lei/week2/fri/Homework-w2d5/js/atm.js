
// ** Keep track of the checking and savings balances somewhere
// store in an object

// ** Add functionality so that a user can deposit money into one of the bank accounts.
// this part is in js


// ** Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// use DOM with jquery to get the value from js variables and show on HTML

// ** Add functionality so that a user can withdraw money from one of the bank accounts.
// this part is in js

// ** Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// this part is in DOM with jquery


// ** Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// this part is in js

// ** When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// this part is in DOM with jquery

// ** What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// 1. check checking account first
// 2. if not enough, check the saving account
// 3. if the sum are not enough, ignore it (return false?)
// 4. if saving is enough, decrease from the saving account

// ** Make sure there is overdraft protection going both ways.
// ** Are there ways to refactor your code to make it DRYer?
// ** Avoid using the DOM to store your app data! This means you should try to store the account balances in JS variables and use them to update the DOM - don't query the HTML contents of a DOM element to find out what the current account balances are!

console.log(`This is ATM APP`);

// /* ------------------------------------ version 1 ---------------------------------------- */

// // put two bank accounts into an object, and set the initial value is 0
// const bank = {
// checkingAccount : 0,
// savingAccount : 0,
// };

//define global variable
// let amount;

// /*------------------ deposit ---------------------- */
// // Add functionality so that a user can deposit money into one of the bank accounts
// const deposit = function(accName, amount){
//     bank[accName] += amount;
// }; //deposit()

// //updating the display and manipulating the HTML of the page so a user can see the change
// // 1. get the input deposit amount
// $('#checking-amount').on('keyup', function(){
//     amount = $(this).val(); //if it is let amount, amount is a locol variable, if there is no let or const, it is default to be a global variable
//     // amount = event.target.value; //same
//     // console.log(amount);
// });

// // 2. click deposit button then run the deposit function
// $('#checking-deposit').on('click', function(){

//     // change input value from a string to a number
//     const amountInt = parseInt(amount);
//     deposit('checkingAccount', amountInt)
//     // console.log(bank['checkingAccount']);//for check
//     // console.log(amountInt);//for check

//     // 3. get value from bank object then display on GUI
//     $('#checking-balance').html(`$${bank['checkingAccount']}`); 
//     $('#checking-balance').css('background-color', '#E3E3E3');
    
//     $('#checking-amount').val('');// but the value still in the input frame. how to clear the last input completely??????????????????????
// });


// //saving account
// $('#savings-amount').on('keyup', function(){
//     amount = $(this).val();
// })

// $('#savings-deposit').on('click', function(){

//     const amountInt = parseInt(amount);
//     deposit('savingAccount', amountInt)

//     $('#savings-balance').html(`$${bank['savingAccount']}`);
//     $('#savings-balance').css('background-color', '#E3E3E3');

//     $('#savings-amount').val('');
// });


// /*------------------ withdraw ---------------------- */
// // Add functionality so that a user can withdraw money from one of the bank accounts.
// const withdraw = function(accName, amount){

//     let currentAccountAmount = bank[accName];

//     //Decide which account we withdraw money from, if money is not enough we will ask if the other account have enough money, if both not, return false
//     if(accName === 'checkingAccount'){
//         if(bank[accName] < amount){
//             // if the other account have enough extra money
//             if(bank['savingAccount'] >= amount - bank[accName]){
//                 bank['savingAccount'] -= amount - bank[accName];
//                 bank[accName] = 0;
//             } else{// if both not, ignore that transaction
//                 return false;
//             }
//         } else{ // if the current account have enough money
//             bank[accName] -= amount;    
            
//             // console.log(bank[accName]);// for check
//             // return bank[accName];
//         }
//     } 
//     else if(accName === 'savingAccount'){
//         if(bank[accName] < amount){
//             // if the other account have enough extra money
//             if(bank['checkingAccount'] >= amount - bank[accName]){
//                 bank['checkingAccount'] -= amount - bank[accName];
//                 bank[accName] = 0;
//             } else{// if both not
//                 return false;
//             }
//         } else{
//             bank[accName] -= amount;
//         }
//     }

// }; //withdraw()


// //updating the display and manipulating the HTML of the page so a user can see the change.
// // 1. get the input deposit amount
// $('#checking-amount').on('keyup', function(){
//     amount = $(this).val(); 
//     // console.log(amount);// for check
// });

// // 2. click deposit button then run the deposit function
// $('#checking-withdraw').on('click', function(){

//     // change input value from a string to a number
//     const amountInt = parseInt(amount);
//     // console.log(`amountInt`,amountInt);// for check
//     withdraw('checkingAccount', amountInt)
//     // console.log(bank['checkingAccount']);//for check
//     // console.log(amountInt);//for check

//     // 3. get value from bank object then display on GUI
//     $('#checking-balance').html(`$${bank['checkingAccount']}`); 
//     $('#savings-balance').html(`$${bank['savingAccount']}`);

//     // When the balance of the bank account is $0 the background of that bank account should be red.
//     if (bank['checkingAccount'] === 0 && bank['savingAccount'] === 0){
//         $('#savings-balance').css('background-color', 'red');
//     }

//     if (bank['checkingAccount'] === 0){
//         $('#checking-balance').css('background-color', 'red');
//     } 

//     $('#checking-amount').val('');
// });


// //saving account
// $('#savings-amount').on('keyup', function(){
//     amount = $(this).val();
// })

// $('#savings-withdraw').on('click', function(){

//     const amountInt = parseInt(amount);
//     withdraw('savingAccount', amountInt)

//     $('#checking-balance').html(`$${bank['checkingAccount']}`); 
//     $('#savings-balance').html(`$${bank['savingAccount']}`);

//     if (bank['savingAccount'] === 0){
//         $('#savings-balance').css('background-color', 'red');
//     }

//     if (bank['checkingAccount'] === 0 && bank['savingAccount'] === 0){
//         $('#checking-balance').css('background-color', 'red');
//     } 

//     $('#savings-amount').val('');
// });



/* ------------------------------------ version 2 ---------------------------------------- */

//updating the display and manipulating the HTML of the page so a user can see the change
// click deposit button then get the input deposit amount then run the deposit function
$('#checking-deposit').on('click', function(){

    // change input value from a string to a number
    const amountInt = parseInt($('#checking-amount').val());
    deposit('checkingAccount', amountInt);

    // 3. get value from bank object then display on GUI
    $('#checking-balance').html(`$${bank['checkingAccount']}`)
                          .css('background-color', '#E3E3E3');
    
    $('#checking-amount').val('');
});


//saving account  
$('#savings-deposit').on('click', function(){
    
    const amountInt = parseInt($('#savings-amount').val())
    deposit('savingAccount', amountInt)

    $('#savings-balance').html(`$${bank['savingAccount']}`)
                         .css('background-color', '#E3E3E3');

    $('#savings-amount').val('');
});



//updating the display and manipulating the HTML of the page so a user can see the change.
//click deposit button then get the input deposit amount then run the deposit function
$('#checking-withdraw').on('click', function(){

    // change input value from a string to a number
    const amountInt = parseInt($('#checking-amount').val());

    withdraw('checkingAccount', amountInt)


    // get value from bank object then display on GUI
    $('#checking-balance').html(`$${bank['checkingAccount']}`); 
    $('#savings-balance').html(`$${bank['savingAccount']}`);

    // When the balance of the bank account is $0 the background of that bank account should be red.
    if (bank['checkingAccount'] === 0 && bank['savingAccount'] === 0){
        $('#savings-balance').css('background-color', 'red');
    }

    if (bank['checkingAccount'] === 0){
        $('#checking-balance').css('background-color', 'red');
    } 

    $('#checking-amount').val('');
});

//saving account  
$('#savings-withdraw').on('click', function(){

    const amountInt = parseInt($('#savings-amount').val())
    withdraw('savingAccount', amountInt)

    $('#checking-balance').html(`$${bank['checkingAccount']}`); 
    $('#savings-balance').html(`$${bank['savingAccount']}`);

    if (bank['savingAccount'] === 0){
        $('#savings-balance').css('background-color', 'red');
    }

    if (bank['checkingAccount'] === 0 && bank['savingAccount'] === 0){
        $('#checking-balance').css('background-color', 'red');
    } 

    $('#savings-amount').val('');
});



// /* ------------------------------------ version 3 ---------------------------------------- */
// //why I cannot use ???????????
// // const checkingAccValue = bank['checkingAccount'];
// // const savingAccValue = bank['savingAccount'];

// //updating the display and manipulating the HTML of the page so a user can see the change
// // click deposit button then get the input deposit amount then run the deposit function

// $('#checking-deposit').on('click', function(){

//     // change input value from a string to a number
//     const amountInt = parseInt($('#checking-amount').val());
//     deposit('checkingAccount', amountInt)

//     // 3. get value from bank object then display on GUI
//     $('#checking-balance').html(`$${checkingAccValue}`)
//                           .css('background-color', '#E3E3E3');
    
//     $('#checking-amount').val('');
// });


// //saving account  
// $('#savings-deposit').on('click', function(){
    
//     const amountInt = parseInt($('#savings-amount').val())
//     deposit('savingAccount', amountInt)

//     $('#savings-balance').html(`$${savingAccValue}`)
//                          .css('background-color', '#E3E3E3');

//     $('#savings-amount').val('');
// });



// //updating the display and manipulating the HTML of the page so a user can see the change.
// //click deposit button then get the input deposit amount then run the deposit function
// $('#checking-withdraw').on('click', function(){

//     // change input value from a string to a number
//     const amountInt = parseInt($('#checking-amount').val());

//     withdraw('checkingAccount', amountInt)


//     // get value from bank object then display on GUI
//     $('#checking-balance').html(`$${checkingAccValue}`); 
//     $('#savings-balance').html(`$${savingAccValue}`);

//     // When the balance of the bank account is $0 the background of that bank account should be red.
//     if (checkingAccValue === 0 && savingAccValue === 0){
//         $('#savings-balance').css('background-color', 'red');
//     }

//     if (checkingAccValue === 0){
//         $('#checking-balance').css('background-color', 'red');
//     } 

//     $('#checking-amount').val('');
// });

// //saving account  
// $('#savings-withdraw').on('click', function(){

//     const amountInt = parseInt($('#savings-amount').val())
//     withdraw('savingAccount', amountInt)

//     $('#checking-balance').html(`$${checkingAccValue}`); 
//     $('#savings-balance').html(`$${savingAccValue}`);

//     if (savingAccValue === 0){
//         $('#savings-balance').css('background-color', 'red');
//     }

//     if (checkingAccValue === 0 && savingAccValue === 0){
//         $('#checking-balance').css('background-color', 'red');
//     } 

//     $('#savings-amount').val('');
// });


