# HOMEWORK: replicate the Stonks Lookup site, but for Movie Search
# This means:
# A new Sinatra webserver in a new folder, which also uses httparty
# A route which displays a blank form where the user can enter a movie search term; which submits to...
# A route which uses the submitted search term with HTTParty to search api.themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li> for a list) - at least the title, maybe the year and overview/plot text too
# Why not try to show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image from the incomplete thumbnail filename given to you in the search result data; STFW, you're not the first person to attempt this)
# BONUS: if you're feeling very brave, make each search result movie title/image into clickable a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to api.themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the API URL to use to look up a movie's details when you already have its ID from a previous search), and show these details in a new template (I did say if you were feeling brave) - now you have a way to click through from search results to see the detailed movie info for one result
# require 'httparty'  # once at top of file
# data = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=YOUR_SPECIFIC_QUERY_TEXT_GOES_HERE'

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end

get '/result' do
    @movie = params[:movie_name]
    data = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie}"
    @data_results = data["results"]
    erb :result
end


get '/movie-details' do
    id = params[:movie_id]
    @detail_data = HTTParty.get "https://api.themoviedb.org/3/movie/#{id}?api_key=24d863d54c86392e6e1df55b9a328755"
    
    erb :detail
end


get '/search_id' do
    erb :search_id
end