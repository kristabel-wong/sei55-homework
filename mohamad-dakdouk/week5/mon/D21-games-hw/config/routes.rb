Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/games' => 'games#welcome'

  get '/magic' => 'magic#question'

  get '/magic/:question' => 'magic#fortune'

  get '/secret' => 'secret#guess'

  get '/secret/guess'=> 'secret#lookup'

  get '/rock_paper_scissors' => 'rockpaper#hand'

  get '/rock_paper_scissors/check' => 'rockpaper#check'

end
