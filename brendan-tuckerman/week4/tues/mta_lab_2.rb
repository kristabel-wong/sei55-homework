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

require 'colorize'

#######Support Methods########

def find_index_of arg1, arr
    arr.index(arg1) #this is pretty redundant as there is a built in method
end


def is_start_before arg1, arg2, arr
    find_index_of(arg1,arr) < find_index_of(arg2, arr)
end

def single_line start, start_line, finish  #returns an array of stations

    first_leg = []    
    if is_start_before(start, finish, start_line) #"Forwards"
        first_leg = start_line[find_index_of(start, start_line)..find_index_of(finish, start_line)]
    else
        reverse_direction = start_line.reverse! #"Reverse"
        first_leg = reverse_direction[find_index_of(start, start_line)..find_index_of(finish, start_line)]
    end
    first_leg
end #end single_line

def multi_line start, start_line, finish, end_line
    
    first_leg = single_line(start, start_line, "Union Square")
    second_leg =  single_line("Union Square", end_line, finish)
    announce first_leg, second_leg

end #end multi_lines

def plan_trip start, finish, start_line, end_line = nil 
    
    #declare the lines 
    mta_lines = { #hash that stores the lines
        n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        l: ["8th", "6th", "Union Square", "3rd", "1st"],
        "6"=> ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"],

    } #end mta_lines
 
    #create arrays to be passed in from hash
    start_line = mta_lines[start_line]
    end_line = mta_lines[end_line]

    if start_line == end_line  #single line trips
        if start == finish
            puts "You are already at your destination"
        else
            single_journey = single_line(start, start_line, finish) 
            announce single_journey  
        end
    else #multiline trips
        multi_line(start, start_line, finish, end_line)  #announce built in
    end #end if

end #end_plan_trip

# puts / prints the journey
def announce first_leg, second_leg=nil #takes one or 2 arrays 
    number_of_stations = first_leg.length 
    puts "\nStarting at #{first_leg.first}, travel through the following stations:"
    stations = first_leg[1..-2]
    stations.each {|el| puts el}

    if second_leg
        number_of_stations += (second_leg.length) -1 #Avoids duplication of Union
        puts "Then transfer at Union Station before travelling on the following staions:"
        stations = second_leg[1..-2]
        stations.each {|el| puts el}
        puts "Arrive at #{second_leg.last}"
        puts "You travelled #{number_of_stations} stations."
    
    else
        puts "Arrive at #{first_leg.last}"
        puts "You travelled #{number_of_stations} stations."
    end #end if
end #end announce

##testing
#plan_trip("8th", "1st", :l, :l)
#plan_trip("1st", "Grand Central", :l, "6")

##########Menu#############

###Display the lines for the menu###
def displayN 
    puts"\n Choose which station:"
    puts"\n1. Times Square \n2. 34th\n3. 28th\n4. 23rd\n5. Union Square\n6. 8th".red
    print "Please enter a selection (1 -6):"
    choice = gets.chomp.to_i

    case choice
    when 1 then "Times Square"
    when 2 then "34th"
    when 3 then "28th"
    when 4 then "23rd"
    when 5 then "Union Square"
    when 6 then "8th"
    else
        puts "Please enter a valid selection."
        displayN
    end #end case

end #end displayN

# l: ["8th", "6th", "Union Square", "3rd", "1st"]
def displayL 
    puts"\n Choose which station:"
    puts"\n1. 8th \n2. 6th\n3. Union Square\n4. 3rd\n5. 1st".blue
    print "Please enter a selection (1 -5):"
    choice = gets.chomp.to_i

    case choice
    when 1 then "8th"
    when 2 then "6th"
    when 3 then "Union Square"
    when 4 then "3rd"
    when 5 then "1st"
    else
        puts "Please enter a valid selection."
        displayL
    end #end case

end #end displayN

# "6"=> ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"],
def display6 
    puts"\n Choose which station:"
    puts"\n1. Grand Central \n2. 33rd\n3. 28th\n4. 23rd\n5. Union Square\n6. Astor Place".green
    print "Please enter a selection (1 -6):"
    choice = gets.chomp.to_i

    case choice
    when 1 then "Grand Central"
    when 2 then "33rd"
    when 3 then "28th"
    when 4 then "23rd"
    when 5 then "Union Square"
    when 6 then "Astor Place"
    else
        puts "Please enter a valid selection."
        display6
    end #end case

end #end displayN

def menu
    user_choice  = -1
    #these will be passed into plac journey below
    start = nil 
    finish = nil 
    start_line = nil 
    end_line =nil

    
        ###MTA BANNER###
        puts"\n\n"
        puts "*"*50
        2.times do |i|
            print "*"
            print " "*48
            print "*\n"
        end
        puts "*\t\tWELCOME TO THE MTA\t\t *"
        puts "*\t\tJOURNEY PLANNER\t\t\t *"
        print "*"
        print " "*48
        print "*\n"
        
        2.times do |i|
            print "*"
            print " "*48
            print "*\n"
        end
        puts "*"*50

    while user_choice != 9
        puts"\nWhich line are you starting from?\n"
        puts "1. N".red
        puts "2. L".blue
        puts "3. 6".green
        print "\nSelect 1/2/3 or 9 to exit."
        user_choice = gets.chomp.to_i

        ##FirstLeg##
        if user_choice == 1
            start_line = :n
            start = displayN
        elsif user_choice == 2
            start_line = :l
            start = displayL
        elsif user_choice == 3
            start_line = "6"
            start = display6
        elsif user_choice == 9
            break
        else
            puts "Please enter a valid selection."
        end #end firstleg if

        #second leg
        puts"\n\nWhich line are you heading to?"
        puts "1. N".red
        puts "2. L".blue
        puts "3. 6".green
        print "\nSelect 1/2/3 or '9' to exit."
        user_choice = gets.chomp.to_i

        if user_choice == 1
            end_line = :n
            finish = displayN
        elsif user_choice == 2
            end_line = :l
            finish = displayL
        elsif user_choice == 3
            end_line = "6"
            finish = display6
        elsif user_choice == 9
            break
        else
            puts "Please enter a valid selection."
        end #end firstleg if
    
        plan_trip(start, finish, start_line, end_line)

    end #end while
    
end #end menu


#######Initialise########
menu
