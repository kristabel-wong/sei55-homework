# Drinking age?

#     Ask the user for their age.
#         Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
#     If age is less than 18, print an appropriate message.
#     If the age is equal to or over 18, print a different message.

puts "Drinking Age!"
print "Please enter your age: " #no newline added
age = gets.to_i

if age < 18 
    puts "Scram, kid! Go drink some cordial"
else 
    puts "Come on in and enjoy the liver damage"
end

# Air Conditioning

#     Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#         If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#         If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
#         If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "Enter current temp: "
current_temp = gets.to_i

print "Is AC functional? (y/n): "
ac_is_functional = gets.chomp

print "Enter desired temp: "
desired_temp = gets.to_i

p current_temp, ac_is_functional, desired_temp

if ac_is_functional == 'y'  &&  current_temp > desired_temp
    puts "Turn on the A/C please"
  
end # if ac_is_functional


# 3. Sydney Suburbs

#     Create a program that asks what suburbs you live in.
#     Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).
#     If the program does not recognise the suburb, print a generic message like "Sounds nice!"
#     BONUS: use a case statement instead of an if-elsif chain to solve the suburbs exercise.


