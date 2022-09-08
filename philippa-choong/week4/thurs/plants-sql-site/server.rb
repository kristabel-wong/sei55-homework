require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#function to connect to SQL DB
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


#Create -----------------------------------
#1. Create form 
get '/plants/new' do
    erb :new
end

#2. form action submits here
post '/plants' do

    insert_sql = "
        INSERT INTO plants (name, native_area, perennial, sun_exposure, mature_size, toxicity, image_url)
        VALUES (
            '#{params[:name]}',
            '#{params[:native_area]}',
            #{params[:perennial]},
            '#{params[:sun_exposure]}',
            #{params[:mature_size]},
            '#{params[:toxicity]}',
            '#{params[:image_url]}'
        );
    "
    db_query insert_sql

    redirect '/plants'
end


#Read -----------------------------------
#1. Index (all rows in table)
get '/plants' do
    @results = db_query 'SELECT * FROM plants' #as per SQL format

    erb :index
end


#2. Show/details (one row by ID)
get '/plants/:id' do 
    "plant ID: #{params[:id]}"

    @plant = db_query "SELECT * FROM plants WHERE id = #{params[:id]}"
    @plant = @plant.first #skip typing array[0]. so can directly locate stuff from DB

    erb :show
end


#Update ------------------------------
#1. pre-filled form using the item ID
get '/plants/:id/edit' do

    #grab this format from Read section - show individual ID details so that  this particular ID details can be updated here
    @plant = db_query "SELECT * FROM plants WHERE id = #{params[:id]}"
    @plant = @plant.first #skip typing array[0]. so can directly locate stuff from DB

    erb :edit

end

#2. Form submit, perform DB update, redirect
    # get from create form section - where form action submits. alter it so form can be updated
post '/plants/:id' do

     update_sql = "
        UPDATE plants SET
            name= '#{params[:name]}',
            native_area = '#{params[:native_area]}',
            perennial = #{params[:perennial]},
            sun_exposure = '#{params[:sun_exposure]}',
            mature_size = #{params[:mature_size]},
            toxicity = '#{params[:toxicity]}',
            image_url = '#{params[:image_url]}'
        WHERE id = #{params[:id]};
    "
    db_query update_sql

    redirect "/plants/#{params[:id]}" 

end

#Delete -------------------------------

get '/plants/:id/delete' do
    db_query "DELETE FROM plants WHERE id = #{params[:id]};"

    redirect '/plants'

end