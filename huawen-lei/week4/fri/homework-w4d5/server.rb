
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

require 'active_record'

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
    ActiveRecord::Base.connection.close
end

class Movie < ActiveRecord::Base
    belongs_to :genre
end

class Genre < ActiveRecord::Base
    has_many :movies
end


# binding.pry


# Home route
get '/' do 
    erb :home
end # get /


# Create

get '/movie/new' do
    erb :new
end # get /movie/new

post '/movie' do
    
    Movie.create(
        name: params[:name],
        release_year: params[:release_year],
        director: params[:director],
        starring: params[:starring],
        country: params[:country],
        running_time: params[:running_time],
        watch_or_not: params[:watch_or_not],
        image_url: params[:image_url],
        genre_id: params[:genre_id]
    )

    redirect '/movie' #back to index

end #post /movie


# Read
get '/movie' do

    @results = Movie.all

    erb :index
end # get /movie


get '/movie/:id' do

    @movie = Movie.find params[:id]

    erb :show

end # get /movie/:id


# Update

get '/movie/:id/edit' do

    @movie = Movie.find params[:id]

    erb :edit

end # get /movie/:id/edit

post '/movie/:id' do

    movie = Movie.find params[:id]
    movie.update(
        name: params[:name],
        release_year: params[:release_year],
        director: params[:director],
        starring: params[:starring],
        country: params[:country],
        running_time: params[:running_time],
        watch_or_not: params[:watch_or_not],
        image_url: params[:image_url],
        genre_id: params[:genre_id]
    )

    redirect "/movie/#{params[:id]}" #back to index


end # post /movie/:id


# Delete

get '/movie/:id/delete' do

    Movie.destroy params[:id]

    redirect '/movie'


end # get /movie/:id/delete




# CRUD ROUTES for Genres

# Create
get '/genres/new' do
    erb :genres_new
end

post '/genres' do
    Genre.create(name: params[:name])

    redirect '/genres'
end

# Read
get '/genres' do
    @genres = Genre.all
    erb :genres_index
end

get '/genres/:id' do
    @genre_single = Genre.find params[:id]
    erb :genres_show
end


# Update


# Delete
get '/genres/:id/delete' do
    Genre.destroy params[:id]
    redirect '/genres'
end



