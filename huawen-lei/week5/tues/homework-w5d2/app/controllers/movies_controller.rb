class MoviesController < ApplicationController
    
    def home
    end

    # Create
    def new
        @movie = Movie.new
    end

    def create
        Movie.create(
            name: params[:movie][:name],
            release_year: params[:movie][:release_year],
            director: params[:movie][:director],
            starring: params[:movie][:starring],
            running_time: params[:movie][:running_time],
            image_url: params[:movie][:image_url]
        )

        redirect_to movies_path
    end

    # Read
    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find params[:id]
    end

    # Update
    def edit
        @movie = Movie.find params[:id]
    end

    def update
        movie = Movie.find params[:id]

        movie.update(
            name: params[:movie][:name],
            release_year: params[:movie][:release_year],
            director: params[:movie][:director],
            starring: params[:movie][:starring],
            running_time: params[:movie][:running_time],
            image_url: params[:movie][:image_url]
        )

        redirect_to movie_path(movie.id)
    end

    # Destroy
    def destroy
        Movie.destroy params[:id]

        redirect_to movies_path
    end





end