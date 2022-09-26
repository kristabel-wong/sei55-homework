// prime numbers of 60 should be [2,2,3,5];


const primeFactors = function (num) {

    // array of all the prime factors
    let factors = [];

    // prime numbers need to be greater than 1
    for (let i = 2; i <= num; i++) {

        // if statement - if the condition is met once it continues through the loop
        // while loop - allows for multiple arguments to satisfy the condition (60 /2 is true and so is 30/2)

        while ( num % i === 0 ) { // this wont work as we need another nested loop (for demo)
            console.log('num', num);
            console.log('i', i);
            
            factors.push(i);

            num = num / i;

        }
    }

    return factors;
}

console.log(primeFactors(120)); //[2,2,2,3,5]
console.log(primeFactors(60)); //[2,2,3,5]
console.log(primeFactors(29)); //[29]
console.log(primeFactors(30)); // [2, 3, 5]
