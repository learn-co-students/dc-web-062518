class UsersController < ApplicationController

  # ensure that you are authenticated
  # before action checks that we are authenticated
  def show
    # show the profile
    render json: { email: current_user.email, name: current_user.name }
  end

  # admin only
  # def manage_accounts
  #   if current_user && current_user.role == 'admin'
  #     # show the manage_accounts
  #   else
  #     # render not authorized
  #   end
  # end
end
