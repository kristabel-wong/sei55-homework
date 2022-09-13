#Connect to relevant webs/loaders

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

# Set up connection to the database
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

# This function not necessary but presents what we save from writing using this connection
ActiveRecord::Base.logger = Logger.new STDOUT

# Close connection after every request
after do
   ActiveRecord::Base.connection.close 
end

# Now we tell how Active record should talk to our tables as parents or subclasses
# express in singular form
class City < ActiveRecord::Base
    belongs_to :country
end

# Connect parent to cities using plural to establish as parent
class Country < ActiveRecord::Base
    has_many :cities
end


#function to access database/SQL
def db_query (sql)

    puts "======================\n\n"
    puts sql
    puts "=======================\n\n"
    
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close
    results 
end


# -------------------------- Create -------------------------
#Create a home page
get '/' do
    erb :home
end

#New form page
get '/countries/new' do
    erb :new
  end  


#Form action when submits - submits the relevant information into the SQL 
#Redirects to countries page (Create)

post '/countries' do 

    Country.create(
     name:       params[:name],
     location:   params[:location],
     language:   params[:language],
     population: params[:population],
     attractions:params[:attractions],
     visit:      params[:visit],
     image_url:  params[:image_url]    
    )
    redirect '/countries'
    
end

#------------------  Read ------------------------------- 

#Indexes all rows into the table / Presents results of SQL Countries list
#Placed below the new to include new data 
get '/countries' do
    @results = Country.all
    erb :index

end 

#Shows the details of each link based on the ID, uses the loop then grabs  #IDS this is used on the website
#Presents the information show erb for each - including edits
get '/countries/:id' do

    @country = Country.find params[:id]
    erb :show

end

#------------------- Update ----------------------------
#Prefilled form of each item with the information already presented
#ID changes bacsed on the country selected

get '/countries/:id/edit' do
    
    @country = Country.find params[:id] 

erb :edit
end


#Form submission on the update button as needed
#On the new page you can create new or edit both link to the new page
post '/countries/:id' do 

country = Country.find params[:id]
country.update(
        name:       params[:name],
        location:   params[:location],
        language:   params[:language],
        population: params[:population],
        attractions:params[:attractions],
        visit:      params[:visit],
        image_url:  params[:image_url]    
       )
    redirect "/countries/#{params[:id]}"
    
end

# ------------------ Delete -------------------------
#Delete button when selected does not take you to a page

get '/countries/:id/delete' do
    Country.destroy params[:id]
    redirect '/countries' 

end

#----------------- Create ------------------------------
#1. Blank form
get '/cities/new' do
    erb :cities_new
end

#2. Form submit

post '/cities' do
    params.to_s
    City.create(
        name:       params[:name],
        location:   params[:location],
        population: params[:population],
        attractions:params[:attractions],
        image_url:  params[:image_url],
        country_id: params[:country_id]   
    )

    redirect '/cities'
end

#----------------- Read -------------------------------
#1. Index of all Cities
get '/cities' do
    @cities = City.all
    erb :cities_index
end

#2. Show details page for one city
get '/cities/:id' do
    @cities = City.find params[:id]
    erb :cities_show
end

#----------------- Update -------------------------------
#1. Prefilled Form to Edit Cities
get '/cities/:id/edit' do

    @cities = City.find params[:id]

    erb :cities_edit
end

#2. Submitting edits

post '/cities/:id' do
    
    cities = City.find params[:id]
    cities.update(
        name:       params[:name],
        location:   params[:location],
        population: params[:population],
        attractions:params[:attractions],
        image_url:  params[:image_url],
        country_id: params[:country_id]    
       )
    redirect "/cities/#{params[:id]}"  
end


# ------------------ Delete -------------------------
#Delete button when selected does not take you to a page

get '/cities/:id/delete' do
    City.destroy params[:id]
    redirect '/cities' 

end