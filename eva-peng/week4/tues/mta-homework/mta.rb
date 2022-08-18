# -------------MAT------------
require 'colorize'

def plan_trip
    
    # create data structure
    subway_lines = {
        'n' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        'l' => ["8th", "6th", "Union Square", "3rd", "1st"],
        '6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
    # get the user's input
    print "Please enter your start line: "
    start_line = gets.chomp.downcase
    print "Please enter your start station: "
    start_station = gets.chomp
    print "Please enter your end line: "
    end_line = gets.chomp.downcase
    print "Please enter your end station: "
    end_station = gets.chomp
    # same line 
    if start_line == end_line
       start_index = subway_lines[start_line].find_index(start_station).to_i # get the index of the start station
        end_index = subway_lines[end_line].find_index(end_station).to_i # get the index of the end station
        if end_index > start_index # find out whether it goes from smaller index to bigger index
            num_of_stop = end_index - start_index
            journey = subway_lines[start_line][start_index..end_index]
        else
            num_of_stop = start_index - end_index
            journey = subway_lines[start_line][end_index..start_index].reverse
        end # end of nested if
        puts "Your journey has #{num_of_stop} stop/s, you need to go through the following stations: #{journey.join(", ").green} in line #{start_line}."
    end # end of the same line if
    if start_line != end_line # when different line

        # journey1 start_station to Union Square
        journey1_start_index = subway_lines[start_line].find_index(start_station).to_i
        journey1_end_index = subway_lines[start_line].find_index("Union Square").to_i

        # journey2 Union Square to end_station
        journey2_start_index = subway_lines[end_line].find_index("Union Square").to_i
        journey2_end_index = subway_lines[end_line].find_index(end_station).to_i

        if journey1_end_index > journey1_start_index # journey1 find out whether it goes from smaller index to bigger index
            num1_of_stop = journey1_end_index - journey1_start_index
            journey1 = subway_lines[start_line][journey1_start_index..journey1_end_index]
        else
            num1_of_stop = journey1_start_index - journey1_end_index
            journey1 = subway_lines[start_line][journey1_end_index..journey1_start_index].reverse
        end
        if journey2_end_index > journey2_start_index # journey2 find out whether it goes from smaller index to bigger index
            num2_of_stop = journey2_end_index - journey2_start_index
            journey2 = subway_lines[start_line][journey2_start_index..journey2_end_index]
        else
            num2_of_stop = journey2_start_index - journey2_end_index
            journey2 = subway_lines[end_line][journey2_end_index..journey2_start_index].reverse
        end
    end
    require 'pry'; binding.pry
        puts "Your journey has #{num1_of_stop + num2_of_stop} stops, you will go through the following stations: #{journey1.join(", ").green} in line #{start_line} first, then interchange at Union Square, you will go through the following stations: #{journey2.join(", ").yellow} in line #{end_line} next."
 
end # end of plan_trip method
plan_trip


