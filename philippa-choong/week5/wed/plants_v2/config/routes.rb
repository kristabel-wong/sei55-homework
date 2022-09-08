Rails.application.routes.draw do

 
# verb '/path' => 'controller#method'
  
  root to: "pages#home"

    
  #BUYERS CRUD ############################
  resources :buyers
  
  
  #PLANTS CRUD ############################

  #CREATE -------
  #1. Blank form 
  get '/plants/new' => 'plants#new', as: 'new_plant'

  #2. Form submits, create artist, redirect index
  post '/plants' => 'plants#create'

  #READ ----------------
  # 1. Index of all plants
    get '/plants' => 'plants#index'

  # 2. show/details page for one plant by ID
    get '/plants/:id' => 'plants#show', as: 'plant'

  #UPDATE --------
  # 1. Pre-filled form (i.e. requires Plant.find with params[:id])
  get '/plants/:id/edit' => 'plants#edit', as:'edit_plant'


  # 2. Form submits, create plant, redirect index
  patch 'plants/:id' => 'plants#update'


  #DELETE ---------

  delete 'plants/:id' => 'plants#destroy'

  

end

