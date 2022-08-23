class StocksController < ApplicationController
    
    def welcome
        puts "welcome invoked"
    end # welcome()

    def form
    end

    def lookup
        @stock_code = params[:stock_code]
    
        StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

        @results = StockQuote::Stock.quote @stock_code

    end

    


    

end # StocksController

