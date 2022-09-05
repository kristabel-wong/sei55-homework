# MTA Ruby style
puts "\nMTA in Ruby"

def get_stops( line )
    # take the line arg and give back the correct array of stops
    subway = {
        :n => ['Times Square','34th','28th','23rd','Union Square', '8th'],
        :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
        :s => ['Grand Central','33rd','28th','23rd','Union Square', 'Astor Place'], 
    }
    subway[ line ]
end #get_stops 

def get_stop_number( line, stop )
    # need an array method that will tell me the index
    line.index( stop )
end #get_stop_number

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
end # plan_trip


# test trips

plan_trip( :n, "Times Square", :n, "Union Square" )
# plan_trip( :n, "Times Square", :n, "8th" )
# plan_trip( :n, "Times Square", :n, "34th" )
# plan_trip( :n, "34th", :n, "Times Square" )
# plan_trip( :n, "8th", :s, "Grand Central" )
# plan_trip( :s, "Grand Central", :n, "Times Square" )
# plan_trip( :n, "Times Square", :l, "1st" )