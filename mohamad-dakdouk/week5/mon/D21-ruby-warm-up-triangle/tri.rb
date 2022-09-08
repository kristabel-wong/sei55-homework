puts "hit"

# Is this a triangle?

# In Ruby, implement a function that accepts 3 integer values a, b, c.

# The function should return true if a triangle can be built with the sides of given length and false in any other case.
# Tests:

# puts triangle? 1, 1, 1 # => true
# puts triangle? 4, 2, 3 # => true
# puts triangle? 1, 2, 2 # => true
# puts triangle? 5, 1, 2 # => false

# Bonus

# Checking the sums of the side
# Solution one


# def triangle? (a, b, c)
#   if a + b > c && b + c > a && c + a > b
#     return true
#   else
#     return false
#   end
# end

# puts triangle? 1, 1, 1 # => true
# puts triangle? 4, 2, 3 # => true
# puts triangle? 1, 2, 2 # => true
# puts triangle? 5, 1, 2 # => false

# Solution two
# Creating a ternery which is a true or false statement

# def triangle? (a, b, c)
#   a + b > c && b + c > a && c + a > b ? true : false
# end

# solution three
# this is variatic exercise takes as many arguments as you want puts it in an array
def triangle? (*sides)
# sorts the array in order from the largest creates a new one
  sides.sort!
  sides[2] < sides[0] + sides[1]
end


puts triangle? 1, 1, 1 # => true
puts triangle? 4, 2, 3 # => true
puts triangle? 1, 2, 2 # => true
puts triangle? 5, 1, 2 # => false

