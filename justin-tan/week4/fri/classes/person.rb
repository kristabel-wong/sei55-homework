require 'pry'

# CLass names are ALWAYS Capitalized in Ruby
class Person

    #This will write the 'name' and 'name=' getter and setter for us
    #ie we opt in to making this data readable
    #and writeable to code outside this
    attr_accessor :name, :location


    # if you define a method called'initialize'
    # in your class, THAT is the method that is 
    # called when you run Person.new

    def initialize(first_name, location)
        puts "initialize() was called"
        puts "Birthing new person called #{first_name}"
        @name = first_name #instance variable! visibile to every method in this class i.e. this variable is visibile throughout this object (instance)
        @location = location
    end


    # "I want this particular internal instance variable to be visible outside the methods of this class"
    # GETTER
    # def name
    #     puts "@name was requested, save to logfile"
    #     @name
    # end

    # SETTER
    # '=' is actually a method in Ruby, like all operators
    # But we can use it like:
    # p1.name = 'newname'
    # def name=(val)
    #     @name = val
    # end 

    # def location
    #     @location
    # end

    def hello
        puts "Hello, I am a person called #{@name}"
        puts "I live in #{@location}"
    end #hello

    def goodbye
        puts "Bye, it was great to meet you!"
    end


end # class Person

 # Inheritance!
    # Let's make a new, more specific type of Person
    # called a Comedian
    # They will inherit all the behavious (methods)
    # and data (instance variable names) of the parent
    # class Person (aka superclass or base class)
    # but they might also add some specific behaviour of their own
    # their own, i.e a "tell_joke" method
    #...AND they might redefine the behavious of the inherited methods like 'hello'
    # Parent is CLOSED for direct MODIFICATION,
    # but OPEN for EXTENSION (subclassing)

# "Comedian inherits from Person"
# "Comedian subclasses Person"
class Comedian < Person

    attr_accessor :netflix_special #create getter and setter for @netflix_special

    # This is called a "class method", in distinction to all our other methods like 'hello' and 'goodbye' which are "instance methods"
    def self.describe_it
        puts "This is a class for creating comedians"
    end


    # Only Comedians can tell Jokes
    def tell_joke
        puts "What's brown and sticky?"

        5. times do
            print '.'
            sleep 0.2
        end

        puts "....a stick! HAHAHA"
    end #tell_joke()

    # We can REDEFINE or "override" the behaviour of a method
    # inherited from the parent
    def hello 

        # We sometimes want to KEEP *Both* the original behavious of an inherited method like 'hello' but ALSO add our custom behavious in the overrided version... how do we "have our cake and eat it too?" WE DONT WANT to just copy paste original method here. not DRY

        # puts "Hello, I am a person called #{@name}"
        # puts "I live in #{ @location }"

        # run the version of the method we are in right now, but as defined in the parent class aka super class
        super

        # Custom Comedian style
        puts "Please watch my NetFlix special, like and subscribe plis"

        # if we are running 'stewart.hello', self is just stewart
        puts "the current object is #{self.class}"

        # Like JS "this.withdraw(500)"

        # You can leave out 'self.' and Ruby will assume it by default
        tell_joke # the hello method can call other methods

    end
    
end 


binding.pry #debugger

