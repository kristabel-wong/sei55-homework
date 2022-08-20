
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def db_query( sql )
    
    puts sql
    #connect to our SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close #close database connection
    
    results #implicit return

end

# home route
get '/' do
    erb :home
end # end get '/'


# CRUD ===============================

# create new blank form
get '/travel/new' do
    erb :new
end #get '/travel/new'

# create new submit form
post '/travel' do
    
    insert_sql = "
        INSERT INTO travel ( location, country, description, rating, visited, image_url )
        VALUES (
            '#{ params[:location] }',
            '#{ params[:country] }',
            '#{ params[:description] }',
            #{ params[:rating] },
            #{ params[:visited] },
            '#{ params[:image_url] }'

        );
    "
    db_query insert_sql 

    redirect '/travel'

end # post '/travel'

# read - index
get '/travel' do
    
    @travel = db_query 'SELECT * FROM travel;'

    erb :index

end # get '/travel'

# read - show
get '/travel/:id' do
    
    @travel = db_query "SELECT * FROM travel WHERE id = #{ params[:id] };"
    @travel = @travel.first
    

    erb :show

end # get '/travel/:id'

# Update - pre-filled form
get '/travel/:id/edit' do
    
    @travel = db_query "SELECT * FROM travel WHERE id = #{ params[:id] };"
    @travel = @travel.first
    
    erb :edit
end # get '/travel/:id/edit' 

# Update - from submit
post '/travel/:id' do
    
    update_sql = "
        UPDATE travel SET

            location = '#{ params[:location] }',
            country = '#{ params[:country] }',
            description = '#{ params[:description] }',
            rating = #{ params[:rating] },
            visited = #{ params[:visited] },
            image_url = '#{ params[:image_url] }'

        WHERE id = #{ params[:id] };    
    "
    db_query update_sql 

    redirect "/travel/#{ params[:id] }"

end # post '/travel/:id'


# Delete
get '/travel/:id/delete' do
    
    db_query "DELETE FROM travel WHERE id = #{ params[:id] }"

    redirect '/travel' 

end # get '/travel/:id/delete'



