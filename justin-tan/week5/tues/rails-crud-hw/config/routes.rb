Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #START THE CRUD GOOOO

  root to: 'restaurants#home'

  #CRUD

  #Create
  #1. make form
  get '/restaurants/new' => 'restaurants#new', as: 'new_restaurant'

  #2. submit form
  post '/restaurants' => 'restaurants#create'

  #Read
  #1. Index
  get '/restaurants' => 'restaurants#index'

  #2. Detail / show
  get '/restaurants/:id' => 'restaurants#show', as: 'restaurant'

  #Update
  #1. Edit form
  get '/restaurants/:id/edit' => 'restaurants#edit', as: 'edit_restaurant'

  #2. submit edit form
  patch '/restaurants/:id' => 'restaurants#update'

  #Delete
  get '/restaurants/:id/delete' =>
  'restaurants#destroy', as: 'destroy_restaurant'

end
