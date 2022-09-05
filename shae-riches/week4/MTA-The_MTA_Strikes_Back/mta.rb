puts "MTA: The MTA Strikes Back"
puts ''
puts ''
puts '-------------------------'
# -------------------------------------------------------------------------------------------------- #
# MTA Lab
# Activity:

#     Students should create a program that models a simple subway system.

#     The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#         the stations the user must pass through, in order
#         where to change lines, if necessary
#         the total number of stops for the trip.

#     There are 3 subway lines:
#         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#         All 3 subway lines intersect at Union Square, but there are no other intersection points.
#             For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# -------------------------------------------------------------------------------------------------- #


# STEP ONE 
# a)    make the_MTA a hash data structure, holding all of the lines and corresponding stations
# a)i)      use symbols for the 'key' of the 'key:value' pairs 
# a)ii)     house the stations in an array so as to have a specified order
 # ----------------------------------------- MTA Lines ---------------------------------------------- #    

# plan_trip( :n, "Times Square", :l, "1st" )

the_MTA = {

    n:      [ 'Times Square' , '34th', '28th', '23rd', 'Union Square', '8th' ],         #   [6 stops]
    
    l:      [ '8th', '6th', 'Union Square', '3rd', '1st' ],                             #   [5 stops]
  
    six:    [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]  #   [6 stops]

}
#p the_MTA[:n][0]             #       check = true

# -------------------------------------------------------------------------------------------------- #

customer_information_and =  [2, :n, 5, :n]

def travel_info_from customer_information_and, the_MTA 
    
    travelling_from customer_information_and[0], the_MTA, customer_information_and[1], customer_information_and[2], customer_information_and[3] 

end         #       closes travel_info_from

# STEP TWO 
# a) use hard-coded input data to create a start point on the_MTA system. 
# a)i)      starting station = the_MTA[:n][0]...

def travelling_from station, of_the_MTAs, line, to_other_station, of_other_line 
    
    # store argumen values into new variables
    starting_station_index      =   station 
    the_MTA                     =   of_the_MTAs
    starting_line_symbol        =   line
    ending_station_index        =   to_other_station
    ending_line_symbol          =   of_other_line

    # utilse new variables to access required values from the_MTA hash data-structure-
    # - and then store them into new variables
    current_station             =   the_MTA[starting_line_symbol][starting_station_index]
    destiation_station          =   the_MTA[ending_line_symbol][ending_station_index]
    and_end_line_here           =   the_MTA[starting_line_symbol].length
    array_will_start_at         =   the_MTA[starting_line_symbol]

    array_from_starting_station =   array_will_start_at[starting_station_index..and_end_line_here]

    array_from_starting_station.each do | el |
        
        current_station = el
        #p current_station       #       check = true

        if      current_station == destiation_station && starting_line_symbol == ending_line_symbol
            
            return puts "You have arrived at your destiation: #{current_station} Station. Please mind the gap."    
        
        elsif   current_station == 'Union Square' && starting_line_symbol != ending_line_symbol
            
            return puts "You have arrived at Union Square, please change lines to the #{ending_line_symbol}-line."
        
        else    
            puts "departing #{current_station} Station, on the #{starting_line_symbol}-line."
        
        end #   closes travelling_from: if/elsif/else
    
    end     #   closes travelling_from: loop

end         #   closes travelling_from


commence_trip_with = travel_info_from customer_information_and, the_MTA




# -------------------------------------------- Hints -------------------------------------------------- #    
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
# ----------------------------------------------------------------------------------------------------- #
