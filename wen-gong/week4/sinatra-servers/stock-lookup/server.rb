require 'sinatra'
require'sinatra/reloader'
require 'stock_quote'
require 'httparty'

StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')


get '/' do
    erb :home
end


get '/lookup' do
    erb :form
end

get '/lookup/results' do

    @stock_code = params[:stock_code]

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
