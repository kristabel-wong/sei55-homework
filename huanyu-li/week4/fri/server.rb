

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

#set up active_record
ActiveRecord::Base.establish_connection(
    adapter:'sqlite3',
    database:'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
    ActiveRecord::Base.connection.close
end

class Movie < ActiveRecord::Base
    belongs_to :cast
end

class Cast < ActiveRecord::Base
    has_many :movies
end

get '/' do
    erb :home
end

# ============= Movie ======================
# ------Create------
get '/movies/new' do
    erb :movie_add
end

post '/movies' do
    
   Movie.create(
        title:  params[:title],
        release_date:  params[:release_date],
        runtime:  params[:runtime],
        score:  params[:score],
        overview:  params[:overview],
        poster_url:  params[:poster_url],
        cast_id: params[:cast_id]
    )

    if params[:cast_id] == nil || params[:cast_id] == ""
        @title = params[:title]
        erb :cast_ask
   else
    redirect '/movies'
   end
    
    

end

# ------ Read --------
get '/movies' do
    @results = Movie.all
    
    erb :movies_list
end

get '/movies/:id' do
    @movie = Movie.find params[:id]

    erb :movie_detail
end

# -------- Update --------

get '/movies/:id/edit' do
    @movie = Movie.find params[:id]

    erb :movie_edit

end

post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.update(
        title:  params[:title],
        release_date:  params[:release_date],
        runtime:  params[:runtime],
        score:  params[:score],
        overview:  params[:overview],
        poster_url:  params[:poster_url],
        cast_id: params[:cast_id],
    )
    if params[:cast_id] == nil || params[:cast_id] == ""
        @title = params[:title]
        erb :cast_ask
   else
    redirect "/movies/#{params[:id]}"
   end
    
end

# ------ Delete ----------

get '/movies/:id/delete' do
    Movie.destroy params[:id]
    redirect '/movies'
end

# ============= Casts ======================

# ------- Create ---------

get '/casts/new' do
    erb :cast_add
end

post '/casts' do
    Cast.create(
        name: params[:name],
        birthday: params[:birthday],
        place_of_birth: params[:place_of_birth],
        biography: params[:biography],
        photo_url: params[:photo_url],
    )
   
    redirect '/casts'
end

# ------- Read ---------

get '/casts' do

    @results = Cast.all
    erb :cast_list
end

get '/casts/:id' do
    @cast = Cast.find params[:id]
    erb :cast_detail
end

# ------- Update ---------

get '/casts/:id/edit' do
    @cast = Cast.find params[:id]
    erb :cast_edit
end

post '/casts/:id' do
    cast = Cast.find params[:id]
    cast.update(
        name: params[:name],
        birthday: params[:birthday],
        place_of_birth: params[:place_of_birth],
        biography: params[:biography],
        photo_url: params[:photo_url],
    )

    redirect "/casts/#{params[:id]}"
end



# ------- Delete ---------

get '/casts/:id/delete' do
    Cast.destroy params[:id]
    redirect '/casts'
end