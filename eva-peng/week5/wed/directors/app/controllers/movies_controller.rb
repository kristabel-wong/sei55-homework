class MoviesController < ApplicationController
  def new
    @movie = Movie.new
  end

  def create
    Movie.create movie_params
    redirect_to movies_path
  end

  def index
    @movie = Movie.all
  end

  def show
    @movie = Movie.find params[:id]
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie_path(movie.id)
  end

  def destroy
    Movie.destroy params[:id]

    redirect_to movies_path
  end

  private
  def movie_params
    params.require(:movie).permit( :title, :year, :genre, :image, :director_id )
  end


end
