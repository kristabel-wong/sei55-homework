require 'sinatra'
require 'sinatra/reloader'

require 'stock_quote'

require 'HTTParty'

StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
    
    erb :home

end     #get/

#Step 1. Show a form to be filled in
get '/lookup' do

    erb :form
end

#Step 2, Form above submits to here
get '/lookup/results' do

#actual stock lookup using gem goes here
@stock_code = params[:stock_code]

stock = StockQuote::Stock.quote @stock_code

@stock_price = stock.latest_price
@company_name = stock.company_name

@fake_array = [
    'grach',
    'harpo',
    'chico'
]

erb :results

end #get/lookup/results
