# HOMEWORK: replicate the Stonks Lookup site, but for Movie Search
# This means:
require 'sinatra'
require 'sinatra/reloader'

require 'httParty'# A new Sinatra webserver in a new folder, which also uses httparty 
$API_KEY = "24d863d54c86392e6e1df55b9a328755"

get "/" do 
    erb :home
end 



# A route which displays a blank form where the user can enter a movie search term; which submits to...
get '/:lookup' do
    erb :form
end



# A route which uses the submitted search term with HTTParty to search api.themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li> for a list) - at least the title, maybe the year and overview/plot text too

# Why not try to show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image from the incomplete thumbnail filename given to you in the search result data; STFW, you're not the first person to attempt this)

get '/lookup/results' do
    
    
    @movie = params[:movie_name]
    
    movie_list = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=#{$API_KEY}&query=#{@movie}"
     
    # @image = 
    @array_movies = movie_list["results"]
    
    erb :results 
end


get '/movie/:movie_id' do
    # /movie/1008260
    # /movie/1007362
    #          ^ = params[:movie_id]

    @id = params[:movie_id]
    @movie = HTTParty.get "https://api.themoviedb.org/3/movie/#{@id}?api_key=#{$API_KEY}"

    erb :movie
end

# BONUS: if you're feeling very brave, make each search result movie title/image into clickable a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to api.themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the API URL to use to look up a movie's details when you already have its ID from a previous search), and show these details in a new template (I did say if you were feeling brave) - now you have a way to click through from search results to see the detailed movie info for one result :tada: