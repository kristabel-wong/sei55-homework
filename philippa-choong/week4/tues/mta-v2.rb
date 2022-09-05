
require 'colorize'
require'pry'

n_line = {
  name: "N Line",
  stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
}

l_line = {
  name: "L Line",
  stations:["8th", "6th", "Union Square", "3rd", "1st"]
}

six_line = {
  name: "6 Line",
  stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
    
    #  convert 'string value' into 'index number'
def station_index(start_line,station)
    
    start_line[:stations].find_index(station)

end #station_index_start

def stations_taken_one_line(start_line, station_start, station_end)
    list_stations_taken = []
    startIndex = station_index(start_line, station_start)
    endIndex = station_index(start_line, station_end)
    
    if startIndex < endIndex
        list_stations_taken = start_line[:stations][(startIndex + 1)..endIndex]    
    #     #eg. array[1...4]
    elsif startIndex > endIndex 
        list_stations_taken = start_line[:stations][endIndex..(startIndex - 1)].reverse!
    end 

end #stations_taken_one_line

def stations_taken_to_UnionSquare(start_line, station_start)
    list_stations_taken = []
    startIndex = station_index(start_line, station_start)
    endIndex = station_index(start_line, "Union Square")
    
    if startIndex < endIndex
        list_stations_taken = start_line[:stations][(startIndex + 1)..endIndex]      
    #     #eg. array[1...4]
    elsif startIndex > endIndex 
        list_stations_taken = start_line[:stations][endIndex..(startIndex - 1)].reverse!
    end 

end #stations_taken_to_UnionSquare

def stations_taken_from_UnionSquare(end_line, station_end)
    list_stations_taken = []
    startIndex = station_index(end_line,"Union Square")
    endIndex = station_index(end_line, station_end)
    
    if startIndex < endIndex
        list_stations_taken = end_line[:stations][(startIndex + 1)..endIndex]       
    #     #eg. array[1...4]
    elsif startIndex > endIndex 
        list_stations_taken = end_line[:stations][endIndex..(startIndex - 1)].reverse!
    end 

end #stations_taken_from_UnionSquare

def plan_trip(start_line,station_start,end_line,station_end)

    if start_line != end_line
        station_part_one = stations_taken_to_UnionSquare(start_line, station_start)
        station_part_two = stations_taken_from_UnionSquare(end_line, station_end)
        total_station = (station_part_one + station_part_two)
        print "You will travel via the following stops: #{station_part_one.join(", ")}. Change train line at Union Square and continue travelling to the following stops: #{station_part_two.join(", ")}. #{total_station.length} in total. ".blue
    else 
        station_list = (stations_taken_one_line(start_line, station_start, station_end))
        print "You must travel through the following stops: #{station_list.join(", ")}. #{station_list.length} in total. ".red
    end 

end #plan_trip

p   plan_trip(six_line,"Grand Central",six_line,"23rd")
p   plan_trip(six_line,"Grand Central",n_line,"34th")

binding.pry #like 'debugger in JS




   
    









