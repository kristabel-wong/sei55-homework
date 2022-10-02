

# iterative version

def countdown(n=10)

    # define a "base case" - when to STOP looking
    # i.e. loop until n < 0
    while n >= 0
        puts n 

        # Do something in each iteration 
        # that GETS US CLOSER TO THE BASE CASE
        n = n - 1 # n -= 1 , i.e. "decrement n"

        sleep 0.3 # just for the suspense/drama

    end # while

    puts "Blast off "

end #countdown

# ctually run the function
# countdown 10

# recursive version --------------------------------------------------------------

# Let's pretend our language has NO looping structures!
# the language supports:
# - variables (constants are enough!)
# - functions 
# - conditionals

def countdown_rec( n=10)

    # Define a 'base case': a condition under which 
    # this function STOPS calling itself recursively;
    # otherwise, you willhave an infinite loop/regress
    # by default;
    # (actually you won't, you will just 'blow the stack')
    if n < 0
        puts "Blast Off!!"
        # NO MORE RECURSION!
    else
        puts n 

        sleep 0.3
        # Not finishes counting down, so perform the recursive call 
        #
        # BUT : we have to do so in a way that brings us a step closer
        # to reaching the base case and getting out of the recursion
        # (otherwise, infinite loop)

        countdown_rec( n - 1 ) # We never actually say "n = ....."

        puts "Returned (n = #{ n })"
    end


end # countdown_rec

countdown_rec