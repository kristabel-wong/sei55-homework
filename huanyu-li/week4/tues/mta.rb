# MTA Lab
# Activity:
# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:

# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:

# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


require 'colorize'
def subway_lines
    {
    n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    l: [ '8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    }
end

def single_planner line,start_station,end_station
    line_stations = subway_lines[line].map {|item| item.upcase}
    start_postion = line_stations.index(start_station)
    end_postion = line_stations.index(end_station)

    end_postion < start_postion && [subway_lines[line][end_postion..start_postion].reverse,start_postion-end_postion] || [subway_lines[line][start_postion..end_postion],end_postion-start_postion]
    # [stations,number]
end

def output_formatter stations,numb,isSingle
    puts "You will pass the following stations: #{stations.join(', ').yellow}."
    puts "Please change the line at #{'Union Square'.yellow} stations." unless isSingle
    puts "There are #{numb.to_s.red} stations in total."
end

def plan_trip start_line,start_station,end_line,end_station
    if start_line == end_line
        stops_arr = single_planner(start_line,start_station,end_station)
        output_formatter(stops_arr.first,stops_arr.last,true)
    else
        first_trip = single_planner(start_line,start_station,'Union Square'.upcase)
        second_trip = single_planner(end_line,'Union Square'.upcase,end_station)
        stops_arr = [first_trip.first[0...-1] + second_trip.first, first_trip.last + second_trip.last]
        output_formatter(stops_arr.first,stops_arr.last,false)
    end
end

def greeting
    puts 'Welcome to this Subway System'.green
    subway_lines.each do |line,stations|
        puts "The line #{line.upcase} has the following stops: #{stations.join(', ')}".green
    end
end

def get_and_check (isLine,line = nil)
    isValid = false
    if isLine
        # check line name input
        while !isValid
            input = gets.chomp.downcase.to_sym
            if subway_lines.keys.include? input
                isValid = true
            else
                print "Invalid input please try again: ".red
            end
        end
    else
        # check station name input
        line_stations = subway_lines[line].map {|item| item.upcase}
        while !isValid
            input = gets.chomp.upcase
            if line_stations.include? input
                isValid = true
            else
                print "Invalid input please try again: ".red
            end
        end
    end
    input
end



def asking
    print 'Please enter the line name where you will be boarding: '.yellow
    start_line_with = get_and_check(true)
    print 'Please enter the station where you will be boarding: '.yellow
    start_station_with = get_and_check(false, start_line_with)
    print 'Please enter the line name where you will get off: '.yellow
    end_line_with = get_and_check(true)
    print 'Please enter the station where you will get off: '.yellow
    end_station_with = get_and_check(false, end_line_with)
    [start_line_with,start_station_with,end_line_with,end_station_with]
end

isLoop = true
while isLoop
    greeting
    get_inputs = asking
    plan_trip(get_inputs[0],get_inputs[1],get_inputs[2],get_inputs[3])
    print "Do you want to use this app agian ? (Y/N): "
    isLoop = false if gets.chomp.upcase == 'N'
end

# puts plan_trip( :n, "Times Square", :l, "1st" )
# puts plan_trip( :l, "1st",:n, "Times Square" )
# puts plan_trip( :n, "23rd",:n, "Times Square" )