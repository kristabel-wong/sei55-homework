Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'countries#home'

# Create
# 1. Blank form

# 2. Form Submits

# Read
# 1. Index
get '/countries' => 'countries#index'

# 2. Show Details


# Update
# 1. Prefilled form

# 2. Form submits

# Delete

end
