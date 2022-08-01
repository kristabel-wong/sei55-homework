console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy; font-size: 14px;');

console.log(`Cash Register`);

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
const cashRegister = function (cart){
    let total = 0;
    for (key in cart){
        total += parseFloat(cart[key]);
    } return total;
}; // cashRegister()


// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
console.log(cashRegister(cartForParty)); // 60.55