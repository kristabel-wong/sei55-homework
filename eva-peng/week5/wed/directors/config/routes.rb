Rails.application.routes.draw do
  get 'movies/new'
  get 'movies/create'
  get 'movies/index'
  get 'movies/show'
  get 'movies/edit'
  get 'movies/update'
  get 'movies/destroy'
  root to: "pages#home"

#Create

  #1. blank form
  get 'directors/new' => 'directors#new', as: 'new_director'

  #2. form submit

  post '/directors' => 'directors#create'

#Read
  #1. index of all
  get '/directors' => 'directors#index'

  #2
  get 'directors/:id' => 'directors#show', as: 'director' #director_path(id)

  #Update
  # prefilled form
  get '/directors/:id/edit' => 'directors#edit', as: 'edit_director'


#form submit
  patch 'directors/:id' => 'directors#update'

  #Delete

  delete '/directors/:id' => 'directors#destroy'

  resources :movies





end
