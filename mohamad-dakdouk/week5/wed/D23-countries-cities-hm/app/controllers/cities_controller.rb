class CitiesController < ApplicationController
  def new
    @city = City.new
  end

  def create
    City.create! city_params
    redirect_to cities_path
  end

  def index
    @cities = City.all
  end

  def show
    @city = City.find params[:id]
  end

  def edit
    @city = City.find params[:id]
  end

  def update
    city = City.find params[:id]
    city.update city_params
    redirect_to city_path(city.id)
  end

  def destroy
  end

  private 
  def city_params
    params.require(:city).permit( :name, :captial, :population, :attractions, :image, :country_id )
  end

end
