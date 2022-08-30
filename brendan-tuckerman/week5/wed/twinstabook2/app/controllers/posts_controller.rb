class PostsController < ApplicationController
  ##Create
  #1. Create form
  def new
    @post = Post.new 
  end

  # Add new details and redirect
  def create
    Post.create post_params #see private
   
    redirect_to posts_path
  end
  
  ## Read ##

  #1. Show all 

  def index
    @posts = Post.all
  end

  #2. Show individual results
  def show
    @post = Post.find params[:id]
  end

  # Updates
  # 1. Show pre-filled form
  def edit
    @post = Post.find params[:id]
  end


 # 2. Update post and redirect
  def update
    post = Post.find params[:id]
    post.update post_params

    redirect_to post_path(post.id)
  end

  def destroy
    Post.destroy params[:id]

    redirect_to posts_path
  end

  private #nothing below can be called outside of this 

  def post_params #explicitly define the params that are allowed to be passed by the new and edit forms

    params.require(:post).permit(:title, :link, :image, :text, :user_id)


  end #end artist_param


end #end artist_param
