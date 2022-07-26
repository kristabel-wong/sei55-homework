# Allergies
Given a person's allergy score, determine their full list of allergens.

An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:

- eggs *(1)*
- peanuts *(2)*
- shellfish *(4)*
- strawberries *(8)*
- tomatoes *(16)*
- chocolate *(32)*
- pollen *(64)*
- cats *(128)*

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.

**Write this inside an object, in JavaScript.**

### Examples:
```js
allergies.diagnosis(34);  // => [ 'chocolate', 'peanuts' ]
allergies.diagnosis(26);  // => [ 'tomatoes', 'strawberries', 'peanuts' ]
allergies.diagnosis(132); // => [ 'cats', 'shellfish' ]
allergies.diagnosis(0);   // => [] 
```