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



def lines()
    trip = {
    "n": [ "TimesSquare", "34th", "28th", "23rd", "UnionSquare", "8th"],
            
    "l": [ "8th", "6th", "UnionSquare", "3rd", "1st" ],
            
    "six": ["GrandCentral", "33rd", "28th", "23rd", "UnionSquare","AstorPlace"]
    }
     
    puts "Which line do you want to start?"
        start_line = gets.chomp().to_sym
    puts "Which stop are you ?"
        start_stop = gets.chomp()
    puts "Whcih line do you want "
        end_line = gets.chomp().to_sym
    puts "Which stop are you end ?"
        end_stop = gets.chomp()
    
   
    trip_line = []
    num1 = trip[start_line].find_index(start_stop) 
    num2 = trip[end_line].find_index(end_stop)
    if trip[start_line] == trip[end_line]        
         if num1 < num2
            trip_line = trip[start_line][num1..num2]
            allstop = trip_line.length - 1
            puts "You have to pass through", trip_line  
            puts "Total number of stops for the trip is: ",allstop            
         elsif num1 > num2
            trip_line = trip[start_line][num2..num1].reverse
            allstop = trip_line.length - 1
            puts "You have to pass through", trip_line  
            puts "Total number of stops for the trip is: ",allstop
         end
          
    elsif trip[start_line] != trip[end_line] 
        if start_line = "n" || start_line = "six"
             if num1 < 4
                line1 = trip[start_line][num1..4]
                usNum = trip[end_line].find_index("UnionSquare")
                if num2 > usNum
                    line2 = trip[end_line][usNum + 1..num2]
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                elsif num2 < usNum
                    line2 = trip[end_line][num2...usNum].reverse
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                end
            elsif num1 > 4
                line1 = trip[start_line][4..num1].reverse
                usNum = trip[end_line].find_index("UnionSquare")
                if num2 > usNum
                    line2 = trip[end_line][usNum + 1..num2]
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop  
                elsif num2 < usNum
                    line2 = trip[end_line][num2...usNum]
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                end
            end
        elsif start_line = "l"
            if num1 < 2
                line1 = trip[start_line][num1..2]
                usNum = trip[end_line].find_index("UnionSquare")
                if num2 > usNum
                    line2 = trip[end_line][usNum + 1..num2]
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                elsif num2 < usNum 
                    line2 = trip[end_line][num2...usNum].reverse
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                end
            elsif num1 > 2
                line1 = trip[start_line][num1..2].reverse
                usNum = trip[end_line].find_index("UnionSquare")
                if num2 > usNum
                    line2 = trip[end_line][usNum + 1..num2]
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                elsif num2 < usNum 
                    line2 = trip[end_line][num2...usNum].reverse
                    trip_line = line1 + line2
                    allstop = trip_line.length - 1
                    puts "You have to pass through", trip_line  
                    puts "Total number of stops for the trip is: ",allstop 
                end
            end
        end
    end

            

end


lines() 

