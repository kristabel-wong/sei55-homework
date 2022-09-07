
class AnimalsController < ApplicationController

    def home
    end # home

    # CRUD ====================

    # Create =================================================
    
    # 1. blank form
    def new 
        @animal = Animal.new
    end #new

    # 2. form submit, create, update
    def create 

        Animal.create(

            name:       params[:animal][:name],
            species:    params[:animal][:species],
            region:     params[:animal][:region],
            life_span:  params[:animal][:life_span],
            image_url:  params[:animal][:image_url]
            
        )

        redirect_to animals_path

    end #create


    # Read ===================================================


    # 1. index of all animals
    def index 
        @animals = Animal.all
    end #index

    # 2. show page for animal by id get /animals/:id
    def show
        @animal = Animal.find params[:id]
    end #show


    # Update =================================================


    # 1. pre-filled form
    def edit
        @animal = Animal.find params[:id]
    end #edit 

    # 2. form submits here - update, redirect
    def update

        animal = Animal.find params[:id]

        animal.update(

            name:       params[:animal][:name],
            species:    params[:animal][:species],
            region:     params[:animal][:region],
            life_span:  params[:animal][:life_span],
            image_url:  params[:animal][:image_url]

        )
        # to page just updated
        redirect_to animal_path(animal.id)

    end #update


    # Delete =================================================


    def destroy

        Animal.destroy params[:id]
        redirect_to animals_path

    end #destroy
    
end # AnimalsController



