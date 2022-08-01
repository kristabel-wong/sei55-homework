# Word Counter
​
Given the following string:
​
```
const story = "The dogs are happy. The dogs are running. The owners are drunk. The dogs are running on the road. The dogs are gone. Bye, dogs.";
```
​
...print out a "word frequency" table which lists each word from the string, followed by how many times it appeared:
​
```
The: 5
dogs: 4
dogs.: 1
are: 5
happy.: 1
owners: 2
the: 1
drunk.: 1
Bye,: 1
// ...etc...
```
​
The order the words print out does not matter - you don't have to match the above output exactly.
​
​
# BONUS
1. Notice that the example output has punctuation (i.e. the full stops) included as part of the word - this is because the easiest way to split up the string into words involves just looking for spaces. Change the code so that the string is split up into words that ignore the punctuation, i.e. "dogs" and "dogs." are treated as the same word "dogs" and "Bye," is treated as "Bye"
2. Ignore case as well, so "The" and "the" are both treated as the same word "the"
3. Ultra bonus: print out the words in order of frequency, from highest count to lowest (don't expect a solution for this)
​
# Hints:
1. You should use an object to store the words and their counts! Begin with an empty object
2. The first sub-problem is how to turn a string into an array of the individual words. Then you will need to loop through that array, counting each word and using the object to keep track of the running total.
3. The first time you see each word, it will not be a key of the object yet - so you need to add it, and initialise its count value. But once you have seen a word more than once, you just need to increment the existing count value.
4. Remember that there is a special looping structure just for looping over objects!
5. Maybe there is a built-in method to split the string up into words for you?