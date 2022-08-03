// // // Part 1, Rectangle
const rectOne = {
    length: 4,
    width: 4
  };
  
const rectTwo = { /// create alterntive object to test out funtions below:
      length: 12,
      width: 7,
  }
  
  const isSquare = function (rect) { /// 
      if (rect.length === rect.width) {
          return `Rectangle is a square`
      } else {
          return `Rectangle is not a square`
      }
  }
  
  console.log( isSquare(rectOne) )
  console.log( isSquare(rectTwo) )


// area(rect) - Returns the area of the rectangle

const area = function (rect) {   //A = w*l
    const areaRec = rect.length * rect.width
    return areaRec
}

console.log( area(rectOne) );
console.log( area(rectTwo) );

// perimeter(rect) - Returns the perimeter of the rectangle


const perimeter = function (rect) {
    const perim = ( rect.length * 2 ) + ( rect.width * 2 )
    return perim
}  

console.log( perimeter(rectOne) );
console.log( perimeter(rectTwo) );





// // JavaScript Bank
// // In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// // Bank
// // There is only one bank. This bank is an object, which contains an array of accounts.
// // The bank has many accounts. Accounts should be objects that all share a set of common functionality.




const bank = { //object containing keys that are arrays containing objects  
    accounts: [
        {name: 'casey', balance: 509}, //as an array to get info, object.key[index]
        {name: 'sophie', balance: 154},
        {name: 'paul', balance: 868},
        {name: 'adam', balance: 57},
    ],
    
    addAccount: function ( bankName, bankBalance ) { //method to add push() to any object using this.
        this.accounts.push (bankName, bankBalance);
    },    
                        // bank.addAccount({name: 'eve', balance: 100});
                        // console.log(bank.accounts); Log it out to check this section 

    getTotalBalance: function() {
        let sum = 0;
            for (let i = 0; i < this.accounts.length; i++) {  //loop through each array to find balance and sum up
            sum += this.accounts[i].balance };
        }, 
},

console.log(bank.getTotalBalance()) ////// work this out?????

