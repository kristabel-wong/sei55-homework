
require 'httparty'

response = HTTParty.get 'http://www.numbersapi.com/42?json'

puts response['type']