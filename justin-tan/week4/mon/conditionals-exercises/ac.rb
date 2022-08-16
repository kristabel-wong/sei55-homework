# air conditioning
print "Enter current temp: "
current_temp = gets.to_i

print "Is the AC working? (y/n):  "
ac_working = gets.chomp

print "What is your desired temp?: "
desired_temp = gets.to_i

# p current_temp, ac_working, desired_temp

if ac_working == "y" 
    if current_temp > desired_temp
        puts "Turn on the AC please"
    end

else 
    if current_temp > desired_temp
        puts "Fix the AC now! It's hot!"
    else
        puts "Fix the Ac when you can...it's cool"
    end
    
end