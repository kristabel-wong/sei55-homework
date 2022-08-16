#Calculator
#Explanation
#You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
#Specification:
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#The menu should be displayed again, and process should continue until the user selects a quit option from the menu
#Phase 1
#Calculator functionality
#Calculator should be able to do basic arithmetic (+,-, *, /)
#Phase 2
#Advanced Calculator functionality
#Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW##

print "please enter first number: "
num1 = gets.chomp.to_f

print "please enter second number: "
num2 = gets.chomp.to_f

print "Please select what operations you would like to perform (add/substract/multiply/divide/exponents/square root):"
operation = gets.chomp.downcase

case operation
when "add"
    puts "#{num1} + #{num2} = #{num1 + num2}"
when "substract"
    puts "#{num1} - #{num2} = #{num1 - num2}"
when "multiply"
    puts "#{num1} * #{num2} = #{num1 * num2}"
when "divide"
    puts "#{num1} / #{num2} = #{num1 / num2}"
when "exponents"
    puts "#{num1} to the #{num2} power is #{num1 ** num2}"
when "square root"
    puts "#{num1}'s square root is #{num1.sqrt}"
    puts "#{num2}'s square root is #{num2.sqrt}"
else
    puts "please check your operation input"
end

