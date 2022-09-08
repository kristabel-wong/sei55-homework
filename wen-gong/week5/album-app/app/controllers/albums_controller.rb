class AlbumsController < ApplicationController
  def new
    @album = Album.new
end

  def create
    Album.create album_params
    redirect_to albums_path
  end

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find params[:id]
  end

  def edit
    @album = Album.find params[:id]
  end

  def update
    album = Album.find params[:id]
    album.update album_params

    redirect_to album_path(album.id)     
  end

  def destroy
    Album.destroy params[:id]
    redirect_to albums_path
  end



  private
  def album_params
    params.require(:album).permit(:name, :released, :genre, :length, :image, :singer_id)
  end 

end







