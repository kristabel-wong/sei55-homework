const simonSays = {
question: "Sure!",
yellAllCaps: "Woah, chill out!",
sayNothing: "Fine. Be that way",
anythingElse: "Whatever",
withNums: "Error 404 cannot compute",
}
console.log(simonSays.question)

const youSay = function (input) {
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number' ) {
            return simonSays.withNums
        }
     else if ( input.includes("?") ) {
        return simonSays.question

    } else if ( input.trim() === "" ) {
        return simonSays.sayNothing

    } else if ( input.toUpperCase() === input ) {
        return simonSays.yellAllCaps

    } else {
        return simonSays.anythingElse
    }
}
}

console.log ( youSay("123") )
console.log ( youSay("Hello?") )
console.log ( youSay("HELLO!") )
console.log ( youSay(" ") )
console.log ( youSay("I'm so brain dead") )
