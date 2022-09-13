puts "not again :("

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


# subway line hash
lines_of_mta = {
    
    n: [ "Times Square", "34th", "28th(N)", "23rd(N)", "Union Square", "8th(N)" ],
    l: [ "8th(L)", "6th", "Union Square", "3rd", "1st" ],
    six: [ "Grand Central", "33rd", "28th(6)", "23rd(6)", "Union Square", "Astor Place" ]
    
} # closes subway line hash
puts lines_of_mta


# plan_trip( :n, "Times Square", :l, "1st" )



puts "Which line are you getting on at?"
    start_line = gets.chomp().to_sym
puts "Which stop are you getting on at?"
    start_stop = gets.chomp()
puts "Which line are you getting off at?"
    end_line = gets.chomp().to_sym
puts "Which stop are you getting off at?"
    end_stop = gets.chomp()




#get user inputs and store them in variables
# puts "Which line are you getting on at?"
# puts lines_of_mta.keys
# line_on = gets.to_i

# puts "Which stop are you getting on at?"
# if line_on == "N"
#     puts lines_of_mta["N"]
# elsif line_on == ["L"]
#     puts lines_of_mta["L"]
# elsif line_on == ["6"]
#     puts lines_of_mta        
# else
#     puts "Not an MTA line"
# end

# stop_on = gets.to_i


# puts "Which line are you getting off at?"
# puts lines_of_mta.keys
# line_off = gets.to_i

# puts "Which stop are you getting off at?"
# if line_off == "N"
#     puts lines_of_mta["N"]
# elsif line_off == ["L"]
#     puts lines_of_mta["L"]
# elsif line_off == ["6"]
#     puts lines_of_mta        
# else
#     puts "Not an MTA line"
# end

# stop_off = gets.to_i


