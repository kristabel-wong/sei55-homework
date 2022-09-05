Rails.application.routes.draw do

  # set '/' root route
  root to: "members#home"

  # magic ruby code to generate all routes
  resources :members, :items

#   [1] pry(main)> show-routes
#   Prefix    Verb   URI Pattern                 Controller#Action
#     root    GET    /                           members#home
#  members    GET    /members(.:format)          members#index
#             POST   /members(.:format)          members#create
# new_member  GET    /members/new(.:format)      members#new
# edit_member GET    /members/:id/edit(.:format) members#edit
#   member    GET    /members/:id(.:format)      members#show
#             PATCH  /members/:id(.:format)      members#update
#             PUT    /members/:id(.:format)      members#update
#             DELETE /members/:id(.:format)      members#destroy

end
