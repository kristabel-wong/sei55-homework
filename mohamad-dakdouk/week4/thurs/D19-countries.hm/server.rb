#Connect to relevant webs/loaders

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


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

    insert_sql = "
    INSERT INTO countries (name, location, language, population, attractions, vist, image_url)
VALUES(
    '#{ params[:name] }',
    '#{ params[:location] }',
    '#{ params[:language] }',
    '#{ params[:population] }',
    '#{ params[:attractions] }',
    '#{ params[:vist] }',
    '#{ params[:image_url] }'    
    );
 "
    db_query insert_sql
    redirect '/countries'
    
end

#Read. 

#Indexes all rows into the table / Presents results of SQL Countries list
#Placed below the new to include new data 
get '/countries' do

    @results = db_query "SELECT * FROM countries;"
    erb :index

end 

#Shows the details of each link based on the ID, uses the loop then grabs 
#IDS this is used on the website
#Presents the information show erb for each - including edits
get '/countries/:id' do

    @country = db_query "SELECT * FROM countries WHERE id = #{ params[:id] };"
    @country = @country.first 
    erb :show

end

#Update
#Prefilled form of each item with the information already presented
#ID changes bacsed on the country selected

get '/countries/:id/edit' do
    @country = db_query "SELECT * FROM countries WHERE id = #{ params[:id] };"
    @country = @country.first   

erb :edit
end


#Form submission on the update button as needed
#On the new page you can create new or edit both link to the new page
post '/countries/:id' do 

    update_sql = "
    UPDATE countries SET
    name = '#{ params[:name] }',
    location = '#{ params[:location] }',
    language = '#{ params[:language] }',
    population = '#{ params[:population] }',
    attractions = '#{ params[:attractions] }',
    vist = '#{ params[:vist] }',
    image_url = '#{ params[:image_url] }' 
WHERE id = #{ params[:id]};
 "
    db_query update_sql
    redirect "/countries/#{params[:id]}"
    
end

#Delete button when selected does not take you to a page

get '/countries/:id/delete' do

    db_query "DELETE FROM countries WHERE id = #{params[:id]};"
    redirect '/countries' 

end