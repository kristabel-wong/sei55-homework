require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

# Set up connection to the DB
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3', # What kind of DB is this
    database: 'database.db'
)

#----------------------------------------------------

# Show us all the SQL you save us from writing 
ActiveRecord::Base.logger = Logger.new STDOUT

#----------------------------------------------------

# Close the connection after every request
after do
    ActiveRecord::Base.connection.close 
end

#----------------------------------------------------

# Tell AR(active_record) how to talk to our 'alcohols' table.
# By inheriting from the AR base class, we enable all the AR querying features within our own class, and we also tell AR what the database table is called.
# This is referred to as 'model'. i.e.a way of representing our database table 'alcohols'

class Alcohol < ActiveRecord::Base 
    belongs_to :profile # belongs_to uses a SINGULAR (REMEMBER SINGULAR!) from
                        # AR will expect a 'profile_id' integer field on this table
end

class Profile < ActiveRecord::Base
    has_many :alcohols # has_many uses a PLURAL (MEANS MORE THAN ONE!) form of the other table name
    # AR will go to the alcohols table and look for a profile_id field
    # to find the alcohol belonging to a specific profile
end

# binding.pry

#---------------------------------------------------
# home/ root route

get '/' do

    erb :home
end

#---------------------------------------------------

# CRUD for alcohols
# Create
# 1. Create form (for user input) here
get '/alcohols/new' do
    
    @profiles = Profile.all

    erb :new
end


# 2. Submit form
post '/alcohols' do

    Alcohol.create(
        name: params[:name],
        kind: params[:kind],
        age: params[:age],
        country: params[:country],
        percentage: params[:percentage],
        price: params[:price],
        premium: params[:premium],
        description: params[:description],
        image_url: params[:image_url],
        profile_id: params[:profile_id]
    )

    redirect '/alcohols'

end


# Read
# Read all alcohols (index)
get '/alcohols' do

    @results = Alcohol.all

    erb :index
end

# show alcohol detail
get '/alcohols/:id' do

    @alcohol = Alcohol.find params[:id]

    erb :show
end

# Update
# go to update form
get '/alcohols/:id/edit' do

    @alcohol = Alcohol.find params[:id]

    erb :edit
end

# submit update form
post '/alcohols/:id' do

    alcohol = Alcohol.find params[:id]
    alcohol.update(
        name: params[:name],
        kind: params[:kind],
        age: params[:age],
        country: params[:country],
        percentage: params[:percentage],
        price: params[:price],
        premium: params[:premium],
        description: params[:description],
        image_url: params[:image_url],
        profile_id: params[:profile_id]
    )

    redirect "/alcohols/#{ params[:id] }"

end

# Delete
get '/alcohols/:id/delete' do

    Alcohol.destroy params[:id]

    redirect '/alcohols'

end

#------------------------------------------------
# CRUD for profiles

# create
# create form
get '/profiles/new' do

    erb :profiles_new
end

# submit form
post '/profiles' do

    Profile.create(
        name: params[:name],
        age: params[:age],
        occupation: params[:occupation],
        net_worth: params[:net_worth],
        toxicity: params[:toxicity], #make to a number using .to_i
        interests: params[:interests],
        profile_img: params[:profile_img]
    )

    redirect '/profiles'

end

# read
# index view
get '/profiles' do

    @profiles = Profile.all

    erb :profiles_index
end

# detail view
get '/profiles/:id' do

    @profile = Profile.find params[:id]

    erb :profiles_show
end

# update
# update form
get '/profiles/:id/edit' do

    @profile = Profile.find params[:id]

    erb :profiles_edit
end

# post update
post '/profiles/:id' do

    profile = Profile.find params[:id]
    profile.update(
        name: params[:name],
        age: params[:age],
        occupation: params[:occupation],
        net_worth: params[:net_worth],
        toxicity: params[:toxicity],
        interests: params[:interests],
        profile_img: params[:profile_img]
    )

    redirect "/profiles/#{params[:id]}"

end

# delete
get '/profiles/:id/delete' do
   
    Profile.destroy params[:id]

    redirect '/profiles'

end


#TODO
# CSS
# make delete show a warning before it completely vanishMONEY

