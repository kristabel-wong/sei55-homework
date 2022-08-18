
console.log('This is the main js file')

/* ------------------------------------ main.js version 1 ---------------------------------------- */

// put two bank accounts into an object, and set the initial value is 0
const bank = {
    checkingAccount : 0,
    savingAccount : 0,
};

// //for atm.js version 3 not work now
// const checkingAccValue = bank['checkingAccount'];
// const savingAccValue = bank['savingAccount'];


/*------------------ deposit ---------------------- */
// Add functionality so that a user can deposit money into one of the bank accounts
const deposit = function(accName, amount){
    bank[accName] += amount;
}; //deposit()


/*------------------ withdraw ---------------------- */
// Add functionality so that a user can withdraw money from one of the bank accounts.
const withdraw = function(accName, amount){

    // let currentAccountAmount = bank[accName];//lose the connection of object, just copy the number, will not give it back to the original variable in object.
    //if give the variable an object or an array, can change

    //Decide which account we withdraw money from, if money is not enough we will ask if the other account have enough money, if both not, return false
    if(accName === 'checkingAccount'){//Dee's homework look at//otheraccount to simplify
        if(bank[accName] < amount){
            // if the other account have enough extra money
            if(bank['savingAccount'] >= amount - bank[accName]){
                bank['savingAccount'] -= amount - bank[accName];
                bank[accName] = 0;
            } else{// if both not, ignore that transaction
                return false;
            }
        } else{ // if the current account have enough money
            bank[accName] -= amount;    
            
            // console.log(bank[accName]);// for check
            // return bank[accName];
        }
    } 
    else if(accName === 'savingAccount'){
        if(bank[accName] < amount){
            // if the other account have enough extra money
            if(bank['checkingAccount'] >= amount - bank[accName]){
                bank['checkingAccount'] -= amount - bank[accName];
                bank[accName] = 0;
            } else{// if both not
                return false;
            }
        } else{
            bank[accName] -= amount;
        }
    }

}; //withdraw()



// /* ------------------------------------ main.js version 2 ---------------------------------------- */

// // put two bank accounts into an object, and set the initial value is 0
// const bank = {
//     checkingAccount : 0,
//     savingAccount : 0,
// };

// let currentAccountAmount;

// /*------------------ deposit ---------------------- */
// // Add functionality so that a user can deposit money into one of the bank accounts
// const deposit = function(accName, amount){
//     bank[accName] += amount;
// }; //deposit()


// /*------------------ withdraw ---------------------- */
// // Add functionality so that a user can withdraw money from one of the bank accounts.
// const withdraw = function(accName, amount){
    
//     let currentAccountAmount = bank[accName];

//     //Decide which account we withdraw money from, if money is not enough we will ask if the other account have enough money, if both not, return false
//     if(accName === 'checkingAccount'){
//         if(currentAccountAmount < amount){
//             // if the other account have enough extra money
//             if(bank['savingAccount'] >= amount - currentAccountAmount){
//                 bank['savingAccount'] -= amount - currentAccountAmount;
//                 currentAccountAmount = 0;
//             } else{// if both not, ignore that transaction
//                 return false;
//             }
//         } else{ // if the current account have enough money
//             currentAccountAmount -= amount;    
//         }
//     } 
//     else if(accName === 'savingAccount'){
//         if(currentAccountAmount < amount){
//             // if the other account have enough extra money
//             if(bank['checkingAccount'] >= amount - currentAccountAmount){
//                 bank['checkingAccount'] -= amount - currentAccountAmount;
//                 currentAccountAmount = 0;
//             } else{// if both not
//                 return false;
//             }
//         } else{
//             currentAccountAmount -= amount;
//         }
//     }

// }; //withdraw()






