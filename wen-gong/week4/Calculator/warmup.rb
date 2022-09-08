# Raindrops

# Write a method in Ruby called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

#     If the number is divisible by 3, the method returns "Pling".
#     If the number is divisible by 5, the method returns "Plang".
#     If the number is divisible by 7, the method returns "Plong".
#     If the number is divisible by more than one of the above, the method returns their sounds combined.
#     If the number is not divisible by 3, 5 or 7, the method just returns the number.

# Examples:

# raindrops(28) # => "Plong"
# raindrops(35) # => "PlangPlong"
# raindrops(26) # => "26"

def raindrops(num)
    output = ""

    if num % 3 == 0
        output += "Pling"
    end
    if num % 5 == 0
        output += "Pland"
    end
    if num % 7 == 0
        output += "Plong"
    end

    if num % 3 != 0 && num % 5 != 0 && num % 7 != 0
        output = num
    end

    return output
end

p raindrops(28)
p raindrops(35)
p raindrops(26)

        

    
