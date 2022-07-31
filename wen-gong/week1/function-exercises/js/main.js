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

console.log(`-------------`)

// const tellFortune = function(numberOfChildren, partnersName, geoLocation, jobTitle){
//     const outputString = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnersName } with ${ numberOfChildren } kids.`;
//     return outputString;
// };

// const firstFortune = ​tellFortune(5, 'Iris', 'Sydney', 'SoftwareEngineer');

// console.log(firstFortune);

const squareNumber  = function(number){
    squareResult = number * number;
    const outputString = `The result of squaring the number ${number} is ${squareResult}.`;
    return outputString;
}
const square = squareNumber(3);
console.log(square);

console.log(`-------------`)





const halfNumber = function(number){
 divideNumber = number / 2;
 outputString = `Half of ${number} is ${divideNumber}.`;
 return outputString;

} 
const result = halfNumber(5);
console.log(result);

console.log(`-------------`)






const percentOf = function(numberOf1, numberOf2){
   percent = numberOf1 / numberOf2 *100;
   outputString = `${numberOf1} is ${percent}% of ${numberOf2}.`;
   return outputString;

}
const number = percentOf(2, 4);
console.log(number);

console.log(`-------------`)





const areaOfCircle = function(radius){
 area = radius * radius * 3.1415926;
 outputString = `The area for a circle with radius ${radius} is ${area}.`;
 return outputString;

}
const arearesult = areaOfCircle(2);
console.log(arearesult);

console.log(`-------------`)



 const part2 = function(number){
    const half = halfNumber(number);
    const square = squareNumber(half);
    areaOfCircle(square);
    percentOf(areaOfCircle(square),square);
 }
 part2(45);



const DrEvil = function(dollar){
    let outputString;
    if (dollar == 1000000){
    outputString = `${dollar} dollars (pinky)`;
    }else if(dollar>1){
    outputString = `${dollar} dollars`;
    }else{
        outputString = `${dollar} dollar;`
    }
    return outputString;


}
console.log(DrEvil(1000000));

console.log(`-------------`)




const mixUp = function(string1, string2){
    outputString = `'${string1} ${string2}'`;
    return outputString;

}
console.log(mixUp('mix', 'pod'));

console.log(`-------------`)






const fixStart = function(aString){
    
}



// const verbing = function(string3){
//    let length = string3.length;
//     if (length >= 3) {
//         outputString = `${string3}ing`;

//     }else (length < 3) {
//         outputString = `${string3}`;
//     } 
//     return outputString;
// }
// console.log(verbing('swimming'));





const notBad = function(string4){

}





const greaterNum = function(number1, number2){
 
    if (number1 > number2){
         greatNumber = number1;
        outputString = `The greater number of ${number1} and ${number2} is ${greatNumber}.`
    
    }else {
         greatNumber = number2;
    
     
    outputString = `The greater number of ${number1} and ${number2} is ${greatNumber}.`
    }
    return outputString;
}
console.log(greaterNum(5,10));


console.log(`-------------`)



const helloWorld = function(language){
    if (language == 'ge'){
        outputString = 'Hallo Hubscher!';
    }else if (language == 'fr'){
        outputString =  'Voulez-vouz coucher avec moi ce soir?';

    }else {
        outputString =  'Hello World!';

    }
 return outputString;
};
console.log(helloWorld('ge'));








const assignGrade = function(score){
   if (score > 90){
    grade = "A";
   } else if (score >80, score< 90){
    grade = "B";
   }else if (score >70,score < 80){
    grade = "C";
   }else if (score>60, score< 70){
    grade = "D";

   }else{
    grade = "E";
   }
   outputString = `Your grade for ${score} is ${grade}`
   return outputString;
}
console.log(assignGrade(88));

console.log(`-------------`)




const pluralize = function(noun,number){
 if (number ===1 || noun === 'sheep' || noun === 'geese' || noun === 'deer' || noun === 'fish'){
    return number + ' ' + noun ;
 }else {
    return number + ' ' + noun + 's';
 }
}
console.log('I have ' + pluralize('dog', 1));
console.log('I have ' + pluralize('geese', 4));