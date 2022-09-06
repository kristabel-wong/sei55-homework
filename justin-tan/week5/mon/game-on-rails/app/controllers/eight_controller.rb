class EightController < ApplicationController

    def query
        
    end
    
    def respond
        
        responses = [
            "No way and no way",
            "Lol nope",
            "The answer to that is just plain no",
            "Hmm maybe? Don't know",
            "Welll yes? No? Not sure",
            "Ehhh ask again later. Idk",
            "Absolutely! Yes yes!",
            "Of course! Straight yes!",
            "Awww hell yisssss"
        ]
    
        @respond = responses[rand responses.length]
    
        @query = params[:query]

    end

end

