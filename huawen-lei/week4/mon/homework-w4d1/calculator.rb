
# --------------------- Phase 1 --------------------- #

# puts "You can do operations + - * /"
# puts "If you want to do basic arithmetic, press '0'."
# puts "If you want to quit, press 'q'."
# option = gets.chomp 

# while option != 'q'

#     print "Enter the first number: "
#     first_num = gets.to_i
    
#     print "Enter the operations: "
#     operation = gets.chomp
    
#     print "Enter the second number: "
#     second_num = gets.to_i    

#     if option == '0'
#         output = case operation
#         when "+" then first_num + second_num
#         when "-" then first_num - second_num
#         when "*" then first_num * second_num
#         when "/" then first_num.to_f / second_num.to_f
#         end # case
#         puts output
#     end # if

#     puts "You can do operations + - * /"
#     puts "If you want to do basic arithmetic, press '0'."
#     puts "If you want to quit, press 'q'."
#     option = gets.chomp 

# end #while

# # --------------------- Phase 1 function version --------------------- #
# def menu
#     puts "You can do operations + - * /"
#     puts "If you want to do basic arithmetic, press '0'."
#     puts "If you want to quit, press 'q'."
#     option = gets.chomp 
# end

# def input
#     print "Enter the first number: "
#     first_num = gets.to_i
    
#     print "Enter the operations: "
#     operation = gets.chomp
    
#     print "Enter the second number: "
#     second_num = gets.to_i   
    
#     output = case operation
#     when "+" then first_num + second_num
#     when "-" then first_num - second_num
#     when "*" then first_num * second_num
#     when "/" then first_num.to_f / second_num.to_f
#     end # case
#     puts output
# end

# option = menu

# while option != 'q'

#     if option == '0'
#     input
#     end # if

#     option = menu

# end #while

# # --------------------- Phase 2 function version --------------------- #
# def menu
#     puts "You can do operations + - * / exponents and square roots"
#     puts "If you want to do basic arithmetic, press '0'."
#     puts "If you want to do square roots, press 's'"
#     puts "If you want to quit, press 'q'."
#     option = gets.chomp 
# end

# def input_basic
#     print "Enter the first number: "
#     first_num = gets.to_i
    
#     puts "if it's exponents, type '^'"
#     print "Enter the operations: "
#     operation = gets.chomp
    
#     print "Enter the second number: "
#     second_num = gets.to_i   
    
#     output = case operation
#     when "+" then first_num + second_num
#     when "-" then first_num - second_num
#     when "*" then first_num * second_num
#     when "/" then first_num.to_f / second_num.to_f
#     when "^" then first_num ** second_num
#     end # case
#     puts output
# end

# def square_roots
#     print "Enter the number: "
#     num = gets.to_i
#     puts Math.sqrt(num)
# end #square_roots

# option = menu

# while option != 'q'

#     if option == '0'
#         input_basic
#     elsif option == 's'
#         square_roots
#     end # if

#     option = menu

# end #while


# --------------------- Bonus function version --------------------- #
def menu
    puts "You can do operations + - * / exponents and square roots"
    puts "If you want to do basic arithmetic, press '0'."
    puts "If you want to do square roots, press 's'"
    puts "If you want to do BMI calculation, type 'BMI'"
    puts "If you want to calculate a trip time and cost, press 't'"
    puts "If you want to quit, press 'q'."
    gets.chomp 
end

def input_basic
    print "Enter the first number: "
    first_num = gets.to_i
    
    puts "if it's exponents, type '^'"
    print "Enter the operations: "
    operation = gets.chomp
    
    print "Enter the second number: "
    second_num = gets.to_i   
    
    output = case operation
    when "+" then first_num + second_num
    when "-" then first_num - second_num
    when "*" then first_num * second_num
    when "/" then first_num.to_f / second_num.to_f
    when "^" then first_num ** second_num
    end # case
    puts output
end

def square_roots
    print "Enter the number: "
    num = gets.to_i
    puts Math.sqrt(num)
end #square_roots

def bmi_calculation
    print "Enter the weight (kg): "
    weight_num = gets.to_f
    print "Enter the height (m): "
    height_num = gets.to_f
    puts weight_num / (height_num ** 2)
end

def trip_calculation
    print "Enter the distance (miles): "
    distance_num = gets.to_f
    print "Enter the miles per gallon: "
    mile_gallon_num = gets.to_f
    print "Enter the price per gallon: "
    price_gallon_num = gets.to_f
    print "Enter the speed in miles per hour: "
    speed_mile_num = gets.to_f
    puts "Trip time is #{distance_num / speed_mile_num}"
    puts "Cost is #{distance_num / mile_gallon_num * price_gallon_num}"
end



option = nil # put option = nil the first time to enter the while loop, then put option = menu first in the while loop

while option != "q"

    option = menu
    
    if option == "0"
        input_basic
    elsif option == "s"
        square_roots
    elsif option == "BMI"
        bmi_calculation #use lowercase for methods definition, uppercase represents constant in ruby
    elsif option == "t"
        trip_calculation
    end # if


end #while





