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

#####support gems#######
require 'colorize'


####### Basic Mathematical Methods ########
def addition(first, second)
    first + second
end

def subtraction(first, second)
    first - second
end

def multiplication(first, second)
    first * second
end

def division(first, second)
    first.to_f / second.to_f
end

#### Calculator Main Menu #####
def calculator_menu 
    running = true
    while running
        
        puts "\n\n*****MAIN MENU*********".red
        puts"\n\nWelcome to the calculator. Press 'q' to quit.\nPlease select the mode:"
        print "[b]asic ".green 
        print "[a]dvanced".blue
        mode = gets.chomp.downcase
        mode = mode[0]

        if mode == 'b'
            basic_calculator
        elsif mode == 'a'
            advanced_calculator
        elsif mode  == 'q'
            running = false
            break
        else
            puts "Please enter a valid selecton [b / a / q]"
            calculator_menu
        end

    end #end while

end #calculator_menu

#### Basic calculator ####

def basic_calculator
    running = true
    puts "\n\n****Basic Calculator****".green

    while running
        puts "\n q to return to main menu.\n\n\n"
        print "Please enter the operation you wish to do (+ , - , * , / ):"
            operator  = gets.chomp

            if operator == 'q'
                running = false
                break
            else

                print "Enter the first number:"
                first = gets.chomp.to_i
                
                print "Enter the second number:"
                second = gets.chomp.to_i
            end
            
            puts "#{first} #{operator} #{second} = "

        case operator
        when '+'   then print addition(first, second)
        when '-'   then print subtraction(first, second)
        when '*'   then print multiplication(first, second)
        when '/'   then print division(first, second)
        else 
                        puts "Invalid input."
        end #end case
    
    end #end while
end #end calculator_menu

def advanced_calculator

    running = true
        puts "\n\n****Advanced Calculator****".blue

        while running
            puts "\n q to return to main menu.\n\n\n"
            print "Please enter the operation you wish to do ([e]xponent / [s]quare root / [l]og ): "
            operator  = gets.chomp.downcase
            operator = operator[0]

            if operator == 'q'
                running = false
                return
            elsif operator == 's'

                print "Enter a number:"
                first = gets.chomp.to_i
                square_root(first)                    
            
            elsif operator == 'e'
                print "Enter the first number:"
                first = gets.chomp.to_i
        
                print "Enter the second number:"
                second = gets.chomp.to_i
                exponents(first, second)
            
            elsif operator == 'l'
                print "Enter a number:"
                num = gets.chomp.to_f

                print "Enter the base:"
                base = gets.chomp.to_f
                log(num, base)
            else 
                puts "Invalid input."

                   
            end

        end #end while
        
   
end #end advanced_calc


# Phase 2

#     Advanced Calculator functionality
#     Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW
def exponents (first, second)
    power = first ** second
    puts "#{first} to the power of #{second} is #{power}."
end

def square_root (num)
    num = num.to_f
    sum = Math.sqrt(num)
    puts "The square root of #{num} is #{sum}."
end

def log (num, base)
    sum = Math.log(num, base).to_f
    puts "#{num} log #{base} is #{sum}"
end

####### Initialise #######
calculator_menu


# BMI Calculator

# Calculate the body mass index (BMI) for an individual, given their height and weight
# Trip Calculator

# Calculate a trip time and cost given inputs for

#     distance
#     miles per gallon
#     price per gallon
#     speed in miles per hour
