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

    @movie_title = params[:movie_title]

    # The below we get the raw data from the URL backend
    list_result = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_title}"

   

    # The below we break the link results to get an array of the relevant data. There is much data within Link_results within objects which needed to break it down. 
    @title=list_result["results"]


    # The below was used to filter through the data although it was not necessary, we can do it directly in the results tab. 
     # empty = []
    # results = list_result["results"]
    # results.each do |el|
    #     @title = empty.push(el["title"])
    # end
    
    #need to link movie to above 
    #need to return movie list
    erb :results

end
