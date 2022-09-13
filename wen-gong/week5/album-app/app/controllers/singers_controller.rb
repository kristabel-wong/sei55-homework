class SingersController < ApplicationController
  def new
    @singer = Singer.new
  end

  def create
    
    # Singer.create(
    #   name: params[:singer][:name],
    #   born: params[:singer][:born],
    #   website: params[:singer][:website],
    #   image: params[:singer][:image],
    # )

    Singer.create singer_params
    redirect_to singers_path
  end

  def index
    @singers = Singer.all
  end

  def show
    @singer = Singer.find params[:id]
  end

  def edit
    @singer = Singer.find params[:id]
  end

  def update
    singer = Singer.find params[:id]
    singer.update singer_params

    redirect_to singer_path(singer.id)
end

  def destroy
    Singer.destroy params[:id]
    redirect_to singers_path
  end
end





private

def singer_params
  params.require(:singer).permit(:name, :born, :website, :image)
end