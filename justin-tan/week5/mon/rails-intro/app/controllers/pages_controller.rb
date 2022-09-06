class PagesController < ApplicationController
    def say_hi

        puts "say_hi method was called"

    end 

    def haha
        @page_title = 'get ready for lafs'

    end

    def greet
        @number = rand 100
        @name = params[:person]
    end

end