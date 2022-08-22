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
puts "Welcome to Calculator"

print "please enter first number: "
num1 = gets.chomp.to_f

print "please enter second number: "
num2 = gets.chomp.to_f

puts "Please select the number of the operation you would like to perform: "
puts "1. Add"
puts "2. Substract"
puts "3. Multiply"
puts "4. Divide"
puts "5. Exponents"
puts "6. Square Root"
puts "7. Exit"
operation = gets.to_i

case operation
when 1
    puts "#{num1} + #{num2} = #{num1 + num2}"
when 2
    puts "#{num1} - #{num2} = #{num1 - num2}"
when 3
    puts "#{num1} * #{num2} = #{num1 * num2}"
when 4
    puts "#{num1} / #{num2} = #{num1 / num2}"
when 5
    puts "#{num1} to the power of #{num2} is #{num1 ** num2}"
when 6
    puts "#{num1}'s square root is #{Math.sqrt(num1)}"
    puts "#{num2}'s square root is #{Math.sqrt(num2)}"
when 7
    puts "Bye Bye"
else
    puts "please check your operation input"
end

