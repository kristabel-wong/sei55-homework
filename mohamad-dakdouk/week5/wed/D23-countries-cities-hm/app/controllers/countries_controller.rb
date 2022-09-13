class CountriesController < ApplicationController

def home

end


#create
def new
    @countries = Country.new

end

def create

    Country.create(
            name: params[:country][:name],
            location: params[:country][:location],
            language: params[:country][:language],
            population: params[:country][:population],
            vist: params[:country][:vist],
            image_url: params[:country][:image_url]
    )
    redirect_to countries_index_path
end

#read
def index
    @countries = Country.all
end

def show
    @countries = Country.find params[:id]
end

#update
def edit
    @countries = Country.find params[:id]

end

def update
    country = Country.find params[:id]
  country.update(
            name: params[:country][:name],
            location: params[:country][:location],
            language: params[:country][:language],
            population: params[:country][:population],
            vist: params[:country][:vist],
            image_url: params[:country][:image_url]
    )
    redirect_to country_path(country.id)

end 

def destroy
    Country.destroy params[:id]
    redirect_to country_path
end


end