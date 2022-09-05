Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'trees#home'

# CRUD
# CREATE
# READ
# GET read all trees
get '/trees' => 'trees#index'
# GET on specific tree
get '/tree/:id' => 'trees#show', as: 'tree'
# UPDATE
# DELETE

end
