Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'teams#home'

  # create
  get '/teams/new' => 'teams#new'
  post '/teams' => 'teams#create'


  # read
  get '/teams' => 'teams#index'
  get '/teams/:id' => 'teams#show', as: 'team'

  # update
  get '/teams/:id/edit' => 'teams#edit', as:'edit'
  patch '/teams/:id' => 'teams#update'

  # delete
  get '/teams/:id/delete' => 'teams#delete', as:'delete'


end
