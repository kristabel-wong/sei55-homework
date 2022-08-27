require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def db_query sql

    puts "============================================\n\n"
    puts sql 
    puts "\n==========================================\n\n"

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results

end

#home page 
get '/' do
    

    erb :home
end

# create
#1. create blank form
get '/profiles/create' do

    erb :new
end


#2. submit form (redirect!)
post '/profiles' do

    insert_sql = "
        INSERT INTO profiles (name, age, suffix, location, mbti, availability, likes, dislikes, profile_img)
        VALUES (
            '#{params[:name]}',
            #{params[:age]},
            '#{params[:suffix]}',
            '#{params[:location]}',
            '#{params[:mbti]}',
            #{params[:availability]},
            '#{params[:likes]}',
            '#{params[:dislikes]}',
            '#{params[:profile_img]}'
        );
    "

    db_query insert_sql

    redirect '/profiles'

end

# read
# 1. Index page where all profiles are shown
get '/profiles' do

    @results = db_query 'SELECT * FROM profiles;'

    erb :index
end

# 2. Detail of each profiles (show)
get '/profiles/:id' do

    @profile = db_query "SELECT * FROM profiles WHERE id = #{ params[:id] };"

    @profile = @profile[0]

    erb :show
end

# update
#1. display prefilled form
get '/profiles/:id/edit' do

    @profile = db_query "SELECT * FROM profiles WHERE id = #{ params[:id] };"

    @profile = @profile[0]

    erb :edit
end

#2. form submit
post '/profiles/:id' do

    update_sql = "
        UPDATE profiles SET
            name = '#{params[:name]}',
            age = #{params[:age]},
            suffix = '#{params[:suffix]}',
            location = '#{params[:location]}',
            mbti = '#{params[:mbti]}',
            availability = #{params[:availability]},
            likes = '#{params[:likes]}',
            dislikes = '#{params[:dislikes]}',
            profile_img = '#{params[:profile_img]}'

        WHERE id = #{params[:id]}; 
    "
    db_query update_sql

    redirect "/profiles/#{params[:id]}" 
    
end

#delete

get '/profiles/:id/delete' do

    db_query "DELETE FROM profiles WHERE id = #{params[:id]};"

    redirect '/profiles'

end
