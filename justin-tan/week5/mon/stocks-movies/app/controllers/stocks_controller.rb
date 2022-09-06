class StocksController < ApplicationController

    def welcome
        
    end

    def for

    end

    def lookup
        @stock_code = params[:stock_code]

        # Perform lookup using gem
        # No NEED for require 'stock_quote' - as long as it's in the gemfile and you have run 'bundle install' in the terminal and restarted the server, you can now use that gem anywhere

        StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

        @results = StockQuote::Stock.quote @stock_code

        # raise 'hell'

    end


end #class StocksController