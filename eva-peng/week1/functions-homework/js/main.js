
 // Homework 1


// Part 1 


// a).
const squareNumber = function (num) {
    console.log(`The result of squaring the number ${num} is ${num * num}`);
    return num * num;
  }
  
  console.log(squareNumber(3));
  
  
  
  // b).
  const halfNumber = function (num) {
    console.log(`Half of ${num} is ${num / 2}`);
    return num / 2;
  }
  
  console.log(halfNumber(3));
  
 
  
  // c).
  const percentOf = function (num1, num2) {
    console.log(`${num1} is ${100 * (num1 / num2)}% of ${num2}`);
    return 100 * (num1 / num2);
  }
  
  console.log(percentOf(3, 6));
  
  
  
  // d).
  const areaOfCircle = function (num) {
    // return `The area for a circle with radius ${num} is ${Math.PI * num * num}`;
    // bonus
    console.log(
      `The area for a circle with radius ${num} is ${(
        Math.PI * num * num ).toFixed(2)}`
    );
    return (Math.PI * num * num).toFixed(2);
  }
  
  console.log(areaOfCircle(2));
  
  
  
  // Part 2 
  
  const cal = function (num) {
    let half = halfNumber(num);
    let square = squareNumber(half);
    let area = areaOfCircle(square);
    let percents = percentOf(area, squareNumber(area));
    return percents;
  }
  
  cal(3);
  
  
  
  
  // Homework 2
  
  // DrEvil
 const DrEvil = function (num) {
    if (num === 1000000) {
      return `${num} dollars (pinky)`;
    } else {
      return `${num} dollars`;
    }
  }
  
  console.log(DrEvil(1000000));
  
  
  
  // MixUp
  const MixUp = function (str1, str2) {
    let str1_first_2 = str1.slice(0, 2);
    let str1_remain = str1.slice(2);
    let str2_first_2 = str2.slice(0, 2);
    let str2_remain = str2.slice(2);
    return str2_first_2 + str1_remain + " " + str1_first_2 + str2_remain;
  }
  
  console.log(MixUp("abc", "efg"));
  
 
  
  // MixUp
  
  const fixStart = function (str) {
    let firstLetter = str[0];
    let subStr = str.slice(1);
    subStr = subStr.replaceAll(firstLetter, "*");
    return firstLetter + subStr;
  }
  
  console.log(fixStart("abcabbab"));
  
  
  
  // Verbing
  const Verbing = function (str) {
    if (str.length < 3) {
      return str;
    } else if (str.slice(-3).toLowerCase() === "ing") {
      return str + "ly";
    } else {
      return str + "ing";
    }
  }
  
  console.log(Verbing("go"));
  
  
  
  // notBad
 const notBad = function (str) {
    //split sentence to words
    let words = str.split(" ");
    //find the index of "not" and "bad"
    let firstNot = words.indexOf("not");
    let firstbad = words.indexOf("bad");
    //return result based on condition
    //find str that needs to be replaced
    if (firstNot < firstbad && firstNot !== -1 && firstbad !== -1) {
      let removedStr = "";
      for (let i = firstNot; i < firstbad; i++) {
        removedStr = removedStr + words[i] + " ";
      }
      removedStr = removedStr + words[firstbad];
      //return the replaced str
      return str.replace(removedStr, "good");
    } else {
      return str;
    }
  }
  
  console.log(notBad("This movie is good!"));