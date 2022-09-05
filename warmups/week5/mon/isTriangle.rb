# Is this a triangle?
# In Ruby, implement a function that accepts 3 integer values a, b, c.

# The function should return true if a triangle can be built with the sides of given length and false in any other case.

# Tests:
# puts triangle? 1, 1, 1 # => true
# puts triangle? 4, 2, 3 # => true
# puts triangle? 1, 2, 2 # => true
# puts triangle? 5, 1, 2 # => false
# Bonus
# Instead of explicitly taking 3 parameters, make your function variadic.



def triangle? (a,b,c)
    if a + b > c && b + c > a && c + a > b
        return true
    else
        return false
    end
end


# using a ternary operator
def triangle? (a,b,c)
    # condition ? true : false
    a + b > c && b + c > a && c + a > b ? true : false

end 


# Bonus - variadic function
def triangle? (*sides)
    sides.sort! # inbuilt sort method in ruby
    sides[2] < sides[0] + sides[1] # implicit return
end


puts triangle? 1,1,1 # true
puts triangle? 4,2,3 # true
puts triangle? 1,2,2 # true
puts triangle? 5,1,2 # false
