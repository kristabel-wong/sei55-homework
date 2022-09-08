
class AlbumsController < ApplicationController

    def home
    end

    def new
        @album = Album.new

    end

    def create
        Album.create(
            name: params[:album][:name],
            released: params[:album][:released],
            genre: params[:album][:genre],
            length: params[:album][:length],
            image_url: params[:album][:image_url]

        )

        redirect_to albums_path 
    end

    def index
        @albums = Album.all

        # raise 'hell'

    end

    def show
        @album = Album.find params[:id]
    end

    def edit
        @album = Album.find params[:id]
    end

    def update
        album = Album.find params[:id]

        album.update(
            name: params[:album][:name],
            released: params[:album][:released],
            genre: params[:album][:genre],
            length: params[:album][:length],
            image_url: params[:album][:image_url]
        )

        redirect_to album_path(album.id)
    end

    def destroy
        Album.destroy params[:id]
        redirect_to albums_path
    end

end