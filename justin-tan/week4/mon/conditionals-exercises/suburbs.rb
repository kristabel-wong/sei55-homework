# sydney suburbs
print "What is your suburb? "
suburb = gets.chomp.capitalize # .downcase to make everything lowercase

output = case suburb
when "Bondi"      then "You're rich!"
when "Manly"      then "You're such a man!"
when "Oyster Bay" then "Lots of oysters!"
else                   "Sounds nice!"
end

puts output
