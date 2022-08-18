# Calculator
# Explanation

#     You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.



require 'colorize'




#----------Quit Calculator----------


#--------------Arithmetic---------------
#  Phase 1

#     Calculator functionality
#     Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2

#     Advanced Calculator functionality
#     Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW




#------------mortgage--------
def mortgage
    puts "please get a legit mortgage broker".magenta
end


#-------BMI---------------
# BMI = kg/m2


def bmi 
    def enter_weight
        print "enter weight (in kg): "
        gets.to_i.to_f
    end

    def enter_height
        print "enter height (in meters): "
        gets.to_i.to_f
    end

    puts (enter_weight/(enter_height**2)).to_s.blue
end


# Specification:

#     A user should be given a menu of operations
#     A user should be able to choose from the menu
#     A user should be able to enter numbers to perform the operation on
#     A user should be shown the result
#     The menu should be displayed again, and process should continue until the user selects a quit option from the menu
def menu
    
 
    def arithmetic
    
        def enter_value
            print "enter number: "
            gets.to_i.to_f
        end

        def add
            puts (enter_value + enter_value).to_s.red # .to_s this is to convert to string
        end 

        def subtract
            puts (enter_value - enter_value).to_s.red
        end 

        def multiply
            puts (enter_value * enter_value).to_s.red
        end 

        def divide
            puts (enter_value / enter_value).to_s.red
        end 

        def exponents
            puts (enter_value ** enter_value).to_s.red
        end 

        def square_root
            puts (Integer.sqrt(enter_value)).to_s.red
        end 

        print "Choose options - add, substract, multiply, divide, exponents (a/s/m/d/e/sr): "
        arithmetic_selection = gets.chomp.downcase 
            
        case arithmetic_selection
            when "a" then add
            when "s" then substract
            when "m" then multiply
            when "d" then divide
            when "e" then exponents
            when "sr" then square_root
            when "q" then quit
            else puts "unknown error. Please specify again"
        end
    end

    menu_selection = nil
    
    while menu_selection != 5
        print "Please choose the following list of calculators
        1: Arithmetic 
        2: Mortgage 
        3: BMI 
        4: Trip 
        5: Quit
        Type number here from the list below (1/2/3/4/5): "
        menu_selection = gets.to_i #or get chomp?
        
        case menu_selection
            when 1 then arithmetic
            when 2 then mortgage   
            when 3 then bmi
            when 4 then trip
            when 5 then nil
            else puts "can't detect. please enter your response"
        end
    end
end

menu()





