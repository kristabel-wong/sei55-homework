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

require 'colorize' #for menu options
require 'pry' #for debugging

        ####### Support Method ########

def is_start_before arg1, arg2, arr #determines whether train should go forward or backwards
    arr.index(arg1) < arr.index(arg2)
end #end is_is_start_before

        ####### Trip Methods #########

def single_line start, start_line, finish  #returns an array of stations on a single line

    first_leg = []    #establish array to be returned
    if is_start_before(start, finish, start_line) #"Forwards"
        first_leg = start_line[start_line.index(start)..start_line.index(finish)]
    else
        reverse_direction = start_line.reverse! #"Reverse"
        first_leg = reverse_direction[start_line.index(start)..start_line.index(finish)]
    end
    first_leg
end #end single_line


def multi_line start, start_line, finish, end_line, name_of_start_line, name_of_end_line
    #calls single line twice and announces full journey
    first_leg = single_line(start, start_line, "Union Square")
    second_leg =  single_line("Union Square", end_line, finish)
    announce first_leg, second_leg, name_of_start_line, name_of_end_line 

end #end multi_lines

def plan_trip start, finish, start_line, end_line = nil 
    
    #grab the names of the lines for the announce method
    name_of_start_line = start_line
    name_of_end_line = end_line

    #declare the lines 
    mta_lines = { #hash that stores the lines
        n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        l: ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"],

    } #end mta_lines
 
    #create arrays to be passed in from hash
    start_line = mta_lines[start_line]
    end_line = mta_lines[end_line]

    
    #determine whether the trip is single, multi, or already done
    if start_line == end_line || start == "Union Square" && finish == "Union Square" #single line trips or if you are already at US
        if start == finish
            puts "You are already at your destination"
        else
            single_journey = single_line(start, start_line, finish) 
            announce single_journey, nil, name_of_start_line, nil #need to announce seperately on single journey or will be duplicated in multi line trips
        end
    else #multiline trips
        multi_line start, start_line, finish, end_line, name_of_start_line, name_of_end_line  #announce built in
    end #end if

end #end_plan_trip

# puts / prints the journey
def announce first_leg, second_leg, start_line_name, end_line_name #takes one or 2 arrays as well as the lines (for colors)

    number_of_stations = first_leg.length #keep track of #of stations travelled
    puts "\nStarting at #{first_leg.first} on the #{start_line_name.upcase} line, travel through the following stations:"
    stations = first_leg[1..-2] # get all stations except first and last
    stations.each {|el| puts el} #print them out

    if second_leg
        number_of_stations += (second_leg.length) -1 #Avoids duplication of Union
        puts "Transfer at Union Station to the #{end_line_name.upcase} line before travelling on the following stations:"
        stations = second_leg[1..-2]
        stations.each {|el| puts el}
        puts "Arrive at #{second_leg.last}"
        puts "You travelled #{number_of_stations} stations."
    
    else #the end fo single leg trips
        puts "Arrive at #{first_leg.last}"
        puts "You travelled #{number_of_stations} stations."
    end #end if
end #end announce

##testing
#plan_trip("8th", "1st", :l, :l)
#plan_trip("1st", "Grand Central", :l, "6")


##########  Menu Methods   #############

###Display the lines for the menu###
def display_n  #n line selection menu
    puts"\n Choose which station:"
    puts"\n1. Times Square \n2. 34th\n3. 28th\n4. 23rd\n5. Union Square\n6. 8th".red
    print "\nPlease enter a selection (1 -6):"
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
        display_n
    end #end case

end #end displayN


def display_l # l: ["8th", "6th", "Union Square", "3rd", "1st"]

    puts"\n Choose which station:"
    puts"\n1. 8th \n2. 6th\n3. Union Square\n4. 3rd\n5. 1st".blue
    print "\nPlease enter a selection (1 -5):"
    choice = gets.chomp.to_i

    case choice
    when 1 then "8th"
    when 2 then "6th"
    when 3 then "Union Square"
    when 4 then "3rd"
    when 5 then "1st"
    else
        puts "Please enter a valid selection."
        display_l
    end #end case

end #end displayN


def display_6 # "6"=> ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"]

    puts"\n Choose which station:"
    puts"\n1. Grand Central \n2. 33rd\n3. 28th\n4. 23rd\n5. Union Square\n6. Astor Place".green
    print "\nPlease enter a selection (1 -6):"
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
        display_6
    end #end case

end #end displayN

def menu #the main menu for choosing a journey

    user_choice  = nil #for use in the menu options

    #these will be passed into planjourney below
    start = nil 
    finish = nil 
    start_line = nil 
    end_line = nil
    
    while user_choice != 9
        ###PRINT MTA BANNER###
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

        ####Choose 1st line####
        puts"\nWhich line are you starting from?\n"
        puts "1. N".red
        puts "2. L".blue
        puts "3. 6".green
        print "\nSelect 1/2/3 or 9 to exit."
        user_choice = gets.chomp.to_i

        
        if user_choice == 1
            start_line = :n
            start = display_n
        elsif user_choice == 2
            start_line = :l
            start = display_l
        elsif user_choice == 3
            start_line = "6"
            start = display_6
        elsif user_choice == 9
            break
        else
            puts "Please enter a valid selection."
        end #end firstleg if

        ####Choose Second Line####
        puts"\n\nWhich line are you heading to?"
        puts "1. N".red
        puts "2. L".blue
        puts "3. 6".green
        print "\nSelect 1/2/3 or '9' to exit."
        user_choice = gets.chomp.to_i

       
        if user_choice == 1
            end_line = :n
            finish = display_n
        elsif user_choice == 2
            end_line = :l
            finish = display_l
        elsif user_choice == 3
            end_line = "6"
            finish = display_6
        elsif user_choice == 9
            break
        else
            puts "Please enter a valid selection."
        end #end firstleg if
    
        plan_trip(start, finish, start_line, end_line) #calls the plantrip method with the choices form the menu

    end #end while
    
end #end menu


####### Initialise ########
menu
