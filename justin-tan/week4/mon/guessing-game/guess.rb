# puts "Welcome to guess my number!"
# puts "Put in a maximum number you want to guess up to:"
# max_num = gets.to_i

# comp_number = rand max_num

# i = 0
# while i < max_num

#     print "Guess your number here: "
#     number_guess = gets.to_i

#     if number_guess != comp_number
#         if number_guess > comp_number
#             puts 'Wrong, guess lower!'
#         else 
#             puts 'Wrong, guess higher!'
#         end
#     else 
#         puts 'Congratulations you guessed the number!'
#     end

#     i += 1
# end

require 'colorize' #like a <script> tag to load the jquery library

print "Enter maximum guess number: "
max_guess = gets.to_i

secret_number = rand max_guess
user_guess = -1 #initialise to a number that guarantees the loop runs at least once

def get_guess(max)
    print "Enter your guess (0-#{max}): "
    gets.to_i
end

def give_feedback(secret, guess)
    
    if secret > guess
        "Wrong - guess higher!".red
    elsif secret < guess
        "Wrong - guess lower!".green
    end

end

while secret_number != user_guess #or until secret_number == user_guess
    user_guess = get_guess( max_guess )
    puts give_feedback( secret_number, user_guess)
end # while

puts "Congratulations! You got the correct number!".yellow




