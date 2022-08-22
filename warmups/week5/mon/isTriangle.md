# Is this a triangle?
In **Ruby**, implement a function that accepts 3 integer values a, b, c. 

The function should **return** `true` if a triangle can be built with the sides of given length and `false` in any other case.

### Tests:
```rb
puts triangle? 1, 1, 1 # => true
puts triangle? 4, 2, 3 # => true
puts triangle? 1, 2, 2 # => true
puts triangle? 5, 1, 2 # => false
```

### Bonus
Instead of explicitly taking 3 parameters, make your function **variadic**. (Don't give me more than 3 numbers - because we won't be testing a triangle anymore)