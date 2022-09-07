require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


def db_query (sql)
    
    puts "+++++============================\n\n"
    puts sql
    puts "\n+++++============================\n\n"

    # connect to our SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results # implicit return

end

get '/' do
    erb :home
end

# CRUD Routes, do create

# 1 get a blank form

get '/teams/new' do
    erb :new
end

# 2 create form action to add new team, method post

post '/teams' do

    insert_sql = "
    INSERT INTO worldcup (team, region, group_in, time_in, host, image_url)
    VALUES (
        '#{params[:team]}',
        '#{params[:region]}',
        '#{params[:group_in]}',
        #{params[:time_in]},
        #{params[:host]},
        '#{params[:image_url]}'
    );
    "
    db_query insert_sql 

    redirect '/teams' # go to the index there we will see the newly added team

end # post /teams (form submit)
# CRUD Routes, do R first
# 1. all rows

get '/teams' do
    
    @results = db_query 'SELECT * FROM worldcup;'

    erb :index

end # get /teams index

#2. show individual team by id
get '/teams/:id' do

    
    @team = db_query "SELECT * FROM worldcup WHERE id = #{params[:id]};"
    @team = @team.first

    erb :details

end # get /teams/:id to show details

# CRUD Routes, Update

# retrieve re-filled by ID

get '/teams/:id/edit' do
    @team = db_query "SELECT * FROM worldcup WHERE id = #{params[:id]}"
    @team = @team.first
    
    erb :edit
end

# form submit, perform DB update redirect post method
post '/teams/:id' do

    update_sql = "
    UPDATE worldcup SET 
       team = '#{params[:team]}',
        region = '#{params[:region]}',
        group_in = '#{params[:group_in]}',
        time_in = #{params[:time_in]},
        host = #{params[:host]},
        image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
    "
    db_query update_sql 
    redirect "/teams/#{params[:id]}"
end

# CRUD routes Delete

get '/teams/:id/delete' do
    db_query "DELETE FROM worldcup WHERE id = #{params[:id]}"
 
    redirect '/teams'
 end
 



    