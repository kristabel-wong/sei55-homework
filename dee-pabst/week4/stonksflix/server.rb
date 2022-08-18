require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

#allow the user to enter a search term
get '/search' do
    erb :search_form
end # get '/search'

# present search results
get '/search/results' do
    @search_term = params[:search_term]
    # request the movie site for search terms
    @result = HTTParty.get"https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ @search_term }"
    erb :search_results
end