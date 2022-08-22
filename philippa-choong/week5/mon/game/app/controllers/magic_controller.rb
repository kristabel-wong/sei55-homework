class MagicController < ApplicationController

    def welcome
    end

    def search_form
    end

    def magic_results

        #Create an array of 20 messages for magic 8 ball script to randomly choose from
        
       array_magic_answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
        ]
        # Get random number from 0 to 19 to use it as an index in the array to get the message to be texted
        def answer_magic(message)
            rand_number = Random.new
            rand_number = rand(0 .. 19)
            answer = message[rand_number]
        end
        # Call method to select random answer
        @answer = answer_magic(array_magic_answers)

    
        
    end

end 