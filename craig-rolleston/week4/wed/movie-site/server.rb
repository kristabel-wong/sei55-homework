require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

# result = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_title}"



get '/' do
    erb :form
end


get '/results' do

    @movie_title = params[:movie_title]

    result = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_title}"


    @titles = result["results"]


    erb :results
end
