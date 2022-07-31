
{
    console.log("Hello world!");
    };
// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
{
    // use string concatenation
    const numberOfChildren = 2;
    const partnersName = "Sandra";
    const geoLocation = "NYC";
    const jobTitle = "Investment Banker";
    
    //const fortuneOutput = "You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnersName + " with " + numberOfChildren + " kids."
    
    const fortuneOutput = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;

    console.log(fortuneOutput);
    }

// The Age Calculator

// Forgot how old someone is? Calculate it!

//     Store the current year in a variable.
//     Store their birth year in a variable.
//     Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: "They are either NN or NN", substituting the values.

{
    const currentYear = 2022;
    const yearOfBirth = 1983;

    const ageAfterBirthday = currentYear - yearOfBirth;
    const ageBeforeBirthday = ageAfterBirthday - 1;

    const ageOutput = `They are either ${ageAfterBirthday} or ${ageBeforeBirthday}`; 
    
    console.log(ageOutput);
    };

// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

//     Store your current age into a variable.
//     Store a maximum age into a variable.
//     Store an estimated amount per day (as a number).
//     Calculate how many you would eat total for the rest of your life.
//     Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

{
    const currentAge = 38;
    const maxAge = 150;
    const amountPerDay = 3;
    
    const remainingYears = maxAge - currentAge;
    const daysPerYear = 365.25;
    const remainingDays = remainingYears * daysPerYear;
    const totalSnacksRequired = remainingDays * amountPerDay;
    
    console.log(`You will need ${totalSnacksRequired} to last you until the ripe old age of ${maxAge}.`);
    }

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




