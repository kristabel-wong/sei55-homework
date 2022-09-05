class TeamsController < ApplicationController

    def home
    end

    def index
        @teams = Team.all
    end

    def show
        @team = Team.find params[:id]
    end

    def new
        @team = Team.new
    end

    def create

        Team.create(
            name: params[:team][:name],
            image_url: params[:team][:image_url],
            founded_year: params[:team][:founded_year],
            city: params[:team][:city],
            arena: params[:team][:arena],
            owner: params[:team][:owner]
        )
        redirect_to teams_path
    end

    def edit
        @team = Team.find params[:id]
    end

    def update
        team = Team.find params[:id]
        team.update(
            name: params[:team][:name],
            image_url: params[:team][:image_url],
            founded_year: params[:team][:founded_year],
            city: params[:team][:city],
            arena: params[:team][:arena],
            owner: params[:team][:owner]
        )
        redirect_to team_path(team.id)
    end

    def delete
        Team.destroy params[:id]
        redirect_to teams_path
    end
end