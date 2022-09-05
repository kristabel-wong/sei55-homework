class Magic8ballController < ApplicationController

    def magic_form
    end # magic_form

    def magic_results
        @question = params[:question]

        magic_num = rand
        if magic_num < 0.5
            @magic_answer = 'Yes definitely.'
        else
            @magic_answer = 'Outlook not so good.'
        end

        @magic_number

    end # magic_results


end # class Magic8ballController