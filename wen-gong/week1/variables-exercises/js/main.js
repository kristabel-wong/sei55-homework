// console.log("Hello World");
// console.log("Hello World")

const Name = "X";
const yourLocation = "Hobart";
const partnersName = "Iris";
const numberOfChildren = 8;
const jobTitle = "Soft Engineer";
// const fortuneOutput = "You will be a "+ jobTitle + " in " + yourLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";

const fortuneOutput = ` You will be a ${jobTitle} in ${yourLocation} and married to ${partnersName} with ${numberOfChildren} kids.`;

console.log(fortuneOutput)


console.log('----------------------------------')

const currentYear = 2022;
const birthYear = 1990;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

// console.log(`They are either ${ageAfterBirthday} or ${ageBeforeBirthday}.`)

const ageOutput = `They are either ${ageAfterBirthday} or ${ageBeforeBirthday}.`

console.log(ageOutput)

console.log(`--------------`)



const currentAge = 100;
const maxmumAge = 200;
const amountPerDay = 5;

const remainingYears = maxmumAge - currentAge;
const dayPerYear = 365.25;
const remainingDays = remainingYears * dayPerYear;
const totalSnacksRequired = remainingDays * amountPerDay;

console.log(`You will need ${totalSnacksRequired} to last you until the ripe old age of ${maxmumAge}.`)

console.log(`---------------`)




const celsiusTemp = 47;
const farenheitEquivalentTemp = celsiusTemp * 1.8 + 32;
console.log(`${celsiusTemp}°C is ${farenheitEquivalentTemp.toFixed(1)}°F.`) 

const farenheitTemp = 116.6;
const celsiusEquivalLentTemp = (farenheitTemp - 32) / 1.8;
console.log(`${farenheitTemp}°F is ${celsiusEquivalLentTemp.toFixed(1)}°C.`)

