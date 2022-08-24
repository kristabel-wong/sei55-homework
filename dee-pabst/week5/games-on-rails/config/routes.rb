Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'games#welcome'

  # magic 8 ball
  get '/magic8ball/:question' => 'magic8ball#question'

  # Secret number
  get '/secretnumber' => 'secretnumber#guess'

  # Secret number result
  get '/secretnumber/resolve' => 'secretnumber#resolve'

end # no routes below here