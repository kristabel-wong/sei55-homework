Rails.application.routes.draw do

  get 'users/new'
  get 'users/create'
  get 'users/index'
  get 'users/show'
  get 'users/edit'
  get 'users/update'
  get 'users/destroy'
  root to: 'pages#home'

  get '/login' => 'session#new' #show login form
  post '/login' => 'session#create' #form submit, perform long, redirect 
  delete '/login' => 'session#destroy' #logout link goes here, perform logout, redirect

  resources :mixtapes, :users


end
