# require 'httparty'

# response = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query'
# # THE PROGRAM PAUSES HERE ("blocks") UNTIL THE RESPONSE
# # IS RECEIVED... and once it's received, the next line of code
# # can run
# # i.e. This is a synchronous/blocking request
# puts response['type']

