class UsersController < ApplicationController

    def home

    end

    #CRUD

    #Create

    #1. Form
    def new
        @user = User.new
    end

    #2. create new user
    def create
        
        User.create(
            first_name:         params[:user][:first_name],
            last_name:          params[:user][:last_name],
            age:                params[:user][:age],
            bio:                params[:user][:bio],
            profile_img_url:    params[:user][:profile_img_url]
        )

        redirect_to users_path

    end

    # READ

    # 1. Show all in index
    def index
        @users = User.all
    end

    # 2. Show single entry
    def show
        @user = User.find params[:id]
    end

    # Update

    # 1. Generate pre-filled form
    def edit
        @user = User.find params[:id]
    end
    # 2. Patch and redirect
    def update

        user = User.find params[:id]

        user.update(
            first_name:         params[:user][:first_name],
            last_name:          params[:user][:last_name],
            age:                params[:user][:age],
            bio:                params[:user][:bio],
            profile_img_url:    params[:user][:profile_img_url]
        )

        redirect_to user_path


    end
    # Delete

    def destroy
        User.destroy params[:id]
        redirect_to users_path
    end

end #end Users Controller