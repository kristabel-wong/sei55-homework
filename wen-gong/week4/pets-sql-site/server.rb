

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


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
get '/pets/new' do
    erb :new
end # get /pets/new (form)

post '/pets' do
    
    insert_sql = "
       INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
       VALUES (
          '#{ params[:name] }',
          '#{ params[:species] }',
          '#{ params[:description] }',
          #{ params[:roundness] },
          #{ params[:alive] },
          #{ params[:age] },
          '#{ params[:image_url] }'
       );
    "
       db_query insert_sql

      

       # After processing this form submit and inserting the details
       #

       redirect '/pets'

end

get '/pets' do

    # db = SQLite3::Database.new 'database.db'
    # db.results_as_hash = true
    # @results = db.execute 'SELECT * FROM pets;'
    # db.close

    @results = db_query 'SELECT * FROM pets;'

    erb :index
end

get '/pets/:id' do
    # "Pet ID: #{ params[:id] }"
    # db = SQLite3::Database.new 'database.db'
    # db.results_as_hash = true
    # @pet = db.execute "SELECT * FROM pets WHERE id = #{ params[:id] };"
    # @pet = @pet.first  # saves us doing @pet[0]
    # db.close

    @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"
    @pet = @pet.first 

    erb :show
    
end

#Update

#1. Pre-filled form using the item ID
get '/pets/:id/edit' do
     @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"
    @pet = @pet.first 
    erb :edit

end 

post '/pets/:id' do

    update_sql = "
       UPDATE pets SET
        name = '#{ params[:name] }',
        species =  '#{ params[:species] }',
        description =   '#{ params[:description] }',
        roundness =  #{ params[:roundness] },
        alive =  #{ params[:alive] },
        age =  #{ params[:age] },
        image_url =  '#{ params[:image_url] }'
        WHERE id = #{ params[:id] };
       
    "
       db_query update_sql

    redirect "/pets/#{ params[:id] }"
end


get '/pets/:id/delete' do

    db_query "DELETE FROM pets WHERE id = #{ params[:id] };"

    redirect '/pets' # back to index


end