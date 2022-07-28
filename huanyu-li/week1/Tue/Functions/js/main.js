// The Calculator -- Part 1
console.log('------------Part 1--------------');
const squareNumber = function (numb) {
    const result = numb * numb;
    console.log(`The result of squaring the number ${numb} is ${result}.`);
    return result
}
squareNumber(3);


const halfNumber = function (numb) {
    const result = numb / 2;
    console.log(`Half of ${numb} is ${result}.`);
    return result
}
halfNumber(5);

const percentOf = function (numb1, numb2) {
    const result = (numb1 / numb2 * 100).toFixed(2)
    console.log(`${numb1} is ${result}% of ${numb2}`);
    return result;
}
percentOf(2, 4);

const areaOfCircle = function (radius) {
    const result = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}.`);
    return result.toFixed(2);
}
areaOfCircle(2);

// The Calculator -- Part 2
console.log('------------Part 2--------------');
const calculator2 = function (arg) {
    let temp = halfNumber(arg);
    const tempSquareNumber = squareNumber(temp);
    temp = areaOfCircle(tempSquareNumber);
    temp = percentOf(temp, tempSquareNumber);
    console.log(`The initial number is ${arg.toFixed(2)}, and the final result is ${temp}%`);
    return temp;
}

calculator2(10);

//DrEvil
console.log('------------DrEvil--------------');
const DrEvil = function (amount) {
    const result = amount === 1000000 ? `${amount} dollars (pinky)` : `${amount} dollars`
    return console.log(result);
}
DrEvil(10);
DrEvil(1000000);

//MixUp
console.log('------------MixUp--------------');
const mixUp = function (str1, str2) {
    const part1 = str2.slice(0, 2);
    const part2 = str1.slice(0, 2);
    const result = `${part1}${str1.slice(2, str1.length)} ${part2}${str2.slice(2, str2.length)}`;
    console.log(result);
    return result;
}

mixUp('mix', 'pod')
mixUp('dog', 'dinner')

//FixStart
console.log('------------FixStart--------------');
const fixStart = function (str) {
    const temp = str.slice(1);
    let result = '';
    if (temp.includes(str[0])) {
        result = str[0] + temp.replaceAll(str[0], '*')
    }
    console.log(result);
}
fixStart('babble');

//Verbing
console.log('------------Verbing--------------');
const verbing = function (str) {
    if (str.length >= 3) {
        if (str.endsWith('ing')) {
            console.log(str + 'ly');
            return str + 'ly'
        } else {
            console.log(str + 'ing');
            return str + 'ing'
        }
    } else {
        console.log(str);
        return str
    }
}

verbing('walk');
verbing('swimming');
verbing('go');

//Not Bad
console.log('------------Not Bad--------------');
const notBad = function (str) {
    let result = '';
    const notPosition = str.indexOf('not');
    const badPosition = str.indexOf('bad');
    if (notPosition > 0 && badPosition > 0) {
        if (notPosition < badPosition) {
            result = str.slice(0, notPosition) + 'good!'
        }
    }
    else {
        result = str
    }
    console.log(result);
    return result;
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');

