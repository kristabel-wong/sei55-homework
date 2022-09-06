Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'games#home'

  get '/magic8ball' => 'magic8ball#show'

  get '/magic8ball/:question' =>  'magic8ball#play'

  get '/secretnumber' => 'secretnumber#show'

  get '/secretnumber/play' => 'secretnumber#play'

  get '/rockpaperscissors' => 'rockpaperscissors#show'

  get '/rockpaperscissors/:throw' => 'rockpaperscissors#play'


end
