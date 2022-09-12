class MoviesController < ApplicationController

    def form
    end

    def lookup
        
        @movie_code = params[:movie_code]

        search_res = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_code}"

        @results = search_res['results']
        
        # raise 'hell'
    end

end
