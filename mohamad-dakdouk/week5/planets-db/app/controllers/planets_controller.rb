class PlanetsController < ApplicationController

    def home
    end

    # Create
    # 1. New: Blank form
    def new

        @planet = Planet.new
    end

    # 2. Form submit
    def create

        #because of the 'form_with' helper created form input names like
        #names='planet[moons]' and name='planet[image_url]' the post form data is more neasted you write... params[:planet][:moons]
        Planet.create(

            name: params[:planet][:name],
            mass: params[:planet][:mass],
            orbit: params[:planet][:orbit],
            moons: params[:planet][:moons],
            image_url: params[:planet][:image_url]

        )

        #'create' route should show its own template due to issues around relocading a page reached by a form POST submit i.e. duplicating the create action in the database

        redirect_to planets_path

    end

    #Read 

    # 1. Index of all Planets
    def index
        @planets = Planet.all

    end 

    # 2. show page for a planet ID
    def show
        @planet = Planet.find params[:id]
    end

    #update
    #1. form
    def edit
        @planet = Planet.find params[:id]
    end

    #2. for redirect and submit
    def update

        #first: use the id from the url /planets/5(:5)
        planet = Planet.find params[:id]
        planet.update(
                name: params[:planet][:name],
                mass: params[:planet][:mass],
                orbit: params[:planet][:orbit],
                moons: params[:planet][:moons],
                image_url: params[:planet][:image_url]
        )
        # redirect to the show page for the planet we just updated
    redirect_to planet_path(planet.id)

    end

    def destroy
        Planet.destroy params[:id]
        redirect_to planets_path

    end


end # class PlanetsController
