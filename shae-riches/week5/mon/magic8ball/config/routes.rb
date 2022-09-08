Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'octo_magic#greetings'

  get '/octo_magic/greetings_1' => 'octo_magic#greetings_1' 

  get '/octo_magic/greetings_2' => 'octo_magic#greetings_2' 
  
  get '/octo_magic/greetings_3' => 'octo_magic#greetings_3' 

  get '/octo_magic/greetings_4' => 'octo_magic#greetings_4'

  get '/octo_magic/greetings_5' => 'octo_magic#greetings_5' 

  get '/octo_magic/greetings_6' => 'octo_magic#greetings_6' 

  get '/octo_magic/greetings_7' => 'octo_magic#greetings_7' 

  get '/octo_magic/ask_octo' => 'octo_magic#question' 
  
  get 'octo_magic/reveals_answer' => 'octo_magic#answer'

   

end


# Magic 8 Ball

#     Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer. You can use a standard list of 8 ball answers like this one
#         i.e. /magic8ball/Why do I have to be harassed into submitting homework?
