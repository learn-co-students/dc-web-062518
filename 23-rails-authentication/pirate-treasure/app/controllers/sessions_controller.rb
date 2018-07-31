class SessionsController < ApplicationController
  skip_before_action :check_authentication, only: [:new, :create]

  def new
  end

  def create
    # authenticate the user
    # use the params
    # find the user
    unauthenticated_user = User.find_by(name: params[:name])
    @user = unauthenticated_user.authenticate(params[:password])
    if unauthenticated_user && @user
      # authenticate them
      # render html: "Worked"

      # set cookies user id
      # instead of using cookies, we can use the session!
      session[:user_id] = @user.id
      redirect_to user_treasures_path(@user)
    else
      flash[:alert] = "Incorrect username or password"
      redirect_to sign_in_path
    end
  end

  def destroy
    reset_session
    redirect_to sign_in_path
  end
end
