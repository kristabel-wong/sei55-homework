Rails.application.routes.draw do
  
  
 
  root to: "pages#home"

  # CREATE

  get '/singers/new' => 'singers#new', as: 'new_singer'

  post '/singers' => 'singers#create'
  
  # READ

  get '/singers' => 'singers#index'

  get '/singers/:id' => 'singers#show', as: 'singer'

  # UPDATE

  get '/singers/:id/edit' => 'singers#edit', as: 'edit_singer'

  patch '/singers/:id' => 'singers#update'


  # DESTROY
  delete '/singers/:id' => 'singers#destroy'

  resources :albums
end
