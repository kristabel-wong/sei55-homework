Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'games#home'

  get '/magic-8-ball' => 'magic8ball#home' 
  get '/magic-8-ball/:question' => 'magic8ball#show' 

  get '/secret-number' => 'secret_number#home'
  get '/secret-number/show' => 'secret_number#show'

  get '/rock-paper-scissors' => 'rock_paper_scissors#home'
  get '/rock-paper-scissors/show' => 'rock_paper_scissors#show'


end
