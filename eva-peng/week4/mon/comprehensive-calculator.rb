# Calculator

# create the menu
puts "Welcome to My Ruby Calculator"
print "Please select what you want to perform (add/substract/multiply/divide/exponents/square root/mortgage/BMI/trip cost): "
operation = gets.chomp

def add_operation (num1, num2)
    answer = num1.to_f + num2.to_f
end

def substract_operation (num1, num2)
    answer = num1.to_f - num2.to_f
end

case operation
when "add"
    then add_operation (num1, num2)
    puts "#{num1} + #{num2} = #{num1 + num2}"
    
end

