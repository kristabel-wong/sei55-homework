# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Source: https://gist.github.com/textchimp/378e0b7fff224fffe56402e7159f52c3

Games on Rails

Games on Rails is a web application with three games

    Magic 8 Ball
    Secret Number
    Rock Paper Scissors

You should create a new controller for each game, to practice making controllers!

Magic 8 Ball

    Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer. You can use a standard list of 8 ball answers like this one
        i.e. /magic8ball/Why do I have to be harassed into submitting homework?

Secret Number

    Users click a number between 1 and 10 (or type a number into a form input). The controller tells the user whether they guessed correctly. As with the calculator exercise, this game will need 2 routes: a form route, and a submit route.

Rock Paper Scissors

    Create a route like /rock_paper_scissors/:throw
    Use params[:throw] as a user's choice
    Compare the 2! If users throw matches the apps throw, the user wins.
    i.e. If a user throws rock (/rock_paper_scissors/rock) and the server picks rock player wins! (Yes, I know that is not how RPS works) Bonus: Set the win or lose condition based on the real rules of Rock Paper Scissors. What is the simplest way to represent these rules in code? Maybe it's a nested hash!!

