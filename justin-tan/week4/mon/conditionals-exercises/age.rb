# drinking age exercise

print "Please enter your age:" #no new line added
age = gets.to_i

case 
when age < 18
    puts "underage"
when age >= 18 
    puts "allowed to drink"
end



