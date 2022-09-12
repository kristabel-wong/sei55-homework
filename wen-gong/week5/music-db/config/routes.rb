Rails.application.routes.draw do
  

   root to: 'albums#home'

   get '/albums/new' => 'albums#new', as: 'new_album'

   post '/albums' => 'albums#create'

   get '/albums' => 'albums#index'

   get '/albums/:id' => 'albums#show', as: 'album'

   get '/albums/:id/edit' => 'albums#edit', as: 'edit_album'


   patch '/albums/:id' => 'albums#update'

   get '/albums/:id/delete' => 'albums#destroy', as: 'destroy_album'


end
