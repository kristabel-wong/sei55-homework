class SessionController < ApplicationController
  def new
  end

  def create
    # raise 'hell'

    #1. Check that the email address entered is actually in the DB
    user = User.find_by email: params[:email]

    #2. Did we actually find a user with that email address (or was is nil),
    #AND if we did find a user, is the password entered the correct password for this emailaddress?
    # Note that .authenticate will encrypt the password entered via the form
    # on the fly, and compare it to the user.password_digest
    if user.present? && user.authenticate(params[:password])

      #credentials are correct- successful login

      # 'session' is a special Rails hash which remembers its contents
      # across page reloads - recall that most variables in our controllers
      # are not shared across reloads in this way
      # The way Rails causes this session hash to be remembered is by 
      # storing it in an http cookie i.e. ask the browser to remember
      # something via response header for this page load
      # For every subsequent request from the browser, it will represent
      # that cookie to the server as a request header

      session[:user_id] = user.id # ALSO do this when creating a new user!

      redirect_to root_path # back to / 

    else

      # either user was nil (no account with that email address),
      # or the password given did not, when encrypted, match the 
      # password digest stored for that user account

      # The special variable 'flash' is abit like 'session' variable in that is uses HTTP cookies to persist some data ACROSS page loads - but in this case, the data only persists for one more page loa, so you can show an error on the login page after we redirect here, but the error doesn't stick around forever - if you reload the page again, the flash will be cleared.
      flash[:error] = 'Invalid email address or password'

      redirect_to login_path # try again TODO: show error message

    end #else


  end # create

  def destroy
    session[:user_id] = nil
    redirect_to login_path

  end
end
