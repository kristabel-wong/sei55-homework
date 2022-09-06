class TeamsController < ApplicationController
  def new
    @team = Team.new
  end

  def create
    Team.create team_params
    redirect_to teams_path
  end

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find params[:id]
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    team = Team.find params[:id]
    team.update team_params
    redirect_to team_path(params[:id])
  end

  def destroy
    Team.destroy params[:id]
    redirect_to teams_path
  end

  # ========================
  private
  def team_params
    params.require(:team).permit(:name,:founded,:arena,:owner,:logo)
  end
end
