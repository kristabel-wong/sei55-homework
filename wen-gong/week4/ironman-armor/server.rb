

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# binding.pry
def db_query( sql )

    puts "==========\n\n"
    puts sql
    puts "\n=======\n\n"

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results

end # db_query()
#Connect to our SQL database

#db.execute 'SQL GOES HERE'

# binding.pry  # pause in pry

#Home/root route
get '/' do
    erb :home
end

#1. Blank form (new)
get '/armors/new' do
    erb :new
end # get /armors/new (form)

post '/armors' do
    
    insert_sql = "
       INSERT INTO armors ( name, users, appearances, weapons, special_features, image_url)
       VALUES (
          '#{ params[:name] }',
          '#{ params[:users] }',
          '#{ params[:appearances] }',
          '#{ params[:weapons] }',
          '#{ params[:special_features] }',
          '#{ params[:image_url] }'
       );
    "
       db_query insert_sql

      

       # After processing this form submit and inserting the details
       #

       redirect '/armors'

end

get '/armors' do

    # db = SQLite3::Database.new 'database.db'
    # db.results_as_hash = true
    # @results = db.execute 'SELECT * FROM armors;'
    # db.close

    @results = db_query 'SELECT * FROM armors;'

    erb :index
end

get '/armors/:id' do
    # "Pet ID: #{ params[:id] }"
    # db = SQLite3::Database.new 'database.db'
    # db.results_as_hash = true
    # @armor = db.execute "SELECT * FROM armors WHERE id = #{ params[:id] };"
    # @armor = @armor.first  # saves us doing @armor[0]
    # db.close

    @armor = db_query "SELECT * FROM armors WHERE id = #{ params[:id] };"
    @armor = @armor.first 

    erb :show
    
end

#Update

#1. Pre-filled form using the item ID
get '/armors/:id/edit' do
     @armor = db_query "SELECT * FROM armors WHERE id = #{ params[:id] };"
    @armor = @armor.first 
    erb :edit

end 

post '/armors/:id' do

    update_sql = "
       UPDATE armors SET
        name = '#{ params[:name] }',
        users =  '#{ params[:users] }',
        appearances = '#{ params[:appearances] }',
        weapons = '#{ params[:weapons] }',
        special_features = '#{ params[:special_features] }',
        image_url =  '#{ params[:image_url] }'
        WHERE id = #{ params[:id] };
       
    "
       db_query update_sql

    redirect "/armors/#{ params[:id] }"
end


get '/armors/:id/delete' do

    db_query "DELETE FROM armors WHERE id = #{ params[:id] };"

    redirect '/armors' # back to index


end