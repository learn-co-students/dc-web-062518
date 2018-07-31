class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :check_authentication

  private

  def check_authentication
    if !user_is_signed_in
      flash[:alert] = "you need to sign in to view that"
      redirect_to sign_in_path
    end
  end

  def user_is_signed_in
    if params[:user_id]
      # Authorization
      session[:user_id] == params[:user_id].to_i && @user = User.find(session[:user_id])
    else
      @user = User.find(session[:user_id])
    end
  end
end
