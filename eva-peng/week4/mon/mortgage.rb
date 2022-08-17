# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
puts "Welcome to Mortgage calculator"
print "Please enter the house price: "
house_price = gets.chomp.to_f
print "Please enter the proportion of your pricinple: "
principle = gets.chomp.to_f
print "Please enter the interest rate: "
interest_rate = gets.chomp.to_f
print "Please enter how many years of your loan: "
year_of_loan = gets.chomp.to_i
monthly_repayment = principle * (interest_rate * (1+interest_rate)** (12* year_of_loan))/((1+interest_rate)**(12*year_of_loan)-1)

puts "For a houese of #{house_price} and a principle of #{principle}, your monthly payment base on an interest rate of #{interest_rate} of #{year_of_loan} years loan is: #{monthly_repayment}."


