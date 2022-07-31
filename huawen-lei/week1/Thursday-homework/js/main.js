
console.log("w1 d4 homework");

// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

const rectangle = {
    length: 4,
    width: 4
};

// isSquare(rect) - Returns whether the rectangle is a square or not

let resultIsSquare;
function isSquare(rect){
    if (rect.length === rect.width){
        resultIsSquare = console.log('The rectangle is a sqaure');
    } else{
        resultIsSquare = console.log('The rectangle is not a sqaure');
    }
    return resultIsSquare
}; //isSquare()


// area(rect) - Returns the area of the rectangle

function area(rect){
    const resultArea = rect.length * rect.width;
    return resultArea
}; //area()


// perimeter(rect) - Returns the perimeter of the rectangle

function perimeter(rect){
    const resultPerimeter = (rect.length + rect.width) * 2
    return resultPerimeter
}; //perimeter()



// Part 2, Triangle

// Given a triangle object like the one below, write the following functions:

const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

//     isEquilateral(tri) - Returns whether the triangle is equilateral or not

let resultIsEquilateral;
function isEquilateral(tri){
    if (tri.sideA === tri.sideB && tri.sideA === tri.sideC && tri.sideC === tri.sideB){
        resultIsEquilateral = console.log('The triangle is equilateral');
    } else{
        resultIsEquilateral = console.log('The triangle is not equilateral');
    }
    return resultIsEquilateral
}; //isEquilateral()


//     isIsosceles(tri) - Returns whether the triangle is isosceles or not

let resultIsIsosceles;
function isIsosceles(tri){
    if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideC === tri.sideB){
        resultIsIsosceles =  console.log('The triangle is isosceles');
    } else{
        resultIsIsosceles =  console.log('The triangle is not isosceles');
    }
    return resultIsIsosceles
}; //isIsosceles()


//     area(tri) - Returns the area of the Triangle

function area(tri){
    const p = (tri.sideA + tri.sideB + tri.sideC) / 2;
    const sArea = Math.sqrt(p * (p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC));
    return sArea
}; //area()

//     isObtuse(tri) - Returns whether the triangle is obtuse or not

let longSide
let longSideCal
let twoShortCal
let resultIsObtuse
function isObtuse(tri){
    if (tri.sideA >= tri.sideB && tri.sideA >= tri.sideC){
        longSide = tri.sideA;
    } else if (tri.sideB >= tri.sideA && tri.sideB >= tri.sideC){
        longSide = tri.sideB;
    } else {
        longSide = tri.sideC;
    }

    if (longSide === tri.sideA){
        longSideCal = Math.pow(tri.sideA);
        twoShortCal = Math.pow(tri.sideB) + Math.pow(tri.sideC);
    } else if(longSide === tri.sideB){
        longSideCal = Math.pow(tri.sideB);
        twoShortCal = Math.pow(tri.sideA) + Math.pow(tri.sideC);
    } else {
        longSideCal = Math.pow(tri.sideC);
        twoShortCal = Math.pow(tri.sideB) + Math.pow(tri.sideA);
    }

    if (longSideCal > twoShortCal){
        resultIsObtuse = console.log('The triangle is obtuse');
    } else {
        resultIsObtuse = console.log('The triangle is not obtuse');
    }
    return resultIsObtuse
}; //isObtuse()



// The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

// Input
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36",
  };

let sumCart = 0;
function cashRegister(cart){
    for (const key in cart){
        sumCart = sumCart + Number(cart[key]);
    }
    return sumCart
}


// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

/* ----------------------- Without Bonus version ---------------------- */

// const bank = {

//     accounts: [
//         {name: 'Anna', balance: 200},
//         {name: 'Ben', balance: 400},
//         {name: 'Matt', balance: 50}
//     ],


//     addAccount: function(accName, startingBalance){
//        const newObj = {name: accName, balance: startingBalance};
//        this.accounts.push(newObj);
//        console.log('The updated account is:\n', this.accounts);
//     // console.log(`The new account is ${bank.accounts}`);//why cannot use ${}?????
//     }, //addAccount


//     totalBalance: function(){
//         let sumBalance = 0;
//         for (let i = 0; i < this.accounts.length; i++){
//             sumBalance = sumBalance + this.accounts[i].balance;
//         }
//         return sumBalance
//     }, //totalBalance()


//     deposit: function(depositName, depositeValue){
//         let correctAccountName = false;
//         for (let i = 0; i < this.accounts.length; i++){
//             if (this.accounts[i].name === depositName){
//                 this.accounts[i].balance = this.accounts[i].balance + depositeValue;
//                 correctAccountName = true;
//             }
//         } //for

//   // ONLY after the loop has finished checking ALL the account name
//   // and NONE of them matched the account name, we can say it is a wrong account name
//         if (correctAccountName === false){
//             return console.log('Do no have this account name');
//         }

//         console.log('The updated account is:\n', this.accounts);
//     }, //deposit()


//     withdral: function(withdralName, withdralValue){
//         let correctAccountName = false;
//         for (let i = 0; i < this.accounts.length; i++){
//             if (this.accounts[i].name === withdralName){
//                 this.accounts[i].balance = this.accounts[i].balance - withdralValue;
//                 correctAccountName = true;
//             }
//         } //for

//   // ONLY after the loop has finished checking ALL the account name
//   // and NONE of them matched the account name, we can say it is a wrong account name
//         if (correctAccountName === false){
//             return console.log('Do no have this account name');
//         }

//         console.log('The updated account is:\n', this.accounts);
//     }, //withdral()
// }; //bank




/* ----------------------- Bonus version ---------------------- */

// const bank = {

//     accounts: [
//         {name: 'Anna', balance: 200},
//         {name: 'Ben', balance: 400},
//         {name: 'Matt', balance: 50}
//     ],


//     addAccount: function(accName, startingBalance){
//         if (startingBalance >= 0){
//             const newObj = {name: accName, balance: startingBalance};
//             this.accounts.push(newObj);
//             console.log('The updated account is:\n', this.accounts);
//         } else {
//             console.log('Account value cannot be negative.');
//         }
//     }, //addAccount


//     totalBalance: function(){
//         let sumBalance = 0;
//         for (let i = 0; i < this.accounts.length; i++){
//             sumBalance = sumBalance + this.accounts[i].balance;
//         }
//         return sumBalance
//     }, //totalBalance()


//     deposit: function(depositName, depositeValue){
//         let correctAccount = false;

//         if (depositeValue >= 0){
//             for (let i = 0; i < this.accounts.length; i++){
//                 if (this.accounts[i].name === depositName){
//                     this.accounts[i].balance = this.accounts[i].balance + depositeValue;
//                     correctAccount = true;
//                 }
//             } //for
    
//             // ONLY after the loop has finished checking ALL the account name
//             // and NONE of them matched the account name, we can say it is a wrong account name
//             if (correctAccount === false){
//                 return console.log('Do no have this account name');
//             }
    
//             console.log('The updated account is:\n', this.accounts);
//         } else{
//             console.log('Deposit value cannot be negative.');
//         }

//     }, //deposit()


//     withdral: function(withdralName, withdralValue){
//         let correctAccount = false;

//         if (withdralValue >= 0){
//             for (let i = 0; i < this.accounts.length; i++){
//                 if (this.accounts[i].name === withdralName){
//                     this.accounts[i].balance = this.accounts[i].balance - withdralValue;
//                     correctAccount = true;

//                     if (this.accounts[i].balance <= 0){
//                         //want to keep the accounts value to be positve
//                         this.accounts[i].balance = this.accounts[i].balance + withdralValue;//why this.accounts[i].balance change to a string after it become a negative value????????????????????
//                         return console.log("You don't have this amount of money. Account value cannot be negative")
//                     }
//                 }
//             } //for
    
//             if (correctAccount === false){
//                 return console.log('Do no have this account name');
//             }
    
//             console.log('The updated account is:\n', this.accounts);
//         } else{
//             console.log('Withdraw value cannot be negative.');
//         }

//     }, //withdral()

//     transfer: function(transFrom, transTo, transValue){

//         //find the account who is the sender
//         let correctSendAccount = false;

//         if (transValue >= 0){
//             for (let i = 0; i < this.accounts.length; i++){
//                 if (this.accounts[i].name === transFrom){
//                     this.accounts[i].balance = this.accounts[i].balance - transValue;
//                     correctSendAccount = true;

//                     if (this.accounts[i].balance <= 0){
//                         //want to keep the accounts value to be positve
//                         this.accounts[i].balance = this.accounts[i].balance + transValue;
//                         return console.log("You can't transfer this amount of money. Account value cannot be negative")
//                     }
//                 }
//             } //for
    
//             if (correctSendAccount === false){
//                 return console.log('Do no have this account name');
//             }
    
//         } else{
//             console.log('Withdraw value cannot be negative.');
//         }

//         //find the account who is the receiver
//         let correctReceiveAccount = false;

//         if (transValue >= 0){
//             for (let i = 0; i < this.accounts.length; i++){
//                 if (this.accounts[i].name === transTo){
//                     this.accounts[i].balance = this.accounts[i].balance + transValue;
//                     correctReceiveAccount = true;
//                 }
//             } //for
    
//             // ONLY after the loop has finished checking ALL the account name
//             // and NONE of them matched the account name, we can say it is a wrong account name
//             if (correctReceiveAccount === false){
//                 return console.log('Do no have this account name');
//             }
    
//             console.log('The updated account is:\n', this.accounts);
//         } else{
//             console.log('Deposit value cannot be negative.');
//         }
//     }

// }; //bank



// /* ----------------------- After Tutorial ---------------------- */

// const bank = {

//     accounts: [
//         {name: 'Anna', balance: 200},
//         {name: 'Ben', balance: 400},
//         {name: 'Matt', balance: 50},
//         {name: 'aaa', balance: 100},
//     ],

// // try to simplify the negative decide part
//     addAccount: function(accName, accAmount){
//         if (accAmount >= 0){
//             const newObj = {name: accName, balance: accAmount};
//             this.accounts.push(newObj);
//             console.log('The updated account is:\n', this.accounts);
//         } else {
//             console.log('Account value cannot be negative.');
//         }
//     }, //addAccount


//     totalBalance: function(){
//         let sumBalance = 0;
//         for (let i = 0; i < this.accounts.length; i++){
//             sumBalance = sumBalance + this.accounts[i].balance;
//         }
//         return sumBalance
//     }, //totalBalance()

//     // find the account name
//     isAccountName: function(accName){
//         // let correctAccount = false;

//         for (let i = 0; i < this.accounts.length; i++){
//             let accountNoI = this.accounts[i];
//             if (accountNoI.name === accName){
//                 // correctAccount = true;
//                 return accountNoI
//             }
//         }
//         console.log('Do not have this account name');
//         return false
//         // // if the input account name is true or not
//         // // ONLY after the loop has finished checking ALL the account name
//         // // and NONE of them matched the account name, we can say it is a wrong account name
//         // if (correctAccount === false){
//         //     return false
//         // }

//     }, //isAccountName()

//     isAmountNegative: function(accAmount){
//         if (accAmount >= 0){
//             return accAmount
//         } else{
//             console.log('Input amount value cannot be negative.');
//             return false
//         }
//     }, //isAmountNegative()


// //     deposit: function(depositName, depositeValue){
// //         let correctAccount = false;

// //         if (depositeValue >= 0){
// //             for (let i = 0; i < this.accounts.length; i++){
// //                 if (this.accounts[i].name === depositName){
// //                     this.accounts[i].balance = this.accounts[i].balance + depositeValue;
// //                     correctAccount = true;
// //                 }
// //             } //for
    
// //             // ONLY after the loop has finished checking ALL the account name
// //             // and NONE of them matched the account name, we can say it is a wrong account name
// //             if (correctAccount === false){
// //                 return console.log('Do not have this account name');
// //             }
    
// //             console.log('The updated account is:\n', this.accounts);
// //         } else{
// //             console.log('Deposit value cannot be negative.');
// //         }

// //     }, //deposit()

//     deposit: function(accName, accAmount){

//         const account = this.isAccountName(accName);

//         if(account === false){
//             return false;
//         }

//         if (this.isAmountNegative(accAmount) === false){
//             return false;
//         }
        
//         account.balance += accAmount;         
//         console.log(`The deposit account is: ${account.name}: ${account.balance}`);
//     }, //deposit()


//     withdral: function(accName, accAmount){

//         if(this.isAccountName(accName) === false){
//             return console.log('Do not have this account name');
//         }

//         if (this.isAmountNegative(accAmount) === false){
//             return console.log('Input amount value cannot be negative.');
//         }

//         this.isAccountName(accName).balance -= accAmount;
        
//         if (this.isAccountName(accName).balance < 0){
//             //want to keep the accounts value to be positve
//             this.isAccountName(accName).balance += accAmount;
//             console.log("You don't have this amount of money. Account value cannot be negative")
//         }

//         console.log(`The withdraw account is: ${this.isAccountName(accName).name}: ${this.isAccountName(accName).balance}`);

//     }, //withdral()

//     transfer: function(sender, receiver, transAmount){

//         if(this.isAccountName(sender) === false || this.isAccountName(receiver) === false){
//             return console.log('Do not have this account name');
//         }

//         if (this.isAmountNegative(transAmount) === false){
//             return console.log('Input amount value cannot be negative.');
//         }
        
//         //find the account who is the sender
//         if(this.isAccountName(sender).balance < transAmount){
//             return console.log("You don't have this amount of money. Account value cannot be negative")
//         }
//         this.withdral(sender, transAmount);

//         //find the account who is the receiver
//         this.deposit(receiver, transAmount);
//     }

// }; //bank


/* ----------------------- After the second tutorial ---------------------- */

const bank = {

    accounts: [
        {name: 'Anna', balance: 200},
        {name: 'Ben', balance: 400},
        {name: 'Matt', balance: 50},
        {name: 'aaa', balance: 100},
    ],

// try to simplify the negative decide part
    addAccount: function(accName, accAmount){
        if (accAmount >= 0){
            const newObj = {name: accName, balance: accAmount};
            this.accounts.push(newObj);
            console.log('The updated account is:\n', this.accounts);
        } else {
            console.log('Account value cannot be negative.');
        }
    }, //addAccount


    totalBalance: function(){
        let sumBalance = 0;
        for (let i = 0; i < this.accounts.length; i++){
            sumBalance = sumBalance + this.accounts[i].balance;
        }
        return sumBalance;
    }, //totalBalance()

    // find the account name
    isAccountName: function(accName){

        for (let i = 0; i < this.accounts.length; i++){
            let accountNoI = this.accounts[i];
            if (accountNoI.name === accName){
                return accountNoI;
            }
        }

        // if the input account Name is wrong, we will not return accountNoI, we will print do not have this account name and return false to the deposit or withdraw function
        console.log('Do not have this account name');
        return false;

    }, //isAccountName()

    isAmountNegative: function(accAmount){
        if (accAmount >= 0){
            return accAmount;
        } else{
            // if the input account Value is wrong, we will not return accAmount, we will print do not have this account name and return false to the deposit or withdraw function
            console.log('Input amount value cannot be negative.');
            return false;
        }
    }, //isAmountNegative()


    deposit: function(accName, accAmount){

        const account = this.isAccountName(accName); //make the sctipt cleaner because there are many quotes of 'this.isAccountName(accName)' following

        if(account === false){
            return false;
        }

        if (this.isAmountNegative(accAmount) === false){
            return false;
        }
        
        account.balance += accAmount;         
        console.log(`The deposit account is: ${account.name}: ${account.balance}`);
    }, //deposit()


    withdraw: function(accName, accAmount){

        const account = this.isAccountName(accName);

        if(account === false){
            return false;
        }

        if (this.isAmountNegative(accAmount) === false){
            return false;
        }

        account.balance -= accAmount;
        
        if (account.balance < 0){
            //want to keep the accounts value to be positve
            account.balance += accAmount;
            console.log("You don't have this amount of money. Account value cannot be negative")
        }

        console.log(`The withdraw account is: ${account.name}: ${account.balance}`);

    }, //withdral()

    transfer: function(sender, receiver, transAmount){

        if(this.isAccountName(sender) === false || this.isAccountName(receiver) === false){
            return false;
        }

        if (this.isAmountNegative(transAmount) === false){
            return false;
        }
        
        //find the account who is the sender
        if(this.isAccountName(sender).balance < transAmount){
            return console.log("You don't have this amount of money. Account value cannot be negative");
        }
        this.withdraw(sender, transAmount);

        //find the account who is the receiver
        this.deposit(receiver, transAmount);
    }

}; //bank







