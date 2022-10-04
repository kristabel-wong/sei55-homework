Rails.application.routes.draw do

  # root page (get '/')
  root to: 'pages#home'

  #Artist CRUD

  # CREATE
  # 1. Blank form
  get '/artists/new' => 'artists#new', as: 'new_artist'

  # 2. Form submit, create artist, redirect
  post '/artists' => 'artists#create'

  # READ
  # 1. Index of all Artist
  get '/artists' => 'artists#index'

  # 2. Show /details page for one artist by ID
  get '/artists/:id' => 'artists#show', as: 'artist'

  # UPDATE
  #1. prefilled form based on the artist ID
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  #2. send update
  patch '/artists/:id' => 'artists#update'

  # DESTROY
  delete '/artists/:id' => 'artists#destroy'


  # CUD Routes for Works
  resources :works

end
