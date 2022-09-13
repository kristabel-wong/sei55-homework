class RestaurantsController < ApplicationController

    #START THE CRUD! LETSGOOOO!O!O

    # Create
    # 1. make form
    def new
        @restaurant = Restaurant.new
    end

    # 2. submit form, redirect
    def create

        Restaurant.create(
            name:           params[:restaurant][:name],
            chef:           params[:restaurant][:chef],
            location:       params[:restaurant][:location],
            cuisine:        params[:restaurant][:cuisine],
            year:           params[:restaurant][:year],
            price_range:    params[:restaurant][:price_range],
            description:    params[:restaurant][:description],
            restaurant_img: params[:restaurant][:restaurant_img],
            dish:           params[:restaurant][:dish],
            dish_img:       params[:restaurant][:dish_img]
        )

        redirect_to restaurants_path

    end

    # Read
    # 1.Index
    def index
        @restaurants = Restaurant.all

    end

    def show
        @restaurant = Restaurant.find params[:id]

    end

    # Update
    #1. update form
    def edit

        @restaurant = Restaurant.find params[:id]
    
    end

    #2.Submit form, redirect

    def update

        restaurant = Restaurant.find params[:id]

        restaurant.update(
            name:           params[:restaurant][:name],
            chef:           params[:restaurant][:chef],
            location:       params[:restaurant][:location],
            cuisine:        params[:restaurant][:cuisine],
            year:           params[:restaurant][:year],
            price_range:    params[:restaurant][:price_range],
            description:    params[:restaurant][:description],
            restaurant_img: params[:restaurant][:restaurant_img],
            dish:           params[:restaurant][:dish],
            dish_img:       params[:restaurant][:dish_img]
        )

        redirect_to restaurant_path(restaurant.id)

    end

    # Delete

    def destroy
        Restaurant.destroy params[:id]
        redirect_to restaurants_path

    end


end