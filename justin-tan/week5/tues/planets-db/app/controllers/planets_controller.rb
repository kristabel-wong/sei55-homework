
class PlanetsController < ApplicationController

    def home
        
    end

    #CREATE
    # 1. blank form
    def new
        @planet = Planet.new
    end

    #TODO: make sure the planet was actually created
    # ie validation + user feedback --later in the week
    # 2. form submit, create, redirect
    def create
        # raise 'hel'

        # Because of the 'form_with' helper created form input names like name="planet[moons" and name="planet[image_url", the posted form data we get in params is more nested:
        # to access the moons, you write 'params[:planet][:moons]' etc
        Planet.create(
            name: params[:planet][:name],
            mass: params[:planet][:mass],
            orbit: params[:planet][:orbit],
            moons: params[:planet][:moons],
            image_url: params[:planet][:image_url]
        )

        # 'create' route should not show its own template due to issues around reloading a page reached by a form POST submit (ie duplicating the create action in the database)
        #... so instead we redirect soemwhere else

        redirect_to planets_path

    end 

    # READ
    # 1. Index of all planets
    def index
        @planets = Planet.all

        # raise 'hel'

    end

    # 2. Show page for planet by ID
    # get /planets/:id
    def show
        @planet = Planet.find params[:id]

    end

    # UPDATE
    # 1. Pre-filled form
    def edit    
        @planet = Planet.find params[:id]
    end

    # 2. Form submits here, perform update, redirect
    def update
        # raise 'hel'

        #First use the id from the URL / planets/5 (:id)
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

    #DELETE

    def destroy
        #todo - validate 
        Planet.destroy params[:id]
        redirect_to planets_path
    end

end