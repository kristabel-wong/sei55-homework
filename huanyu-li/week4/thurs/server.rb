

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query( sql )

    puts "=============================\n\n"
    puts sql
    puts "\n=============================\n\n"
  
    # Connect to our SQL database
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close
  
    results 
end


get '/' do
    erb :home
end

# Create
get '/movies/new' do
    
    erb :addnew
end

post '/movies' do
    insert_sql = "
    INSERT INTO movies (title, release_date, runtime,score, overview, poster_url)
    VALUES(
        '#{params[:title]}',
        '#{params[:release_date]}',
        '#{params[:runtime]}',
        '#{params[:score]}',
        '#{params[:overview]}',
        '#{params[:poster_url]}'
    );
    "
    db_query insert_sql
    
    redirect '/movies'

end

# Read
get '/movies' do
    @results = db_query 'SELECT * FROM movies;'
    
    erb :movies
end

get '/movies/:id' do
    @movie = db_query "SELECT * FROM movies WHERE id = #{params[:id]};"
    @movie = @movie.first

    erb :detail
end

# Update

get '/movies/:id/edit' do
    @movie = db_query "SELECT * FROM movies WHERE id = #{params[:id]};"
    @movie = @movie.first

    erb :edit

end

post '/movies/:id' do
    update_sql = "
    UPDATE movies SET
      title='#{params[:title]}',
      release_date= '#{params[:release_date]}',
      runtime= '#{params[:runtime]}',
      score= '#{params[:score]}',
      overview= '#{params[:overview]}',
      poster_url=  '#{params[:poster_url]}'
      WHERE id=#{params[:id]};
    "
    db_query update_sql
    
    redirect "/movies/#{params[:id]}"
end

# Delete

get '/movies/:id/delete' do
    db_query "DELETE FROM movies WHERE id=#{params[:id]};"
    redirect '/movies'
end