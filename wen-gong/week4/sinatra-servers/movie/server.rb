require 'sinatra'
require'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end


get '/lookup' do
    erb :form
end

get '/lookup/results' do

    @movie_title = params[:movie_title]

    result = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_title}"

    @results = result["results"]
    
    erb :results
end


get '/lookup/results/:movie_title' do
     @exact_movie = params[:movie_title]
    
   
    erb :moviesresults
end