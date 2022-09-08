puts "hit"
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

# We should be able to say:

# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines

# Hints:

#     Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
#     Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
#     A symbol can't just be a number!
#     Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
#     Make subway lines keys in a hash, while the values are an array of all the stops on each line.
#     The key to the lab is to find the intersection of the lines at Union Square.
#     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


# global_lines

puts "\nMTA in Ruby"
​
def get_stops( line )
    # take the line arg and give back the correct array of stops
    subway = {
        :n => ['Times Square','34th','28th','23rd','Union Square', '8th'],
        :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
        :s => ['Grand Central','33rd','28th','23rd','Union Square', 'Astor Place'], 
    }
    subway[ line ]
end #get_stops 
​
def get_stop_number( line, stop )
    # need an array method that will tell me the index
    line.index( stop )
end #get_stop_number
​
def print_trip_plan( trip )
    puts "board at #{ trip.shift }"
    stops = trip.length
    destination = trip.pop
    puts "travel #{ stops } stop(s)"
    if trip.length > 1
        puts "travel through #{ trip.join(",") }"
    end
    puts "get off at #{ destination } \n\n"
end #print_trip_plan
​
def plan_trip( origin_line, origin_stop, dest_line, dest_stop )
    # check for single line trip
    if origin_line == dest_line
        # single line trip
        origin_line     = get_stops( origin_line )
        dest_line       = origin_line #same in a single trip
        origin_number   = get_stop_number( origin_line, origin_stop )
        dest_number     = get_stop_number( dest_line, dest_stop )
        # check which direction we are travelling
        if origin_number < dest_number
            #positive numbers
            trip = origin_line[ origin_number..dest_number ]
            print_trip_plan( trip )
        else
            #negative numbers other way!
            trip = origin_line[ dest_number..origin_number ]
            print_trip_plan( trip.reverse )
        end
    else
        # travel to Union Square first then to dest_stop
        plan_trip( origin_line, origin_stop, origin_line, "Union Square" )
        puts "*** Change for the #{dest_line} line ***"
        plan_trip( dest_line, "Union Square", dest_line, dest_stop)
    end
end # p

# test trips
​
# plan_trip( :n, "Times Square", :n, "Union Square" )
# plan_trip( :n, "Times Square", :n, "8th" )
# plan_trip( :n, "Times Square", :n, "34th" )
# plan_trip( :n, "34th", :n, "Times Square" )