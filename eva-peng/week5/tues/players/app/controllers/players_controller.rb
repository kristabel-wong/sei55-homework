class PlayersController < ApplicationController

    def home
    end

    #create
    #1. blank form
    def new
        @player = Player.new
    end

    #2. form submit, create, redirect
    def create
         
        Player.create(
            name: params[:player][:name],
            sex: params[:player][:sex],
            dob: params[:player][:dob],
            country: params[:player][:country],
            grand_slam: params[:player][:grand_slam],
            highest_ranking: params[:player][:highest_ranking],
            image_url: params[:player][:image_url]
        )

        
        redirect_to players_path

    end



    def index
        @players = Player.all
        
    end

    def show
        @player = Player.find params[:id]
    end

    #Update
    # 1. pre-filled form
    def edit
        @player = Player.find params[:id]
    end

    #2. form submits here, perform update

    def update

        #first: use the id from the url
        player = Player.find params[:id]
        player.update(
            name: params[:player][:name],
            sex: params[:player][:sex],
            dob: params[:player][:dob],
            country: params[:player][:country],
            grand_slam: params[:player][:grand_slam],
            highest_ranking: params[:player][:highest_ranking],
            image_url: params[:player][:image_url]
        )

            
        redirect_to player_path(player.id)
    end

    # Delete
    def destroy
        Player.destroy params[:id]
        redirect_to players_path

    end


end
