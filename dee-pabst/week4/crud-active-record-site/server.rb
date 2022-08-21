# Dependencies
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# set up connection to db
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

# log out records to STDOUT
ActiveRecord::Base.logger = Logger.new STDOUT

# close connection after request
after do
    ActiveRecord::Base.connection.close
end

class Hit < ActiveRecord::Base
    belongs_to :artist # ActiveRecords convention! SINGULAR form
end

class Artist < ActiveRecord::Base
    has_many :hits  # ActiveRecords convention! PLURAL form
                    # AR handles the lookup in owners table to connect pets to owners
end

# binding.pry #debugger

# Home
get '/' do
    erb :home
end # get '/'

# CREATE
# 1. GET input form
get '/hits/new' do
    erb :new
end # get '/hits/new'

# 2. PUT submit form
post '/hits' do

    # create a hit in the db
    Hit.create(
        title:                  params[:title],
        album:                  params[:album],
        genre:                  params[:genre],
        weeks_at_number_one:    params[:weeks_at_number_one],
        year_released:          params[:year_released],
        spotify_streams:        params[:spotify_streams],
        thumbnail:              params[:thumbnail]
    )

    # go to the hits page to confirm the new entry
    redirect '/hits' 
    
end # post '/hits'

# READ
# 1. GET all hits index
get '/hits' do
    
    # get all the hits from the db
    @hits = Hit.all
    
    # load the results into the index page
    erb :index
end # get '/hits'

# 2. GET single hit view show
get '/hits/:id' do
    
    # locate the requested hit from the db
    @hit = Hit.find params[:id]
    
    # load the hit details into the hit's show page
    erb :show
end # get '/hits/:id'

# UPDATE
# 1. GET prefilled form
get '/hits/:id/edit' do

    # find the requested hit in the db
    @hit = Hit.find params[:id]
    
    # load the hits known details into the edit form
    erb :edit    
end # get '/hits/:id/edit'

# 2. POST updated form
post '/hits/:id/edit' do

    # find the hit in the db
    hit = Hit.find params[:id]
    
    # update the fields sent by the form
    hit.update(
        title:                  params[:title],
        album:                  params[:album],
        genre:                  params[:genre],
        weeks_at_number_one:    params[:weeks_at_number_one],
        year_released:          params[:year_released],
        spotify_streams:        params[:spotify_streams],
        thumbnail:              params[:thumbnail],
        artist_id:              params[:artist_id]
    )
    
    # redirect the page to show the updated info to the user
    redirect "/hits/#{params[:id]}"
    
end # post '/hits/:id'

# DELETE
# 1. GET to delete route
get '/hits/:id/delete' do
    hit = Hit.find params[:id]
    hit.destroy
    redirect '/hits'
end # get '/hits/:id/delete'


### ROUTES FOR ARTISTS ###

# CREATE
# GET empty form (new)
get '/artists/new' do
    erb :'artists/new'
end # get '/artist/new'

# POST form submit (redirect to index)
post '/artists' do
    # create new artist in the db
    Artist.create(
        name: params[:name],
        website: params[:website],
        image_url: params[:image_url]
    )
    # redirect to the artists page to verify creation
    redirect '/artists'
end # post '/artists'

# READ
# GET all artists(index)
get '/artists' do
    @artists = Artist.all
    erb :'artists/index'
end # get '/artists'

# GET one artist (show)
get '/artists/:id' do
    @artist = Artist.find params[:id]
    erb :'artists/show'
end # get '/artists/:id'

# UPDATE
# GET prefilled form for one artist (edit)
get '/artists/:id/edit' do
    # locate the artist in the db
    @artist = Artist.find params[:id]
    erb :'artists/edit'
end # get '/artists/:id/edit'

# POST form submit to single artist (redirect to show)
post "/artists/:id/edit" do
    # find the artist to update in the db
    artist = Artist.find params[:id]

    artist.update(
        name: params[:name],
        website: params[:website],
        image_url: params[:image_url]
    )

    redirect "/artists/#{params[:id]}"

end # post "/artists/:id"

# DELETE
# GET make delete call on db (redirect to index)
get '/artists/:id/delete' do
    artist = Artist.find params[:id]
    artist.destroy
    redirect '/artists'
end # get '/artists/:id/delete'