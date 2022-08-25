Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'movies#home'

  # Create

  get '/movies/new' => 'movies#new', as: 'new_movie'

  post '/movies' => 'movies#create'


  # Read

  get '/movies' => 'movies#index'

  get '/movies/:id' => 'movies#show', as: 'movie'

  # Update

  get '/movies/:id/edit' => 'movies#edit', as: 'edit_movie'

  patch '/movies/:id' => 'movies#update'

  # Destroy

  get '/movies/:id/destroy' => 'movies#destroy', as: 'destroy_movie'









end
