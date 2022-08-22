
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

require 'active_record'

# connect to database
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

# save us from writing lots of SQL
ActiveRecord::Base.logger = Logger.new STDOUT

# close connection
after do
    ActiveRecord::Base.connection.close
end


class Attraction < ActiveRecord::Base
    belongs_to :travel
end

class Travel < ActiveRecord::Base
    has_many :attractions
end


def db_query( sql )
    
    puts "======================\n\n"
    puts sql
    puts "\n======================\n\n"
    #connect to our SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close #close database connection
    
    results #implicit return

end

# home route
get '/' do
    erb :home
end # end get '/'


# CRUD ===============================

# create new blank form ==============
get '/travel/new' do
    erb :new
end #get '/travel/new'

# create new submit form ==============
post '/travel' do
    
    # insert_sql = "
    #     INSERT INTO travel ( location, country, description, rating, visited, image_url )
    #     VALUES (
    #         '#{ params[:location] }',
    #         '#{ params[:country] }',
    #         '#{ params[:description] }',
    #         #{ params[:rating] },
    #         #{ params[:visited] },
    #         '#{ params[:image_url] }'

    #     );
    # "
    # db_query insert_sql 

    Travel.create(
        location: params[:location],
        country: params[:country],
        description: params[:description],
        rating: params[:rating],
        visited: params[:visited],
        image_url: params[:image_url]
    )

    redirect '/travel'

end # post '/travel'

# read - index ======================
get '/travel' do
    
    # @travel = db_query 'SELECT * FROM travel;'
    @travel = Travel.all

    erb :index

end # get '/travel'

# read - show ========================
get '/travel/:id' do
    
    # @travel = db_query "SELECT * FROM travel WHERE id = #{ params[:id] };"
    # @travel = @travel.first
    @travel = Travel.find params[:id]

    erb :show

end # get '/travel/:id'

# Update - pre-filled form ===============
get '/travel/:id/edit' do
    
    # @travel = db_query "SELECT * FROM travel WHERE id = #{ params[:id] };"
    # @travel = @travel.first
    @travel = Travel.find params[:id]

    erb :edit
end # get '/travel/:id/edit' 

# Update - from submit ====================
post '/travel/:id' do
    
#     update_sql = "
#         UPDATE travel SET

#             location = '#{ params[:location] }',
#             country = '#{ params[:country] }',
#             description = '#{ params[:description] }',
#             rating = #{ params[:rating] },
#             visited = #{ params[:visited] },
#             image_url = '#{ params[:image_url] }'

#         WHERE id = #{ params[:id] };    
#     "
#     db_query update_sql 

    travel = Travel.find params[:id]
    travel.update(
        location: params[:location],
        country: params[:country],
        description: params[:description],
        rating: params[:rating],
        visited: params[:visited].to_i,
        image_url: params[:image_url]
    )

    redirect "/travel/#{ params[:id] }"

end # post '/travel/:id'


# Delete
get '/travel/:id/delete' do
    
    # db_query "DELETE FROM travel WHERE id = #{ params[:id] }"
    Travel.destroy params[:id]

    redirect '/travel' 

end # get '/travel/:id/delete'



# CRUD routes for Attractions ============================================

# create blank form =======
get '/attractions/new' do
    erb :attractions_new
end

# Form submit =============
post '/attractions' do
    
    Attraction.create(
        name: params[:name],
        image_url: params[:image_url],
        travel_id: params[:travel_id]
    )

    redirect '/attractions'

end

# Get index of all attractions ============
get '/attractions' do
    @attractions = Attraction.all

    erb :attractions_index
end

# show attractions for one location ==========
get '/attractions/:id' do
    @attractions = Attraction.find params[:id]

    erb :attractions_show
end

# update attractions for one location ========= 
get '/attractions/:id/edit' do
    @attractions = Attraction.find params[:id]

    erb :attractions_edit
end

# form submit - perform DB update ==========
post '/attractions/:id' do
    
    attractions = Attraction.find params[:id]
    attractions.update(
        name: params[:name],
        image_url: params[:image_url],
        travel_id: params[:travel_id]
    )

    redirect "/attractions/#{ params[:id] }"

end

# delete ==================
get '/attractions/:id/delete' do
   
    Attraction.destroy params[:id]

    redirect '/attractions' # back to index

end
