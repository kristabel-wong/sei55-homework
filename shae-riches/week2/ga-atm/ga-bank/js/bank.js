console.log('bank connected'); //                   check = true

let $balanceOfCheckingAcct = 0 ;
// console.log($balanceOfCheckingAcct); //          check = true
let $balanceOfSavingsAcct = 0 ;
// console.log($balanceOfSavingsAcct); //           check = true
let $savingsAmountValue  = 0;
// console.log($savingsAmountValue); //             check = true
let $checkingAmountValue = 0;
// console.log($checkingAmountValue); //            check = true


const $depositIntoCheckingAcct = function () { 

    $balanceOfCheckingAcct = $balanceOfCheckingAcct + $checkingAmountValue;
    
    console.log($balanceOfCheckingAcct);

}; //       closes checkingDeposit
// console.log($balanceOfCheckingAcct); //          check = true
const $withdrawlFromCheckingAcct = function () {

    $balanceOfCheckingAcct = $balanceOfCheckingAcct - $checkingAmountValue;
    //     console.log($balanceOfCheckingAcct);
//     console.log($balanceOfSavingsAcct)

//     if ( $checkingAmountValue < $balanceOfCheckingAcct ) {
//         return $balanceOfCheckingAcct = $balanceOfCheckingAcct - $checkingAmountValue;

//     } else if ( $checkingAmountValue < $balanceOfCheckingAcct + $balanceOfSavingsAcct) {
//         $balanceOfCheckingAcct = $balanceOfCheckingAcct - $checkingAmountValue;
//         $balanceOfSavingsAcct = $balanceOfSavingsAcct - $checkingAmountValue;

//         console.log($balanceOfCheckingAcct);
//         console.log($balanceOfSavingsAcct);
        

    };
const $depositIntoSavingsAcct = function () {
    
    $balanceOfSavingsAcct = $balanceOfSavingsAcct + $savingsAmountValue;   

    console.log($balanceOfSavingsAcct);
    

}; //       closes savingsDeposit
// console.log($balanceOfSavingsAcct); //           check = true
const $withdrawlFromSavingsAcct = function () {
    $balanceOfSavingsAcct = $balanceOfSavingsAcct - $savingsAmountValue;
}; //       closes savingsWithdrawl
// console.log($balanceOfSavingsAcct); //           check = true




