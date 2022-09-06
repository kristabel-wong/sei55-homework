require 'httparty'

response = HTTParty.get 'http://www.numbersapi.com/42?json'
#The program pauses here until the response is recieve. Once it is recieved, the nbex line of code can run
#This is a synchronous or blocking request

puts response