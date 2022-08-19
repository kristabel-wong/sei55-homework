require 'sinatra'
require 'sinatra/reloader'



require 'httparty'



get '/' do
    erb :home
end


get '/lookup' do
    erb :form
end



get '/lookup/results' do

    
    @movie = params[:movie]

     movie_list = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie}"

    @results_array = movie_list["results"]

    erb :results

end