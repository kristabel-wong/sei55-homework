require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

require 'active_record'

#set up the connection to the DB 
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)


ActiveRecord::Base.logger = Logger.new STDOUT

after do 
    ActiveRecord::Base.connection.close
end


class Plant < ActiveRecord::Base
    belongs_to :buyer
end

class Buyer < ActiveRecord::Base    
    has_many :plants
end


#create function to connect to sql database
def db_query(sql)

    # this is to help us with debugging
    puts "================================\n\n"
    puts sql
    puts "=================================\n\n"

    # Connect to our SQL database
    # db is the data connection handle that is in a variable 
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true 
    results = db.execute sql
    db.close # this is to close the db connection 

    results #implicit return (last row it's always return value)

end



#home/root route
get '/' do 
    erb :home
end

#CRUD for PLANT__________________________
#Create -----------------------------------
#1. Create form 
get '/plants/new' do
    erb :new
end

#2. form action submits here
post '/plants' do

    Plant.create(
        name: params[:name],
        native_area: params[:native_area],
        perennial: params[:perennial],
        sun_exposure: params[:sun_exposure],
        mature_size: params[:mature_size],
        toxicity: params[:toxicity],
        image_url: params[:image_url],
        buyer_id: params[:buyer_id]
    )

    redirect '/plants'
end


#Read -----------------------------------
#1. Index (all rows in table)
get '/plants' do
    @results = Plant.all

    erb :index
end


#2. Show/details (one row by ID)
get '/plants/:id' do 
    
    @plant = Plant.find params[:id]

    erb :show
end


#Update ------------------------------
#1. pre-filled form using the item ID
get '/plants/:id/edit' do

    @plant = Plant.find params[:id]

    erb :edit

end

#2. Form submit, perform DB update, redirect
    # get from create form section - where form action submits. alter it so form can be updated
post '/plants/:id' do

    plant = Plant.find params[:id]
    plant.update(
        name: params[:name],
        native_area: params[:native_area],
        perennial: params[:perennial],
        sun_exposure: params[:sun_exposure],
        mature_size: params[:mature_size],
        toxicity: params[:toxicity],
        image_url: params[:image_url],
        buyer_id: params[:buyer_id]
    )
     

    redirect "/plants/#{params[:id]}" 

end

#Delete -------------------------------

get '/plants/:id/delete' do
    
    Plant.destroy params[:id]

    redirect '/plants'

end


# CRUD for BUYERS____________________
# Create
# 1. Blank form 
get '/buyers/new' do
    erb :buyers_new
end

# 2. Submit form 
post '/buyers' do

    Buyer.create(
        name: params[:name],
        email: params[:email]
    )

    redirect '/buyers'
end

# Read
# 1. Index of all buyers
get '/buyers' do

    @buyers = Buyer.all
    erb :buyers_index

end

# 2. show page/details for a buyer by ID

get '/buyers/:id' do
    @buyer = Buyer.find params[:id]
    erb :buyers_show

end


# Update
# 1. pre-filled form using the item ID
get '/buyers/:id/edit' do

    @buyer = Buyer.find params[:id]
    
    erb :buyers_edit 

end

# 2. Form submit, perfom DB update, redirect
post '/buyers/:id' do

    buyer = Buyer.find params[:id]
    buyer.update(
        name: params[:name],
        email: params[:email]
    )

    redirect "/buyers/#{params[:id]}"
end


# Destroy
get '/buyers/:id/delete' do

    Buyer.destroy params[:id]
    redirect '/buyers'

end

