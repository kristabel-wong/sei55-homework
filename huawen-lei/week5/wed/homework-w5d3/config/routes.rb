Rails.application.routes.draw do

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

  delete '/movies/:id' => 'movies#destroy'

  #CRUD routes for Directors
  resources :directors

#     directors GET    /directors(.:format)          directors#index
#               POST   /directors(.:format)          directors#create
#  new_director GET    /directors/new(.:format)      directors#new
# edit_director GET    /directors/:id/edit(.:format) directors#edit
#      director GET    /directors/:id(.:format)      directors#show
#               PATCH  /directors/:id(.:format)      directors#update
#               PUT    /directors/:id(.:format)      directors#update
#               DELETE /directors/:id(.:format)      directors#destroy


end
