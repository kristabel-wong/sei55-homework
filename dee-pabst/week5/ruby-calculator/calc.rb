
def menu
    puts "Ruby Calculator v2"
    puts "Menu"
    puts "1. Addition (a+b)"
    puts "2. Subtraction (a-b)"
    puts "3. Multiplication (a*b)"
    puts "4. Division (a/b)"
    puts "5. Exponential (a**b)"
    puts "6. Square Root (a)"
    puts "7. log 2 (a)"
    puts "0. Exit"
    print "Select (0-4)"
    gets.to_i
end

def get_a_number
    print "enter a number: "
    gets.to_i
end

def addition
    puts "a + b"
    sum = get_a_number + get_a_number
end

def subtraction
    puts "a - b"
    sum = get_a_number - get_a_number
end

def multiplication
    puts "a * b"
    product = get_a_number * get_a_number
end

def division
    puts "a / b"
    result = get_a_number / get_a_number
end

def exponential
    puts "a ** b"
    result = get_a_number ** get_a_number
end

def square_root
    puts "a"
    result = Math.sqrt(get_a_number)
end

def log2
    puts "a"
    result = Math.log(get_a_number)
end

exitMenu = -1
until exitMenu == 0
    exitMenu = menu
    case exitMenu
        when 1 then puts "Equals = #{addition}"
        when 2 then puts "Equals = #{subtraction}"
        when 3 then puts "Equals = #{multiplication}"
        when 4 then puts "Equals = #{division}"
        when 5 then puts "Equals = #{exponential}"
        when 6 then puts "Equals = #{square_root}"
        when 7 then puts "Equals = #{log2}"
        else "WTF?"
    end 
    puts "\n\n"
    puts "*************"
end