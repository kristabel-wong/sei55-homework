
class PlantsController < ApplicationController

    def home 
    end


# CREATE ---------------
  # 1. Blank form 
    def new 
      @plant = Plant.new
    end


  # 2. Form submits here, create plants and redirect
    def create

         Plant.create(
            name: params[:plant][:name],
            image_url: params[:plant][:image_url],
            sun_exposure: params[:plant][:sun_exposure],
            native_area: params[:plant][:native_area],
            mature_size: params[:plant][:mature_size],
            
        )
        redirect_to plants_path
    end


  # READ ---------------
  # 1. Index page of all plants
    def index
        @plants = Plant.all
    end

  # 2. Show/details plage of one plants by ID
    def show
        @plant = Plant.find params[:id]
    end

  # UPDATE ---------------------
  # 1. Pre-filled form (i.e.requires Plant.find with params[:id])
  def edit
    @plant = Plant.find params[:id]
  end

  # 2. Form submits here, update existing plant, redirect to home
  def update

    plant = Plant.find params[:id]

     plant.update(
            name: params[:plant][:name],
            image_url: params[:plant][:image_url],
            sun_exposure: params[:plant][:sun_exposure],
            native_area: params[:plant][:native_area],
            mature_size: params[:plant][:mature_size],
            
        )
        redirect_to plant_path(plant.id)
  end

  # DELETE ------------------
  #1. Destroy
  def destroy
    Plant.destroy params[:id] 

    redirect_to plants_path
  end 
end
