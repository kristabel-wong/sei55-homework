puts '

------------------------ Calculator - Ready ----------------------------
------------------------------------------------------------------------
'



# Specification:
#     A user should be given a menu of operations
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


# ---------------------------------------------------------------------------------------------- # 
# ------------------------------------ data structures ----------------------------------------- # 
# ---------------------------------------------------------------------------------------------- # 

# list of functions with corseponding number

# ---------------------------------------------------------------------------------------------- # 
# --------------------------------------- functions -------------------------------------------- # 
# ---------------------------------------------------------------------------------------------- #

# def addition_function(              first_number, second_number )
#     total_from_addition         =   first_number + second_number
# end
# # puts addition_function 4, 5 #                                             check = true

# def subtraction_function(           first_number, second_number )
#     total_from_subtraction      =   first_number - second_number
# end
# # puts subtraction_function 4, 2 #                                          check = true

# def multiplication_function(        first_number, second_number )
#     total_from_multiplication   =   first_number * second_number
# end
# # puts multiplication_function 3, 8 #                                       check = true

# def division_function(              first_number, second_number )
#     total_from_division         =   first_number / second_number
# end 
# # puts division_function 20, 5 #                                            check = true


def determine_function(             function_identifier )
    first_number = first_number
    second_number = second_number
    
    if      function_identifier == 1
    
        def addition_function(              first_number, second_number )
            total_from_addition         =   first_number + second_number
            function_text               = 'when added to'
        end #       closes addition_function
        addition_function( first_number, second_number )
    
    elsif   function_identifier == 2

        def subtraction_function(           first_number, second_number )
            total_from_subtraction      =   first_number - second_number
            function_text               = 'when subtracted by'
        end #       closes subtraction_function
        subtraction_function( first_number, second_number )
    
    elsif   function_identifier == 3
        def multiplication_function(        first_number, second_number )
            total_from_multiplication   =   first_number * second_number
            function_text               = 'multiplied by'
        end #       closes multiplication_function
        multiplication_function( first_number, second_number )

    elsif   function_identifier == 4
    
        def division_function(              first_number, second_number )
            total_from_division         =   first_number / second_number
            function_text               = 'devided by'
        end #       closes division_function
        division_function( first_number, second_number )
    
    else
        puts 'invalid input, please try again,'
        print "input function's number:"
    end #           closes if/else chain
end #               closes determine_function


      

 
puts'   Once you have your desired calculation, follow the process below


                    
                        Instructions for use:

Input the first number of the calculation,
Select desired function by inputing corresponding number from list provided,
Then, input the second number of the calculation,
        
Your answer will then be displayed on the screen.
        '

print 'input first number:
'
first_number = gets.to_f
puts first_number      

puts 'Please input corresponding number of desired function from the list below'
puts   '
        1. add
        2. subtract
        3. multiply
        4. divide  
        '
print "input function's number:"
function_identifier = gets.to_i 

puts '
',first_number
if      function_identifier == 1
    puts 'when added to'
elsif   function_identifier == 2
    puts 'when subtracted by'
elsif   function_identifier == 3
    puts 'when multiplied by'
elsif   function_identifier == 4
    puts 'when divided by'
else 
    puts 'invalid input, please try again,'
    print "input function's number:"
end

print 'input second number:'
second_number = gets.to_f

puts '


'
puts first_number 

if      function_identifier == 1
    puts 'when added to'
elsif   function_identifier == 2
    puts 'when subtracted by'
elsif   function_identifier == 3
    puts 'when multiplied by'
elsif   function_identifier == 4
    puts 'when divided by'
else 
    puts 'invalid input, please try again,'
    print "input function's number:"
end

puts second_number

puts '=
'
desired function = determine_function( function_identifier )