class ZoosController < ApplicationController

  def new
    @zoo = Zoo.new
  end

  def create
    Zoo.create zoo_params
    redirect_to zoos_path
  end

  def index
    @zoos = Zoo.all
  end #index

  def show
    @zoo = Zoo.find params[:id]
  end

  def edit
    @zoo = Zoo.find params[:id]
  end

  def update
    zoo = Zoo.find params[:id]
    zoo.update zoo_params

    redirect_to zoo_path(zoo.id)
  end

  def destroy
    Zoo.destroy params[:id]

    redirect_to zoos_path
  end

  private
  def zoo_params
    params.require(:zoo).permit(:name, :country, :image)
  end

end
