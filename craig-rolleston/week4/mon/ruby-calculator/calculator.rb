#require 'colorize'

# 2 functions for separate numbers entered..?
# until option == quit once reaches 
    #
puts "Calculator"

#option 1
def menu
    puts "Menu"
    puts "1. Addition"
    puts "2. Subtraction"
    puts "3. Division"
    puts "4. Multiplication"
    puts "5. Number power_of"
    puts "6. Stop"
    puts "Select (1-6)"
    gets.to_i 
end


def get_number
   puts "Enter a number: "
   gets.to_f
end

def addition
    answer = get_number + get_number
    puts "#{answer}" 
end

def subtraction
    answer = get_number - get_number
    puts "#{answer}"
end

def division
    answer = get_number / get_number
    puts "#{answer}"
end

def multiplication
    answer = get_number * get_number
    puts "#{answer}"
end

def number_power_of
    answer = get_number ** get_number
    puts "#{answer}"
end


user_choice = nil

while user_choice != 6

    user_choice = menu
    if user_choice == 1
        addition
    elsif user_choice == 2
        subtraction
    elsif user_choice == 3
        division
    elsif user_choice == 4
        multiplication
    elsif user_choice == 5
        number_power_of
    elsif user_choice == 6
        
    else puts "Please enter a valid number"
    end

end

#Have function for a+b
# def addition
#     puts "Enter numbers you would like to add: "
#         num1 = gets.to_f
#         num2 = gets.to_f
#         answer = num1 + num2
#     puts "The sum is... #{answer}"
# end

# #Have function for a-b
# def subtraction
#     puts "Enter numbers you would like to subtract: "
#         num1 = gets.to_f
#         num2 = gets.to_f
#         answer = num1 - num2
#     puts "The sum is... #{answer}"
# end

# #Have function for a/b
# def division
#     puts "Enter numbers you would like to divide: "
#         num1 = gets.to_f
#         num2 = gets.to_f
#         answer = num1 / num2
#     puts "The sum is... #{answer}"
# end

# #Have function for a*b
# def multiplication
#     puts "Enter numbers you would like to multiply: "
#         num1 = gets.to_f
#         num2 = gets.to_f
#         answer = num1 * num2
#     puts "The sum is... #{answer}"
# end

# #Have function for a**b
# def number_squared
#     puts "Enter numbers you would like to square: "
#         num1 = gets.to_f
#         num2 = gets.to_f
#         answer = num1 ** num2
#     puts "The sum is... #{answer}"
# end






