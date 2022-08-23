require 'sinatra'
require 'sinatra/reloader'




get '/' do

    '<html>
    <h1>Hello World!</h1>
    <a href="/about">about me </a>
    </html>'
    erb :home
end

get '/about' do
    "Welcome to the About Page"
end

get '/lucky-number' do
    @number = rand 100
    # puts "Number is #{ number }"
    erb :lucky_number
    

end

get '/hello/pip' do
    "Hello, Pip!"
end

get '/hello/craig' do
    "Hello, Craig!"
end


get '/hello/:stduent_name' do
    # "Hello student"
    "Hello #{ params[:stduent_name] }"
end

get '/greeting/:name/feels/:mood' do    
    @name = params[:name]
    @feels = params[:mood]
    erb :greeting
end



