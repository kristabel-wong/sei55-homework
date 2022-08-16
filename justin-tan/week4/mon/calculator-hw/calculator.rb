
require 'colorize'

def gets_first_numbers
    print "Enter first number here: "
    gets.to_i
end

def gets_second_numbers(type)
    print "Enter second number to #{type}: "
    gets.to_i
end

def addition
    a = gets_first_numbers
    b = gets_second_numbers "add"
    "#{a + b}".red
end

def subtraction
    a = gets_first_numbers
    b = gets_second_numbers "subtract"
    "#{a - b}".red
end

def multiplication
    a = gets_first_numbers
    b = gets_second_numbers "multiply"
    "#{a * b}".red
end

def division
    a = gets_first_numbers
    print "Enter second number to divide: "
    b = gets.to_f
    "#{a / b}".red
end

def exponents
    a = gets_first_numbers
    b = gets_second_numbers "the power of first number"
    "#{a ** b}".red
end

def square_root
    a = gets_first_numbers
    "#{Math.sqrt(a)}".red #().to_s.red <--to make into string
end

def cube_root 
    a = gets_first_numbers
    "#{Math.cbrt(a)}".red
end

# def mortgage 
#     print "Enter principal here: "
#     principal = gets.to_i

#     print "Enter your interest rate here: "
#     interest = gets.to_i 

#     print "Enter the term you need to repay: "
#     term = gets.to_i

#     monthly_repayment = (principal * (interest / 12) * ( 1 + (interest / 12)**(12(term)))) / ((interest / 12)**(12(term)))

#     puts "Your monthly repayment is $#{monthly_repayment}"
# end

def bmi 
    print "Enter your weight here (kg): "
    weight = gets.to_i

    print "Enter your height here (m): "
    height = gets.to_f

    bmi = weight / (height ** 2)

    "Your BMI is #{bmi}".red
end


def menu
    puts "Welcome to the calculator.
    Menu of Operations:
    A. Basic Operations
        1. Addition
        2. Subtraction
        3. Multiplication
        4. Division
    
    B. Advanced Operations
        5. Exponents
        6. Square Root
        7. Cube Root
    
    C. Bonus Operations
        8. BMI calculator
        
        9. Quit calculator"

    print "Please enter the number of the operation you like to proceed (enter number): "
    gets.chomp
end

mode = menu #mode = nil, then run mode = menu at the start of loop

while mode != "9"
    
    if mode == "1" #can use case
        puts addition
    elsif mode == "2"
        puts subtraction
    elsif mode == "3"
        puts multiplication
    elsif mode == "4"
        puts division
    elsif mode == "5"
        puts exponents
    elsif mode == "6"
        puts square_root
    elsif mode == "7"
        puts cube_root
    elsif mode == "8"
        puts bmi
    end

    mode = menu #to return back to menu

end