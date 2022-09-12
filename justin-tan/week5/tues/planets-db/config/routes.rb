Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # for '/'
  root to: 'planets#home'

  #planets CRUD

  # Create
  # 1. create form
  get '/planets/new' => 'planets#new', as: 'new_planet' # new_planet_path()

  # 2. FOrm submits here, create planet, redirect

  post '/planets' => 'planets#create'

  # Read

  # 1. index page of all planets

  get '/planets' => 'planets#index'

  # 2. show / details page of one planet

  get 'planets/:id' => 'planets#show', as: 'planet' # gives us 'planet_path()' as a helper
  

  # update
  
  # 1. pre-filled form (ie requires planet.find with params[:id])
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'

  # 2.Form submit here, update existing planet, redirect to show
  patch 'planets/:id' => 'planets#update'

  # Delete - delete planet by id, redirect to index
  get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet' #destroy_planet_path(id)

end
