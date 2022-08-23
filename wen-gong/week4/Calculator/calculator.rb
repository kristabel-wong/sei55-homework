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
require 'colorize'
def calculator()
    puts "Enter first number: "
    num1 = gets.chomp().to_f
    puts "Enter operator: + - / *"
    op = gets.chomp()
    puts "Enter second number: "
    num2 = gets.chomp().to_f

    if op == "+"
        puts (num1 + num2)
    elsif op == "-"
        puts (num1 - num2)
    elsif op == "/"
        puts (num1 / num2)
    elsif op == "*"
        puts (num1 * num2)
    else
        puts "Invalid operator"
    end
    exit()
end

def exit()
    puts "Do you want to exit? y/n"
    answer = gets.chomp()
    if answer == "n"
         menu()
    else 
    end
end

def BMI()
    puts "Enter your weight(kg): "
    weight = gets.chomp().to_f
    puts "Enter your height(metre): "
    height = gets.chomp().to_f
    puts (weight / (height ** height))
    exit()
end

def menu()
    puts "Welcome to calculator"
    puts "1,Operations"
    puts "2,BMI"
    puts "3,Trip"
    puts "Choose one to start"
    answer = gets.chomp.to_i
    if answer == 1
        calculator()
    end
    if answer == 2
        BMI()
    end
end   

menu()




  