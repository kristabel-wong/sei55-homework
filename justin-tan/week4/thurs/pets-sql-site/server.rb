require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def db_query(sql)

    puts "=================================\n\n"
    puts sql
    puts "\n=================================\n\n"

    # connect to our SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results

end

# binding.pry #pause in pry

#home / root route
get '/' do

    erb :home
end

#CRUD ROUTES

#Create

# 1. Blank form (new)

get '/pets/new' do
    erb :new
end

# 2. Form action submits here (create)

post '/pets' do
    
    insert_sql = "
        INSERT INTO pets ( name, species, description,roundness, alive, age, image_url )
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

    #after processing this form submit and inserting the details
    #into the DB, we don't want this route to show its own tempalte
    #-what if someone tries to reload that template? it would cause
    #the INSERT to be duplicated
    #It's safer and better practice to redirect to a completely different route

    redirect '/pets' #go to the index - there we will see the new item

end # post /pets (form submit)

#Read

#1. Index (all rows in table)

get '/pets' do


    @results = db_query 'SELECT * FROM pets;'

    erb :index
end # get /pets index

#2. Show/details (one row by ID)

get '/pets/:id' do


    @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"

    @pet = @pet.first

    erb :show
end #get /pets/:id (show)


#update

# 1. Pre-filled form using the item ID
get '/pets/:id/edit' do

    @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"

    @pet = @pet.first
    

    erb :edit
end #get /pets/:id/edit


# 2. Form submit, perform DB update, redirect
post '/pets/:id' do
    
    update_sql = "
        UPDATE pets SET 
            name = '#{ params[:name] }',
            species = '#{ params[:species] }',
            description = '#{ params[:description] }',
            roundness = #{ params[:roundness] },
            alive = #{ params[:alive] },
            age = #{ params[:age] },
            image_url = '#{ params[:image_url] }'
        WHERE id = #{ params[:id] };
    "

    db_query update_sql

    redirect "/pets/#{ params[:id] }"

end


#delete

get '/pets/:id/delete' do

    db_query "DELETE FROM pets WHERE id = #{ params[:id] };"

    redirect '/pets' #back to index

end