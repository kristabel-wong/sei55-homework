puts "LETSGO!"

#make hash lines
def lines 
    {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
end

#single line method
def single_line(line, station_depart, station_arrival)

    line_stops = lines[line]
    index_depart = line_stops.index station_depart
    index_arrival = line_stops.index station_arrival

    if index_depart < index_arrival
        line_stops[index_depart + 1 .. index_arrival]
    else
        line_stops[index_arrival ... index_depart].reverse
    end
end


#plan trip method with user input
def plan_trip

    print "Enter what line are you departing from: "
    line_depart = gets.chomp.upcase

    print "Enter what station are you departing from: "
    station_depart = gets.chomp
    
    print "Enter what line are you arriving to: "
    line_arrival = gets.chomp.upcase
    
    print "Enter what station are you arriving to: "
    station_arrival = gets.chomp

    if line_depart == line_arrival
        travel_stops = single_line(line_depart, station_depart, station_arrival)
        "You will need to travel stops #{travel_stops.join(', ')} in order on line #{line_depart}. Total stops to make is #{travel_stops.length}"

    else 
        first_travel_stops = single_line(line_depart, station_depart, "Union Square")
        second_travel_stops = single_line(line_arrival, "Union Square", station_arrival)
        "You will need to travel stops #{first_travel_stops.join(', ')} in order on line #{line_depart}. Change to line #{line_arrival} at Union Square, then proceed to travel stops #{second_travel_stops.join(', ')} to arrive at your destination. Total stops to make is #{first_travel_stops.length + second_travel_stops.length}"
    end
end

p plan_trip

# require 'pry'; binding.pry
