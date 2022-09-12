
# RUBY version 
require 'httparty'

response = HTTParty.get 'http://www.numbersapi.com/42?json'
# THE PROGRAM PAUSES HERE ('blocks') UNTIL THE RESPONSE IS RECEIVED... and once it's received, the next line of code can run
# i.e. This is a synchronous/blocking request

# {
#     "text": "42 is the number of kilometers in a marathon.",
#     "number": 42,
#     "found": true,
#     "type": "trivia"
#    }
# The above is the "raw" data from the numbersapi.com 
# below is asking for some of the data

puts response['type']  