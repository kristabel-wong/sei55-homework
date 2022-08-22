
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# connect to SQL database
db = SQLite3::Database.new 'database.db'
db.results_as_hash = true
# db.execute "SELECT * FROM movie;""

def db_query(sql)

    puts "===========================\n\n"
    puts sql
    puts "===========================\n\n" #for debugging

    # connect to SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results

end # db_query()


# Home route
get '/' do 
    erb :home
end # get /


# Create

get '/movie/new' do
    erb :new
end # get /movie/new

post '/movie' do
    
    insert_sql = "
    INSERT INTO movie (name, release_year, director, starring, country, running_time, watch_or_not, image_url)
    VALUES(
        '#{params[:name]}',
        #{params[:release_year]},
        '#{params[:director]}',
        '#{params[:starring]}',
        '#{params[:country]}',
        #{params[:running_time]},
        #{params[:watch_or_not]},
        '#{params[:image_url]}'
    );
    "
    db_query insert_sql

    redirect '/movie' #back to index

end #post /movie


# Read
get '/movie' do

    @results = db_query "SELECT * FROM movie;"

    erb :index
end # get /movie


get '/movie/:id' do

    @movie = db_query "SELECT * FROM movie WHERE id = #{ params[:id] };"

    @movie = @movie.first

    erb :show

end # get /movie/:id


# Update

get '/movie/:id/edit' do

    @movie = db_query "SELECT * FROM movie WHERE id = #{ params[:id] };"
    @movie = @movie.first

    erb :edit

end # get /movie/:id/edit

post '/movie/:id' do

    update_sql = "
    UPDATE movie SET
        name = '#{params[:name]}',
        release_year = #{params[:release_year]},
        director = '#{params[:director]}',
        starring = '#{params[:starring]}',
        country = '#{params[:country]}',
        running_time = #{params[:running_time]},
        watch_or_not = #{params[:watch_or_not]},
        image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
    "
    db_query update_sql

    redirect "/movie/#{params[:id]}" #back to index


end # post /movie/:id


# Delete

get '/movie/:id/delete' do

    db_query "DELETE FROM movie WHERE id = #{params[:id]}"

    redirect '/movie'


end # get /movie/:id/delete








