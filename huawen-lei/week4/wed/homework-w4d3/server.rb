require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

# data = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien'


get '/' do
    erb :home
end # get /


get '/lookup' do
    erb :form
end # get /lookup


get '/lookup/results' do
    @movie_list = params[:movie_list]

    movie = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_list}"

    # single movie version
    @movie_title = movie["results"].first["title"]
    @movie_year = movie["results"].first["release_date"]
    @movie_img = "https://image.tmdb.org/t/p/w500" + movie["results"].first["poster_path"]

    # list of movie 
    @movie_array = movie["results"]

    # "Title is #{ @movie_title }, Release date is #{ @movie_year }"

    erb :results

end # get /lookup/results


get '/movie/:id' do

    @id = params[:id]

    data = HTTParty.get "https://api.themoviedb.org/3/search/movie?/#{@id}?api_key=24d863d54c86392e6e1df55b9a328755"

    # @movie_array.each do |item|
    #     if item["id"].to_s == @id
    #         @specific_movie = item
    #     end
    # end

    erb :info
end



