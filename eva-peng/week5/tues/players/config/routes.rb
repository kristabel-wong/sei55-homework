Rails.application.routes.draw do
  root to: 'players#home'

  #Create
  #1.blank form
  get '/players/new' => 'players#new', as: 'new_player'

  #2 form submits here, create new player, redirect
  post '/players' => 'players#create'



  # Read

  #1. index page 
  get '/players' => 'players#index'

  #2 show/details page 
  get '/players/:id' => 'players#show', as: 'player' # gives us 'player_path' as a helper

# Update

  # 1. pre-filled form 
  get 'players/:id/edit' => 'players#edit', as: 'edit_player'

  # 2. form submits here, update existing planet , redirect to show

  patch '/players/:id' => 'players#update'

  # Delete
  # delete player by id, redirect 
  get 'players/:id/delete' => 'players#destroy',  as: 'destroy_player'

end
