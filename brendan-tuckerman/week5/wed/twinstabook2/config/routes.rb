Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to:  'pages#home'


  #### Users Crud ####

  #CRUD
  #Create

  #1. Form
  get '/users/new' => 'users#new', as: 'new_user' 

  #2. Submit, create, and redirect
  post '/users' => 'users#create'
  #Read

  # 1. Index all
  get '/users' => 'users#index'

  # 2. Show one entry
  get '/users/:id' => 'users#show', as: 'user'

  # Update

  # 1. Pre-filled form using [:id]
  get '/users/:id/edit' => 'users#edit' , as: 'edit_user'

  # 2. Update (patch) and redirect
  patch '/users/:id' => 'users#update'



  # Delete
  get '/users/:id/delete' => 'users#destroy', as: 'destroy_user'

  

  #### Posts CRUD ####

 resources:posts



end #end routse
