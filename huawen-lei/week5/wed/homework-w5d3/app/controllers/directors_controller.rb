class DirectorsController < ApplicationController
  def new
    @director = Director.new
  end

  def create
    Director.create directors_params

    redirect_to directors_path
  end

  def index
    @directors = Director.all
  end

  def show
    @director = Director.find params[:id]
  end

  def edit
    @director = Director.find params[:id]
  end

  def update
    director = Director.find params[:id]
    director.update directors_params

    redirect_to director_path(director.id)
  end

  def destroy
    Director.destroy params[:id]

    redirect_to directors_path
  end
end


private
def directors_params
  params.require(:director).permit(:name, :Born_year, :image)
end
