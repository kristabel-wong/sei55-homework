require 'sinatra'
require 'sinatra/reloader'

require 'sqlite3'
require 'pry'


def db_query( sql_code )

    # intiates sqlite3 to access database.db
    db = SQLite3::Database.new'database.db'
    
    # dictates format of database to hash for ease of access
    db.results_as_hash = true
    
    # stores the data from the database into a variable
    results = db.execute sql_code

    # closes the access point opened initially by sqlite3
    db.close

    # reiterate the variable holding data results so as to take 
    # advantage of ruby's implicit return feature
    results

end

def random_clip_id (  )

    @other_clips = db_query( "SELECT * FROM clip_ranker WHERE id !=#{params[:id]}" )



end


get '/' do 
   
    erb :home

end

get '/about' do 
   
    erb :about

end

get '/clip_list' do 
   
    @clip_list = db_query "SELECT * FROM CLIP_RANKER;"
    

    erb :clip_list

end

get '/clip_list/CLIP_TIME/:id' do 

    @other_clips_ids = db_query "SELECT id FROM clip_ranker WHERE id !=#{params[:id]}" 
    

    single_clip = db_query "SELECT * FROM clip_ranker WHERE id =#{params[:id]}"
    @single_clip = single_clip.first

    erb :CLIP_TIME

end