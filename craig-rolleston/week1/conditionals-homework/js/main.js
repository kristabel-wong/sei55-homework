
// // Which number's bigger?

// // Write a function named greaterNum that:

// //     takes 2 arguments, both numbers.
// //     returns whichever number is the greater (higher) number.
// //     Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

console.log(greaterNum(5, 10));
console.log(greaterNum(15, 7));



// //   The World Translator

// // Write a function named helloWorld that:

// //     takes 1 argument, a language code (e.g. "es", "de", "en")
// //     returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// //     Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(language) {
    if (language === 'ge') {
        return 'Hallo Hubscher!';
    } else if (language === 'fr') {
        return 'Voulez-vouz coucher avec moi ce soir?';
    } else {
        return 'Hello, World';
    }
};  

console.log(helloWorld('ge'));
console.log(helloWorld('fr'));
console.log(helloWorld('en'));



// // The Grade Assigner

// // Write a function named assignGrade that:

// //     takes 1 argument, a number score.
// //     returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// //     Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(numScore) {
    if (numScore > 90) {
        return 'A';
    } else if (numScore > 80) {
        return 'B';
    } else if (numScore > 70) {
        return 'C';
    } else if (numScore > 60) {
        return 'D';
    } else {
        return 'F';
    }
};

console.log(`Your grade for 55 is ${assignGrade(55)}`);
console.log(`Your grade for 95 is ${assignGrade(95)}`);
console.log(`Your grade for 75 is ${assignGrade(75)}`);



// // The Pluralizer

// // Write a function named pluralize that:

// //     takes 2 arguments, a noun and a number.
// //     returns the number and pluralized form, like "5 cats" or "1 dog".
// //     Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// //     Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(noun, number) {
    if (number === 1 || noun === 'sheep' || noun === 'geese' || noun === 'deer' || noun ==='fish') {
        return number + ' ' + noun;
    } else {
        return number + ' ' + noun + 's';
    }
}

console.log('I have ' + pluralize('dog', 1));
console.log('I have ' + pluralize('geese', 4));
console.log('I have ' + pluralize('deer', 10));
console.log('I have ' + pluralize('fish', 0));
console.log('I have ' + pluralize('whale', 10));


// The Calculator
// Part 1

//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//     Bonus: Round the result so there are only two digits after the decimal.


const squareNumber = function(number) {
    const squaredNum = number * number;
    console.log('The result of squaring the number ' + number + ' is ' + squaredNum);
    return squaredNum;
}; //function closed

squareNumber(3);
squareNumber(20);
squareNumber(500);


const halfNumber = function(number) {
    const half = number / 2;
    console.log('Half of ' + number + ' is ' + half);
    return half;
}; //function closed
halfNumber(5);
halfNumber(30);
halfNumber(15);

const percentOf = function(num1, num2) {
    const percent = (num1/num2) * 100; 
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}; //function closed
percentOf(5, 10);
percentOf(10, 50);
percentOf(2, 4);

const areaOfCircle = function(radius) {
    const area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
} //function closed
areaOfCircle(2);


function doCoolStuff(num) {
    const half    = halfNumber(num);
    const squared = squareNumber(half);
    const area    = areaOfCircle(squared);
    const result  = percentOf(squared, area);
} //function closed
doCoolStuff(5);