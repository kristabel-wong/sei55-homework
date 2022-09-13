
class MagicballController < ApplicationController

    def welcome
    end #welcome

    def magicball
    end #magic8ball

    def answer

        @question = params[:question]

        options = [
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
        ] # options

        random = rand 20
        @solution = options[random]

    end #answer


end #magicballcontroller