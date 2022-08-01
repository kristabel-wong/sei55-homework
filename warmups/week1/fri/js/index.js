// Simon Says
// Create a function in JS that takes an input and returns Simon's response as follows:

// Simon answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// The input will not contain any numbers.
// Examples:
// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"

// Bonus:
// Strike out the last dot point, the input may be a combination of numbers and other characters.



const simonSays = function (message) {

    let response = "Whatever.";

    // question mark ==> respond with "Sure"
 
    if (message[message.length-1] === "?") { // can also use .endsWith()

        response = "Sure";

    }

    // empty message ==> respond with "Fine. Be that way!"

    else if (message.trim() === "") {

        response = "Fine. Be that way!";

    }

    // all caps ==> responds with "Woah, chill out!"

    else if (message === message.toUpperCase()) {

        response = "Woah, chill out!";

    } 

    console.log(response)

}

simonSays("Hello, how are you?"); // => "Sure."
simonSays("Hello, how a2323re you!"); // => "Whatever"
simonSays(""); // => "Fine. Be that way!"
simonSays("HEYYYYY"); // => "Woah, chill out!"



// BONUS Q SOLUTION

const simonSaysBONUS = function (message) {

    let response = "Whatever.";

    
    if (typeof message === "string") {

        // question mark ==> respond with "Sure"

        if (message.trim().endsWith("?")) { 
    
            response = "Sure";
    
        }
    
        // empty message ==> respond with "Fine. Be that way!"
    
        else if (message.trim() === "") {
    
            response = "Fine. Be that way!";
    
        }
    
    
        // all caps ==> responds with "Woah, chill out!"
    
        else if (message === message.toUpperCase()) {
    
            response = "Woah, chill out!";
    
        } 

    }

    console.log(response)

}

simonSaysBONUS("Hello, how are you?"); // => "Sure."
simonSaysBONUS("Hello, how a2323re you!"); // => "Whatever"
simonSaysBONUS(""); // => "Fine. Be that way!"
simonSaysBONUS("HEYYYYY"); // => "Woah, chill out!"
simonSaysBONUS(123) // whatever