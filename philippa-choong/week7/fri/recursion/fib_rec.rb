
# HOMEWORK CHALLENGE: 'memoize' the fib_rec calls - 
# - Create a global hash whose keys are the values the
# function is seeing ,
# i.e each 'n' and the value
# of each key is the return value, i.e. the fibonacci
# number at position in
# - Whenever the function runs, first check the hash to see
# if the argument 'n' is already defined as a key of hash; 
#       - if it is already a key, then immediately return
#           from the function using the value of that key
#           (in another words, skip the recursive steps)
#       - if it's not already a key, then you have to do the 
#           recursive calls, but STORE THE RESULT in the hash
#           before you returnn it from the function.. so it can 
#           be used next time the function sees that value of 'n'
#           to calculate


$fibo = {}

def fib_rec( n )
    n_sym = n.to_s.to_sym # convert integer to symbol as key in ruby is always symbol
    # define our base case:
    if n < 2
        $fibo[n_sym] = 1
    elsif 
        $fibo.key?(n_sym)
        return $fibo[n_sym]
    else
        $fibo[n_sym] = fib_rec(n - 1) + fib_rec(n - 2) # add the previous two numbers

    end

end

puts fib_rec( ARGV.first.to_i)
p $fibo


