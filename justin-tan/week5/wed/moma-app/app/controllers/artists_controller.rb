class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    # raise 'hel' #debugging - lets us see 'params
    # Artist.create(
    #   name: params[:artist][:name],
    #   nationality: params[:artist][:nationality],
    #   dob: params[:artist][:dob],
    #   period: params[:artist][:period],
    #   image: params[:artist][:image],
    #   roundness: params[:artist][:roundness],
    #   bio: params[:artist][:bio]
    # )

    Artist.create artist_params

    redirect_to artists_path

  end

  # READ
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  #UPDATE
  #1. prefilled form based on artist ID
  def edit
    @artist = Artist.find params[:id]
  end
  
  #2. submit form
  def update
    # raise 'hell'
    artist = Artist.find params[:id]
    artist.update artist_params

    redirect_to artist_path(artist.id)

  end

  def destroy
    Artist.destroy params[:id]

    redirect_to artists_path
  end

  # 'private' in general OOP means methods which are not visible/callable from 'outside' the class, i.e. can't be called on an object made from the class - they can only be called by other methods within the class.

  # What it means in Rails controller is that this method is NOT an 'action' aka it's not a handler for a route. It's just a toolkit function to be used by the actions( route handling methods)
  private ###################################

  # this method will return a special locked-down/'white-listed' version of params - only the specified keys within the params hash will be allowed through - and then we can use this version of params directly with Artist.create
  def artist_params

    #GOTCHA: if you add new columns to your table, they will also have to be named here
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image, :roundness, :bio)
  end



end # class ArtistsController

