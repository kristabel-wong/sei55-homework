Rails.application.routes.draw do
  
 # verb '/path' => 'controller#method'

  root to: 'plants#home'

  # CREATE ---------------
  # 1. Blank form 
  get '/plants/new' => 'plants#new', as: 'new_plant' 
  # 2. Form submits here, create plants and redirect
  post 'plants' => 'plants#create'


  # READ ---------------
  # 1. Index page of all plants
  get '/plants' => 'plants#index'

  # 2. Show/details plage of one plants by ID
  get '/plants/:id' => 'plants#show', as:'plant'

  # UPDATE ---------------
  # 1. Pre-filled form (i.e.requires Plant.find with params[:id])
  get '/plants/:id/edit' => 'plants#edit', as: 'edit_plant'
  # 2. Form submits here, update existing plant, redirect to home
  patch '/plants/:id' => 'plants#update'

  # DELETE ---------------
  #1. Destroy
    get 'plants/:id/delete' => 'plants#destroy', as: 'destroy_plant'




end
