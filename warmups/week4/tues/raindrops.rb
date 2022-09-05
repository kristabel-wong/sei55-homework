# Raindrops
# Write a method in Ruby called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

# If the number is divisible by 3, the method returns "Pling".
# If the number is divisible by 5, the method returns "Plang".
# If the number is divisible by 7, the method returns "Plong".
# If the number is divisible by more than one of the above, the method returns their sounds combined.
# If the number is not divisible by 3, 5 or 7, the method just returns the number.
# Examples:

# raindrops(28) # => "Plong"
# raindrops(35) # => "PlangPlong"
# raindrops(26) # => "26"

def is_divisible_by(num1, num2)
    return num1 % num2 == 0
end


def raindrops (num)
    output = ""

    if is_divisible_by(num, 3)
        output += "Pling"
    end
    if is_divisible_by(num, 5)
        output += "Plang"
    end
    if is_divisible_by(num, 7)
        output += "Plong"
    end

    if !is_divisible_by(num, 3) && !is_divisible_by(num, 5) && !is_divisible_by(num, 7)
        output = num
    end

    return output

end


def raindrops(num)
    rain_array = []

    num % 3 == 0 ? rain_array << "Pling" : ""
    num % 5 == 0 ? rain_array << "Plang" : ""
    num % 7 == 0 ? rain_array << "Plong" : (return num)

    rain_array.join
end



p raindrops(28)
p raindrops(35)
p raindrops(26)

# interactive version from the command line
print "Please enter number: "
number = gets.to_i

output = ""
if number % 3 == 0
    output += "Pling"
end
if number % 5 == 0
    output += "Plang"
end
if number % 7 == 0
    output += "Plong"
end

if number % 3 != 0 && number % 5 != 0 && number % 7 != 0
    output = number
end

puts output