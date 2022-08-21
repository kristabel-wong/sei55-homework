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
    belongs_to :family #singular one to many
    has_many :packages, through: :bridges #PLURAL -many to many #through is the joining table 

end

class Family < ActiveRecord::Base #this assumes the existence of lower case families.sql. ActiveRecord accounts for iregular plurals.
    has_many :distros #PLURAL

end

class Package < ActiveRecord::Base
    has_many :distros#, #through: :bridges #plural - many to many
end

#Joining table for many to many. Stores a list of keys that mathces hich packeges are on which distros
# class Bridge < ActiveRecord::Base
#     belongs_to :distro #foreign key
#     belongs_to :package #foregn key
# end



#### LEGACY #####
#connect to the db
# db = SQLite3::Database.new 'database.db'
# db.results_as_hash = true

# binding.pry #debugger


# ##recreate the function that runs the calls to the database

# def db_query ( sql )
#     #debug lines
#     p "="*10
#     p sql
#     p "="*10

#     db = SQLite3::Database.new 'database.db'
#     db.results_as_hash = true

#     results = db.execute sql

#     db.close
#     results

# end #end db query


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

    ##Would need a bridge create as well? 


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
    @bridges = Bridge.where distro_id: params[:id] #this should return an ARRAY containing the distro_id and the package_id

    erb :show
end #end get /distros/:id


#Update

# 1. Prefilled form
get '/distros/:id/edit' do

    #select the entry to edit
    @distro= Distro.find params[:id]
    @packages = Package.all 
    erb :edit
end


# 2 . Form Submit
#actually makes the edts from the form submitted
post '/distros/:id' do
    distro = Distro.find params[:id]
    bridge = Bridge.where distro_id: params[:id] #an array 
    

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
    # bridge.each do |pack|
    #     pack.update(
        
    #         distro_id: params[:id],
    #         package_id: params[:package_id]
            

    #     )
    # end


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
get '/families/new' do
    erb :fam_new
end #end get /families/new

# 2. Post form
post '/families' do
    
    Family.create(

        description: params[:description],
        file_format: params[:file_format],
        package_manager: params[:package_manager],
        release_year: params[:release_year]

    )

    redirect '/families'

end #end post /families (new)

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
get '/families/:id/edit' do
    
    @family = Family.find params[:id]

    erb :fam_edit

end #end get .families/:id/edit

# 2. Post (update) changes

post '/families/:id' do
    
    family = Family.find params[:id]

    family.update(
        description: params[:description],
        file_format: params[:file_format],
        package_manager: params[:package_manager],
        release_year: params[:release_year]
    )

    redirect "/families/#{params[:id]}"
end #families/:id

## Delete
get '/families/:id/delete' do
    
    Family.destroy params[:id]
 
     redirect "/families"
 
 end #end delete


#### End Family CRUD ####

### PACKAGES ####
#### CRUD     ####
###MANY TO MANY EXAMPLE###

## Create

# 1. Get form
get '/packages/new' do
    erb :pack_new
end #end get /packages/new

# 2. Post form
post '/packages' do
    
    Package.create(

        name: params[:name],
        description: params[:description]

    )

    redirect '/packages'

end #end post /packages (new)

## Read

# 1. Get all results
get '/packages' do
    
    @results = Package.all
    erb :pack_index

end #end  get /families

# 2. Get single result
get '/packages/:id'  do
    
    @package = Package.find params[:id]
    erb :pack_show

end # end get/families/:id

## Update

# 1. Get prepopulated form
get '/packages/:id/edit' do
    
    @package = Package.find params[:id]
    @distro = Distro.all

    erb :pack_edit

end #end get .families/:id/edit

# 2. Post (update) changes

post '/packages/:id' do
    
    package = Package.find params[:id]

    package.update(
        name: params[:name],
        description: params[:description]
    )

    

    # Bridge.update(
    #     ## This would have to loop through each choice ##
    #     package: params[:package.distro.id]
    # )


    redirect "/packages/#{params[:id]}"
end #packages/:id

## Delete
get '/packages/:id/delete' do
    
    Package.destroy params[:id]
 
     redirect "/packages"
 
 end #end delete


#### End packages CRUD ####