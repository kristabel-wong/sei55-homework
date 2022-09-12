
class PlanetsController < ApplicationController

    def home
    end

    def new
        @planet = Planet.new

    end

    def create
        Planet.create(
            name: params[:planet][:name],
            mass: params[:planet][:mass],
            orbit: params[:planet][:orbit],
            moons: params[:planet][:moons],
            image_url: params[:planet][:image_url]

        )

        redirect_to planets_path 
    end

    def index
        @planets = Planet.all

        # raise 'hell'

    end

    def show
        @planet = Planet.find params[:id]
    end

    def edit
        @planet = Planet.find params[:id]
    end

    def update
        planet = Planet.find params[:id]

        planet.update(
            name: params[:planet][:name],
            mass: params[:planet][:mass],
            orbit: params[:planet][:orbit],
            moons: params[:planet][:moons],
            image_url: params[:planet][:image_url]
        )

        redirect_to planet_path(planet.id)
    end

    def destroy
        Planet.destroy params[:id]
        redirect_to planets_path
    end

end