class MoviesController < ApplicationController

    def search
        
        
        # raise 'help'
        
    end
    
    def results
        
        @query = params[:movie_search]
    
        data = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@query}"

        @results = data["results"]

    end

end