class CountriesController < ApplicationController 

    def home
    end

    def index
        @countries = Country.all
    end

end
