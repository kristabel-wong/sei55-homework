Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#welcome'

  get '/eight' => 'eight#query'

  get '/eight/respond' => 'eight#respond'

  get '/secret' => 'secret#choose'

  get '/secret/outcome' => 'secret#outcome'

  get '/rps/' => 'rps#decide'

  get '/rps/:throw' => 'rps#outcome'

end
