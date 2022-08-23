require 'pry'

# Class names are always capitalized in Ruby
class Person
    # This will write the 'name' and 'name='
    attr_accessor :name, :location

    # if you define

    def initialize( first_name, location )
        puts "initialize() was called"
        puts "Birthing new person called #{ first_name }"
        @name = first_name
        @location = location
    end

    # def name
    #     # puts "@name was resquested, save to logfile"
    #     @name
    # end

    # SETTER
    # '=' is actually a method oin Ruby, like all operators
    # But we can use it like:
    #  p1.name = 'newname'
    # def name=( val )
    #     @name = val
    # end

    # def location
    #     @location
    # end

    def hello
        puts "Hello, I am person called #{ @name }."
        puts "I live in #{ @location }."
    end # hello()


    def goodbye
        puts "Bye, it was great to meet you!"
    end # goodbye()


end # class Person


class Comedian < Person

    attr_accessor :netflix_special



    def self.describe_it
        puts "this is a clas for creating comedians"
    end


    def tell_joke
        print " What's brown and sticky?"
    
        puts "......a stick! AHAHAHAHAH"
    end

    def hello
        super

        puts "Please watch my NetFlix special, like and subscribe etc...."
        puts "The current object is: #{ self }"

        self.tell_joke
    end


end



binding.pry # debugger