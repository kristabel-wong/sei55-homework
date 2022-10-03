class ApplicationController < ActionController::Base
    # before actually running the 'home' or 'faq' action as the handler for a route, run our 'fetch_user function to define @current_user (or leave it nil)
    #
    #BECAUSE this before_action is set up in the parent class
    # ApplicationController which every controller inherits from,
    #this method will be run automatically before any controller is run
    before_action :fetch_user, #only , except



    def fetch_user
        # check if the user is logged in
        if session[:user_id].present?
          @current_user = User.find_by id: session[:user_id]
        end #login check
    
        # If e.g. you have re-seeded since logging in, session[:user_id] will be defined and contain and ID, but it will be an invalid ID, ie the find_by above will have returned nil.
    
        unless @current_user.present?
          session[:user_id] = nil #force logout of invalid ID
        end
    
        # session[:user_id] = nil unless @current_user.present?
      end

      def check_if_logged_in
        # If the current request (which could be any action of any controller is coming from a user who is NOT logged in, redirect them to the login page)
        # Any controller action that should be available only to logged-in users can specify this method as a before_action at the top of the controller class to protect access to those actions
        # ie. we can lock down specific routes

        unless @current_user.present?
          flash[:error] = 'You must be logged in to perform that action'
          redirect_to login_path
        end # unless

      end # check_if_logged_in



end
