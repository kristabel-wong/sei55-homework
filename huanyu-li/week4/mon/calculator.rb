# https://gist.github.com/textchimp/c2736668175eba4cfe8802e2402cc74d

# Calculator
# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do more complex arithmetic (exponents, square roots) - STFW
# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def menu
    puts 'Welcome to the calculator'
    puts '1. Addition +'
    puts '2. Subtraction -'
    puts '3. Multiplication *'
    puts '4. Division /'
    puts '5. Advanced Calculator'
    puts '  5.1. Exponents'
    puts '  5.2. Square Roots'
    puts '  5.3. Mortgage Calculator'
    puts '  5.4. BMI Calculator'
    puts '  5.5. Trip Calculator'
    puts '0. Exit'
    print 'Please select a number: '
    gets.to_i
end



def basic_calculator (selection)

    case selection
    when 1
        puts 'Addition: a + b = c'
        print "Please enter 'a' and 'b' values separated by whitespace: " 
        inputs = gets.split(' ')
        print 'c = '
        puts inputs[0].to_f + inputs[1].to_f
    when 2
        puts 'Subtraction: a - b = c'
        print "Please enter 'a' and 'b' values separated by whitespace: " 
        inputs = gets.split(' ')
        print 'c = '
        puts inputs[0].to_f - inputs[1].to_f
    when 3
        puts 'Multiplication: a * b = c'
        print "Please enter 'a' and 'b' values separated by whitespace: " 
        inputs = gets.split(' ')
        print 'c = '
        puts inputs[0].to_f * inputs[1].to_f
    when 4
        puts 'Division: a / b = c'
        print "Please enter 'a' and 'b' values separated by whitespace: " 
        inputs = gets.split(' ')
        print 'c = '
        puts inputs[0].to_f / inputs[1].to_f
    when 5
        puts '1. Exponents'
        puts '2. Square Roots'
        puts '3. Mortgage Calculator'
        puts '4. BMI Calculator'
        puts '5. Trip Calculator'
        puts '9. Back'
        puts '0. Exit'
        print 'Please select a number: '
        inputs_adv = gets.to_i
    when 0
        0
    end
end

def advanced_calculator (selection)
    case selection
    when 1
        puts 'c = a ^ b'
        print "Please enter 'a' and 'b' values separated by whitespace: " 
        inputs = gets.split(' ')
        print 'c = '
        puts inputs[0].to_f ** inputs[1].to_f
        
    when 2
        puts 'c = square(a)'
        print "Please enter 'a' value: "
        input = gets.to_f
        print 'c = '
        puts Math.sqrt(input)
    when 3
        print "Enter Loan amount: "
        loan = gets.to_i
        print "Enter length of time in months: "
        time = gets.to_i
        print "Enter interest rate (%): "
        rate = gets.to_f/100
        print 'Fixed Monthly Payment will be: $'
        puts (loan * rate * ((1+rate)**time) /((1+rate)**time -1)).round(2)
    when 4
        print 'Enter height in meters: '
        heigh = gets.to_f
        print 'Enter weight in kilograms: '
        weight = gets.to_f
        print 'BMI = '
        puts weight / (heigh**2).round(2)
    when 5
        print 'Enter distance in km: '
        distance = gets.to_f
        print 'Enter km per liter: '
        km_per_liter = gets.to_f
        print 'Enter price per liter: '
        price_per_liter = gets.to_f
        print 'Enter speed in km per hour: '
        speed_km_per_hour = gets.to_f
        print 'Trip time (in hour) is '
        print (distance / speed_km_per_hour).round(2)
        puts 'hours'
        print 'Trip cost is $'
        print (distance * km_per_liter * price_per_liter).round(2)
        puts 'dollar'
    when 9
        return
    when 0
        0
    end
end

selection_1 = -1
selection_2 = -1
selection = 'y'
until selection_1 == 0 || selection_2 == 0 || selection == 'n'
    selection_1 = menu
    selection_2 = basic_calculator(selection_1)
    advanced_calculator(selection_2)

    unless selection_1 == 0 || selection_2 == 0 || selection == 'n' then 
        print 'Do you want to continue ? (y/n): '
        selection = gets.chomp
    end
end


