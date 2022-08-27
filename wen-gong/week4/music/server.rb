require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

require 'active_record'

# Set up the connection to the DB
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',  
  database: 'database.db'
)

# Show us all the SQL you're saving us from writing
ActiveRecord::Base.logger = Logger.new STDOUT

# Close the connection after every request
after do
  ActiveRecord::Base.connection.close
end

# Tell AR how to talk to our 'albums' table
# By inheriting from the AR base class, we
# enable all the AR querying features within
# our own class, and we also tell AR what the
# database table is called
# This is referred to as a 'model', i.e. a way 
# of representing our DB table 'albums'
class Album < ActiveRecord::Base
  belongs_to :singer  # belongs_to uses a SINGULAR form of the other table name
                     # AR will expect an 'singer_id' integer field on this table
end

class Singer < ActiveRecord::Base
  has_many :albums     # has_many uses a PLURAL form of the other table name
                     # AR will go to the albums table and look for an singer_id field
                     # to find the albums belonging to a specific owner
end

# binding.pry  # debugger



def db_query( sql )

  puts "=============================\n\n"
  puts sql
  puts "\n=============================\n\n"

  # Connect to our SQL database
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close

  results   # implicit return

end # db_query()



# binding.pry  # pause in pry

# Home/root route
get '/' do
  erb :home
end  

# CRUD ROUTES for Albums

# Create

# 1. Blank form (new)

get '/albums/new' do
  erb :new
end  # get /albums/new  (form)

# 2. Form action submits here (create)

post '/albums' do

  Album.create(
    name:          params[:name],
    singer_id:        params[:singer_id],
    released:      params[:released],
    genre:         params[:genre],
    length:        params[:length],
    track_listing: params[:track_listing],
    image_url:     params[:image_url]
  )




  redirect '/albums'  # go to the index - there we will see the new item

end  # post /albums  (form submit)


# Read

# 1. Index (all rows in table)

get '/albums' do
  # @results = db_query 'SELECT * FROM albums;'
  @results = Album.all
  erb :index
end  # get /albums   (index)

# 2. Show/Details (one row by ID)

#    /albums/3
get '/albums/:id' do
 

  @album = Album.find params[:id]

  erb :show
end  


# Update

# 1. Pre-filled form using the item ID
get '/albums/:id/edit' do
 
  @album = Album.find params[:id]
  erb :edit
end  # get /albums/:id/edit


# 2. Form submit, perform DB update, redirect
post '/albums/:id' do
  

  album = Album.find params[:id]
  album.update(
    name:           params[:name],
    released:       params[:released],
    genre:          params[:genre],
    length:         params[:length],
    track_listing:  params[:track_listing],
    image_url:      params[:image_url],
    singer_id:      params[:singer_id]
  )

  redirect "/albums/#{ params[:id] }"   # redirect to the show page

end  #  post /albums/:id

# Delete

get '/albums/:id/delete' do
  # db_query "DELETE FROM albums WHERE id = #{ params[:id] };"
  Album.destroy params[:id]

  redirect '/albums'   # back to index
end


# CRUD ROUTES for Singers

# Create

# 1. Blank form
get '/singers/new' do
  erb :singers_new
end

# 2. Form submit
post '/singers' do

  Singer.create(
    name:           params[:name],
    released:       params[:released],
    genre:          params[:genre],
    length:         params[:length],
    track_listing:  params[:track_listing],
    image_url:      params[:image_url],
    singer_id:       params[:singer_id]
  )

  redirect '/singers'

end

# Read

# 1. Index of all singers
get '/singers' do
  @singers = Singer.all
  erb :singers_index
end

# 2. Show/details page for one singer by ID
get '/singers/:id' do
  @singer = Singer.find params[:id]
  erb :singers_show
end


# Update



# Delete