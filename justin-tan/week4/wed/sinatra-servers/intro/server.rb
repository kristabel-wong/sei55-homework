
#Tell ruby that we want to use one of the pre-installed gem libraries in this current program

require 'sinatra'
require 'sinatra/reloader' #automatic restart after changes


# Define some routes that our webserver will respond to
# i.e this will be like a switchboard ,
# or like a series of if-elsif statements that are
# responding to the browser -requested path

# Let's start with the default or root route "/"

get '/' do

    # The final expression in a route handler block
    # is what the browser gets as its response,
    # same as 'implicit return' in a function

    # '<html>
    # <h1>Hello World yayy!@@</h1>
    # <a href="/about">About us</a>
    # </html>'

    #the ERB system expects, by conventions,
    #to find a file called 'home.erb'
    #in the views/folder

    erb :home

end # get '/'

get '/about' do
    "Welcome to the About Page"
end # get /about

get '/lucky-number' do
    @number = rand 100
    # puts "Number is #{number}"
    erb :lucky_number

end #get /lucky-number

get '/hello/pip' do
    "hello, pip!"

end # get/hello/pip

get '/hello/craig' do
    "hello, craig!"

end # get/hello/pip

# Dynamic routes - routes which have placeholders
# (variables) in them
# we can define a pattern for a route, and find
# out what specific string replaced the placeholder

get '/hello/:student_name' do
    "Hello #{ params[:student_name] }"
end

get '/greeting/:name/feels/:mood' do
#params.to_s

    @name = params[:name]
    @feels = params[:mood]
    erb :greeting
end

