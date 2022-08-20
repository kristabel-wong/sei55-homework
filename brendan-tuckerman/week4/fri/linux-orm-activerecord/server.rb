require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry' #for debugging
require 'active_record' #orm


#### AR SEtup #####

# establish the connection
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3', #DB type
    database: 'database.db' #DB location

)

# Log the SQL running under the hood
ActiveRecord::Base.logger = Logger.new STDOUT

# close the connection after every  request

after do
    ActiveRecord::Base.connection.close
end

####### END AR SETUP #########

class Distro < ActiveRecord::Base #this assumes the existence of a lower case distros.sql (DB)
    belongs_to :family #singular

end

class Family < ActiveRecord::Base #this assumes the existence of lower case families.sql. ActiveRecord accounts for iregular plurals.
    has_many :distros

end

# binding.pry #debugger


#### LEGACY #####
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



#### DISTROS ####
####  CRUD   ####



#Create

#1. Blank form
#the location of the form to add new distor entries
get '/distros/new' do
    
    erb :new
end # get distros/new


# 2. Form Submit
post '/distros' do
    #this actually enters the details of the form in the DB
    

    Distro.create(
        name: params[:name],
        family_id: params[:family_id],
        latest_version: params[:latest_version],
        release_date: params[:release_date],
        is_current: params[:is_current],
        website: params[:website],
        logo_url: params[:logo_url],
        screenshot_url: params[:screenshot_url],
        description: params[:description]
    )


    redirect '/distros'


end #end post /distros

#=== READ ===#

# 1. Index (all rows)
#i.e a list of everything in the DB
get '/distros' do
    #this page shows us all of the results from the db
    @results = Distro.all
    erb :index
end

# 2. Index (individual rows)
get '/distros/:id' do

    #this page shows individual records and can also be used to access the edit and delete functions
    @distro= Distro.find params[:id]

    erb :show
end #end get /distros/:id


#Update

# 1. Prefilled form
get '/distros/:id/edit' do

    #select the entry to edit
    @distro= Distro.find params[:id]

    erb :edit
end


# 2 . Form Submit
#actually makes the edts from the form submitted
post '/distros/:id' do
    distro = Distro.find params[:id]
    
    distro.update( 
        name: params[:name],
        family_id: params[:family_id],
        latest_version: params[:latest_version],
        release_date: params[:release_date],
        is_current: params[:is_current],
        website: params[:website],
        logo_url: params[:logo_url],
        screenshot_url: params[:screenshot_url],
        description: params[:description]
    )


    redirect "/distros/#{params[:id]}"

end #post distros/:id (edit)

#Delete
get '/distros/:id/delete' do
    
   Distro.destroy params[:id]

    redirect "/distros"

end #end delete


# End CRUD for Distros

#### FAMILIES ####
#### CRUD     ####

## Create

# 1. Get form


# 2. Post form


## Read

# 1. Get all results
get '/families' do
    
    @results = Family.all
    erb :fam_index

end #end  get /families

# 2. Get single result
get '/families/:id'  do
    
    @family = Family.find params[:id]
    erb :fam_show

end # end get/families/:id

## Update

# 1. Get prepopulated form


# 2. Post (update) changes

## Delete



#### End Family CRUD ####

