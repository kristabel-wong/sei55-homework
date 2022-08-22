# HOMEWORK: replicate the Stonks Lookup site, but for Movie Search
# This means:

# A new Sinatra webserver in a new folder, which also uses httparty
# A route which displays a blank form where the user can enter a movie search term; which submits to...
# A route which uses the submitted search term with HTTParty to search api.themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li> for a list) - at least the title, maybe the year and overview/plot text too
# Why not try to show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image from the incomplete thumbnail filename given to you in the search result data; STFW, you're not the first person to attempt this)
# BONUS: if you're feeling very brave, make each search result movie title/image into clickable a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to api.themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the API URL to use to look up a movie's details when you already have its ID from a previous search), and show these details in a new template (I did say if you were feeling brave) - now you have a way to click through from search results to see the detailed movie info for one result 

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

#page to host the search function
get '/search' do 
    erb :search
end

#page to display the results
get '/search/results' do


    @search_term = params[:movie_search]
    all_search_results = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=71e0672b3f5e675ea66bbec878ff0e84&query=' + @search_term 

    total_pages = all_search_results["total_pages"] #integer of totla page numbers

    
    # #this should get all pages
    # (total_pages ).times do | page|
    #     all_search_results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=71e0672b3f5e675ea66bbec878ff0e84&query=#{@search_term}&page=#{page.to_s}"
    # end

    #w here is width
    @base_image_url = "https://image.tmdb.org/t/p/w200/"

    #TODO: will need to do the following for eahc page of results

    @movie_details = all_search_results["results"]

    ##create an array to store the results, title, score(and later other details)
    @worst_list = []

    #iterate over the results and push them as hashe to the wordlist. You can add any other details to this array
    @movie_details.each do |film| 
        film_hash = Hash.new
        film_hash[:title] = film["title"]
        film_hash[:score]  = film["vote_average"]  
        film_hash[:overview] = film["overview"]
        film_hash[:poster_path] = film["poster_path"]
        @worst_list << film_hash
    end 

    #sort the list of hashes 
    @sorted_list = @worst_list.sort_by {|hsh| hsh[:score]}


    erb :results

end