Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'animals#home'

  # CRUD

  # Create ====================================================

  # 1. Blank form
  get '/animals/new' => 'animals#new', as: 'new_animal' #new_animal_path()

  # 2. Form submits here
  post '/animals' => 'animals#create'

  # Read =======================================================

  # 1. Index of all animals
  get '/animals' => 'animals#index'

  # 2. Show details of one planet by id
  get '/animals/:id' => 'animals#show', as: 'animal'

  # Update =====================================================

  # 1. Pre-filled form requiring Animal.find with params[:id]
  get '/animals/:id/edit' => 'animals#edit', as: 'edit_animal'

  # 2. Form submits here, update animal, redirect to show.html.erb
  patch '/animals/:id' => 'animals#update'

  # Delete =====================================================

  get '/animals/:id/delete' => 'animals#destroy', as: 'destroy_animal' #destroy_animal_path(ID)
  

end
