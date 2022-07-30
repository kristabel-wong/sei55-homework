// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55

const cartForParty = {  
      banana: "1.25",
      handkerchief: ".99",
      Tshirt: "25.01",
      apple: "0.60",
      nalgene: "10.34",
      proteinShake: "22.36"
    };
    
const cashRegister = (obj) => {
    let total = 0;
    for (const key in obj) {
        total += Number(obj[key]);
    } return total;
}; //end cashregister

//Testing
console.log(cashRegister(cartForParty)); //expect 60.55