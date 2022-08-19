require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry' #for debugging

#connect to the db
db = SQLite3::Database.new 'database.db'
db.results_as_hash = true

# binding.pry #debuigger


##recreate the function that runs the calls to the database

def db_query ( sql )
    #debug lines
    p "="*10
    p sql
    p "="*10

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true

    results = db.execute sql

    db.close
    results

end #end db query


get '/' do
    erb :home
end #end get /



#CRUD


#Create

#1. Blank form
#the location of the form to add new distor entries
get '/distros/new' do
    
    erb :new
end # get distros/new


# 2. Form Submit
post '/distros' do
    #this actually enters the details of the form in the DB
    insert_sql = "
    INSERT INTO linux_distros (name, family, source_model, description, latest, is_rolling, release_date, logo_url, website)
    VALUES ( 
        '#{params[:name]}',
        '#{params[:family]}',
        '#{params[:source_model]}',
        '#{params[:description]}',
        #{params[:latest]},
        #{params[:is_rolling]},
        #{params[:release_date]},
        '#{params[:logo_url]}',
        '#{params[:website]}'

    );
    "
    db_query insert_sql 

    redirect '/distros'


end #end post /distros

# Read

# 1. Index (all rows)
#i.e a list of everything in the DB
get '/distros' do

    #this page shows us all of the reuslts from the db

    @results = db_query( 'SELECT * FROM linux_distros;')
    
    erb :index
end

# 2. Index (individual rows)
get '/distros/:id' do

    #this page shows individual records and can also be used to access the edit and delete functions

    @distro= db_query("SELECT * FROM linux_distros WHERE id = #{params[:id]};")
    @distro = @distro.first #because it is a hash inside an array

    erb :show
end #end get /distros/:id


#Update

# 1. Prefilled form
get '/distros/:id/edit' do

    #select the entry to edit
    @distro= db_query("SELECT * FROM linux_distros WHERE id = #{params[:id]};")
    @distro = @distro.first #because it is a hash inside an array
    

    
    erb :edit
end


# 2 . Form Submit
#actually makes the edts from the form submitted
post '/distros/:id' do
    edit_sql = "
    UPDATE linux_distros SET
        name = '#{params[:name]}',
        family ='#{params[:family]}',
        source_model ='#{params[:source_model]}',
        description = '#{params[:description]}',
        latest = #{params[:latest]},
        is_rolling = #{params[:is_rolling]},
        release_date = #{params[:release_date]},
        logo_url = '#{params[:logo_url]}',
        website = '#{params[:website]}'
    WHERE id = #{params[:id]};
    
"
    db_query (edit_sql)

    redirect "/distros/#{params[:id]}"

end #post distros/:id (edit)

#Delete
get '/distros/:id/delete' do
    
    del_sql = "DELETE FROM linux_distros WHERE id = #{params[:id]};"
    db_query del_sql

    redirect "/distros"

end #end delete
