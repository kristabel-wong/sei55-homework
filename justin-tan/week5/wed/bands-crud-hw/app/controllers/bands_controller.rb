class BandsController < ApplicationController
  def new
    @band = Band.new
  end

  def create
    Band.create band_params

    redirect_to bands_path
  end

  # READ
  # 1.Index / show all
  def index
    @bands = Band.all
  end

  def show
    @band = Band.find params[:id]
  end

  def edit
    @band = Band.find params[:id]
  end

  def update
    band = Band.find params[:id]
    band.update band_params

    redirect_to band_path(band.id)
  end

  def destroy
    Band.destroy params[:id]

    redirect_to bands_path
  end

  private

  def band_params

    params.require(:band).permit(:name, :year, :country, :songs, :genre, :album_number, :description, :image)

  end

end
