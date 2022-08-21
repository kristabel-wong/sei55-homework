require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


# Helper function to connect to db
def db_query( sql )

    puts "\n><><><><><><><><><>\n"
    puts sql
    puts "\n><><><<><><><><><><\n"
    
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close
    results #last statement is returned
end

# HOME
get '/' do
    erb :home
end

# CRUD
# CREATE
# 1 create empty form GET
get '/cities/new' do
    erb :new
end # get '/cities/new'

# 2 new city form submission route POST
post '/cities' do
    # params['visited']

    insert_sql = "
        INSERT INTO cities ( name, country, population, demonym, area, image_url, visited )
        VALUES (
            '#{params[:name]}',
            '#{params[:country]}',
            #{params[:population]},
            '#{params[:demonym]}',
            #{params[:area]},
            '#{params[:image_url]}',
            #{params[:visited]}
        );
    "

    db_query insert_sql

    redirect '/cities'
    
end # post '/cities'


# READ
# 1 find all cities GET (index)
get '/cities' do
    @result = db_query "SELECT * FROM cities"
    erb :index
end # get '/cities' (index)

# 2 find detail on one city GET
get '/city/:id' do
   result = db_query "SELECT * FROM cities WHERE id = #{params[:id]};"
   @city = result.first
   erb :show
end # get '/city/:id'


# UPDATE
# 1. pre filled form GET
get '/city/:id/edit' do
    @city = db_query "SELECT * FROM cities WHERE id = #{params[:id]};"    
    @city = @city.first
    erb :edit
end # get '/city/:id/edit'

# 2. submit UPDATE to db POST
post '/city/:id' do

    update_sql = "
    UPDATE cities SET
            name = '#{params[:name]}',
            country = '#{params[:country]}',
            population = #{params[:population]},
            demonym = '#{params[:demonym]}',
            area = #{params[:area]},
            image_url = '#{params[:image_url]}',
            visited = '#{params[:visited]}'
        WHERE id = #{params[:id]};
    "

    db_query update_sql

    redirect "/city/#{params[:id]}"
    
end #post 'city/:id'

# DELETE
# direct call to db object to delete city GET
get '/city/:id/delete' do
    db_query "DELETE FROM cities WHERE id = #{params[:id]};"
    redirect '/cities' # back to the index
end # get 'city/:id/delete