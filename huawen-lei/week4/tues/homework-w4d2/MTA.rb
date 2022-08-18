
# --------------------- Phase 1 --------------------- #

def mta_line(line)
    mta = {
    
    "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

    "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],

    "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}  # mta hash

mta[line]

end


def single_line_trip(line, start_station, end_station)

    process = []

    # find which line in array
    line_array = mta_line(line);#need to use [ ] but cannot use . because line is a vairable
    
    # find the index of start and end station
    index_of_start = line_array.index start_station
    index_of_end = line_array.index end_station

    if index_of_start == index_of_end
        puts "You are just at your destination."
        process = false
    elsif index_of_start < index_of_end
        process = line_array[(index_of_start + 1)...(index_of_end + 1)]  #1 is not a magic number
    elsif index_of_start > index_of_end
        process = line_array[index_of_end...index_of_start].reverse()    
    end

    process

end #singleLineTrip()
    
# ---------------------- double line version 1 --------------------------- #
def plan_trip(start_line, start_station, end_line, end_station)
    
    process = []

    if start_line == end_line #if in the same line
        process = single_line_trip(start_line, start_station, end_station)
        if process  #if not at the same station
            num_stop = process.length
            if num_stop == 1  #distingush output of 1 stop and multiple stops
                puts "You must travel through the following stops on the #{start_line} line: #{process.join(', ')}.\n#{num_stop} stop in total"
            else
                puts "You must travel through the following stops on the #{start_line} line: #{process.join(', ')}.\n#{num_stop} stops in total"
            end
        end
 
    else  # if not in the same line
        process_one = single_line_trip(start_line, start_station, 'Union Square')
        num_stop_one = process_one.length
        process_two = single_line_trip(end_line, 'Union Square', end_station);
        num_stop_two = process_two.length
        num_stop = num_stop_one + num_stop_two;
        puts "You must travel through the following stops on the #{start_line} line: #{process_one.join(', ')}. \nChange at Union Square. \nYour journey continues through the following stops:#{process_two.join(', ')}. \n#{num_stop} stops in total"
    end

end  #planTrip()

# plan_trip("N", 'Times Square', "6", '33rd')
# plan_trip("N", 'Times Square', "N", '8th')

print "What is your start line: "
start_line = gets.chomp.upcase
print "What is your start station: "
start_station = gets.chomp
print "What is your end line: "
end_line = gets.chomp.upcase
print "What is your end station: "
end_station = gets.chomp

plan_trip(start_line, start_station, end_line, end_station)


