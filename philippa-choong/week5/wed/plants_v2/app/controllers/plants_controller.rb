class PlantsController < ApplicationController

   #list of your methods that you specified in routes.rb

  # CREATE ----------
  def new
    @plant = Plant.new
  end

  def create
    Plant.create plant_params #under 'private' method below
    redirect_to plants_path
  end

  # READ ---------------
  def index
    @plants = Plant.all
  end

  def show
    @plant = Plant.find params[:id]
  end

  # UPDATE ------------
  def edit
    @plant = Plant.find params[:id]
  end

  def update
    # 1. find plant ID
    plant = Plant.find params[:id]
    #2. update
    plant.update plant_params #under 'private' method below

    redirect_to plant_path(plant.id)
  end


  # DELETE -------------
  def destroy
    Plants.destroy params[:id]
    redirect_to plants_path #back to index
  end

#-------------
  private

   def plant_params
    params require(:plant).permit(:name, :image_url, :sun_exposure, :native_area, :mature_size)
   end

end
