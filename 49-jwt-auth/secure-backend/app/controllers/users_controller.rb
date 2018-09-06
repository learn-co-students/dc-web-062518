class UsersController < ApplicationController
  def profile
    if current_user
      # show the profile
    else
      redirect to: :login
    end
  end

  # admin only
  def manage_accounts
    if current_user && current_user.role == 'admin'
      # show the manage_accounts
    else
      # render not authorized
    end
  end
end
