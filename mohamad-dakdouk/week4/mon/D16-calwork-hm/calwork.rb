puts "hi"

# Calculator
# Explanation

#     You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

# Specification:

#     A user should be given a menu of operations
#     A user should be able to choose from the menu
#     A user should be able to enter numbers to perform the operation on
#     A user should be shown the result
#     The menu should be displayed again, and process should continue until the user selects a quit option from the menu

# Phase 1

#     Calculator functionality
#     Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2

#     Advanced Calculator functionality
#     Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW

# Bonus
# Mortgage Calculator

# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
# BMI Calculator

# Calculate the body mass index (BMI) for an individual, given their height and weight
# Trip Calculator

# Calculate a trip time and cost given inputs for

#     distance
#     miles per gallon
#     price per gallon
#     speed in miles per hour




def number1
    print "enter number 1 :"
    gets.to_i
end

def number2
    print "enter number 2 :"
    gets.to_i
end

def options
    puts "Select for the following operations"
    puts "1 is plus"
    puts "2 is minus"
    puts "3 is divide"
    puts "4 is times"
    puts "5 is exponent"
    puts "6 is sqareroot"
    print "Please insert the number here : "
    gets.to_i
end

def plus
    result = number1 + number2
    print "#{result}"
end

def minus
    result = number1 - number2
    print "#{result}"
end

def divide
    result = number1/number2
    print "#{result}"
end

def times
    result = number1 * number2
    print "#{result}"
end

def exponenet
    result = number1**number2
    print "#{result}"
end

def sqareroot
    result1= Math.sqrt(number1)
    result2= Math.sqrt(number2)
    print "number1 #{result1} number2 #{result2}"
end

user_choice = nil 

until user_choice == 0

    user_choice = options  

    if user_choice == 1
        plus
    elsif user_choice == 2
        minus
    elsif user_choice == 3
        divide
    elsif user_choice == 4
        times
    elsif user_choice == 5
        exponenet
    elsif user_choice == 6
        sqareroot
    else 
        puts "Please select a number within range"
    end
end 





    
#  old solution

# print "Enter your first number : "
# number1 = gets.to_i
# print "Enter your second number: "
# number2 = gets.to_i

# def addition



# def calculator(n1, n2)
# print "what action do you want to make plus, minus, divide, times, exponent or sqaureroot:"
# action = gets.chomp
#     if action == "plus"
       
#     elsif action == "minus"
#         result = n1 - n2
#         print "#{result}"
#     elsif action == "divide"
#         result = n1/n2
#         print "#{result}"
#     elsif action == "times"
#         result = n1 * n2
#         print "#{result}"
#     elsif action == "exponent"
#         result1 = n1**n2
#         print "exponenet n1 of n2 #{result1}"
#         result2 = n2**n1
#         print "exponenet n2 of n1 #{result2}"
#     elsif action == "squareroot"
#         result1= Math.sqrt(n1)
#         result2= Math.sqrt(n2)
#         print "n1 #{result1} n2 #{result2}"
#     end
# end

# calculator(number1, number2)

# new solution refacted
