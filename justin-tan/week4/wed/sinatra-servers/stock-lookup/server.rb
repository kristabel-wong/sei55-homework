require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# require 'httparty'

#One-off setup step to initialise the stock lookup gem
StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
    erb :home
end

# Step 1. show a form to be filled in
get '/lookup' do

    erb :form
end

# step 2. form submits to here
get '/lookup/results' do
    @stock_code = params[:stock_code]
    
    #actual stock lookup using gem goes here
    stock = StockQuote::Stock.quote @stock_code

    @stock_price = stock.latest_price
    @company_name = stock.company_name

    @fake_array = [
        'groucho',
        'harpo',
        'chico'
    ]


    erb :results
end