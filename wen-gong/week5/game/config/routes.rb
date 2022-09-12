Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/magic8ball' => 'pages#magic'

  get '/magic8ball/Why do I have to be harassed into submitting homework?' => 'pages#answer'





end
