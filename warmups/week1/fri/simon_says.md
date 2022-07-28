# Simon Says
Create a function in JS that takes an input and returns Simon's response as follows:
- Simon answers 'Sure.' if you ask him a question.
- He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
- He says 'Fine. Be that way!' if you address him without actually saying anything.
- He answers 'Whatever.' to anything else.
- The input will not contain any numbers.

### Examples:
``` JS
simonSays("Hello, how are you?"); // => "Sure."
simonSays("Hello, how are you!"); // => "Whatever"
simonSays(""); // => "Fine. Be that way!"
simonSays("HEYYYYY"); // => "Woah, chill out!"
```

#### Bonus:
Strike out the last dot point, the input may be a combination of numbers and other characters.