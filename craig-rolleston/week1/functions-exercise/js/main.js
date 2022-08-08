
{
    console.log("Hello world!");
    };
// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
// Call that function 3 times with 3 different values for the arguments. 

const tellFortune = function(jobTitle, geoLocation, partnerName, numberOfChildren){
    const outputString = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberOfChildren} kids.`;
    return outputString;
    
    //return `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberOfChildren} kids.`;


}; // closing tellFortune

const firstFortune = tellFortune('bball player', 'USA', 'Kim Kardashian', 3); 
const secondFortune = tellFortune('stunt double', 'Japan', 'Amber Heard', 500);
const thirdFortune = tellFortune('Elvis impersonator', 'Russia', 'Mila Kunis', 0);
console.log(firstFortune, secondFortune, thirdFortune);

// The Puppy Age Calculator

// You know how old your dog is in human years, but what about dog years? Calculate it!

//     Write a function named calculateDogAge that:
//         takes 1 argument: your puppy's age.
//         calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//         outputs the result to the screen like so: "Your doggie is NN years old in dog years!" 
//     Call the function three times with different sets of values.
//     Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. 


const calculateAge = function(age) {
    const humanYearsPerDogYear = 7;
    const humanAge = age * humanYearsPerDogYear;

    return `Your doggie is ${humanAge} in human years.`;

};

console.log(calculateAge(1));
console.log(calculateAge(3));
console.log(calculateAge(10));


// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

//     Write a function named calculateSupply that:
//         takes 2 arguments: age, amount per day.
//         calculates the amount consumed for rest of the life (based on a constant max age).
//         outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
//     Call that function three times, passing in different values each time.
//     Bonus: Accept floating point values for amount per day, and round the result to a round number. 

function calculateSupply(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = (numPerDay * 365) * (maxAge - age);
    const message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);

// The Temperature Converter

// It's hot out! Let's make a converter.

//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

{
const celsiusTemp = 47;

const farenheightEquivalentTemp = celsiusTemp * 1.8 + 32; //standard calculation

console.log(`${celsiusTemp}°C is ${farenheightEquivalentTemp.toFixed(1)}°F`);

const farenheightTemp = 116.6;

const celsiusEquivalentTemp = (farenheightTemp - 32) / 1.8;

console.log(`${farenheightTemp}°F is ${celsiusEquivalentTemp.toFixed(1)}°C`);
}




