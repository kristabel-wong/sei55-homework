Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/countries' => 'countries#home'

# Create
# 1. Blank form
get '/countries/new' => 'countries#new', as:'new_country'

# 2. Form Submits
post '/countries' => 'countries#create'

# Read
# 1. Index
get '/countries/index' => 'countries#index'

# 2. Show Details
get '/countries/:id' => 'countries#show', as: 'country'

# Update
# 1. Prefilled form
get '/countries/:id/edit' => 'countries#edit', as: 'edit_country'

# 2. Form submits
patch '/countries/:id' => 'countries#update'

# Delete
get 'countries/:id/delete' => 'countries#destroy', as:'destroy_country'

##################### Cities CRUD
resources :cities


end
