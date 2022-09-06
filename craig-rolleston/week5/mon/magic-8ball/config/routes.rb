Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'magicball#welcome'
  # Magic 8-Ball ===============================
  # 1.
  get '/magicball' => 'magicball#ball'

  get '/magicball/answer' => 'magicball#answer'


  # Secret Number =============

  # 1. form - type or click number
  get '/secretnumber' => 'secretnumber#form'

  # 2. correct or not?
  get '/secretanswer' => 'secretnumber#secretanswer'


  # Rock, Paper, Scissors =======

  # 1. form - select weapon
  get '/rps' =>
  'rps#form'

  # 2. who wins?
  get '/rps/result' => 'rps#result'



end
