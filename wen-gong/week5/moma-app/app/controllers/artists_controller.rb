class ArtistsController < ApplicationController
  def new
    @artist = Artist.new 
  end

  def create
  #   Artist.create(
  #   name: params[:artist][:name],
  #   nationality: params[:artist][:nationality],
  #   dob: params[:artist][:dob],
  #   period: params[:artist][:period],
  #   bio: params[:artist][:bio],
  #   roundness: params[:artist][:roundness],
  #   image: params[:artist][:image]
  # )

   Artist.create artist_params

    redirect_to artists_path
  end

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def edit
    @artist = Artist.find params[:id]

  end

  def update
  end

  def destroy
  end
   
  
  private #################################

  def artist_params
    params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :bio, :image)

  end


end
