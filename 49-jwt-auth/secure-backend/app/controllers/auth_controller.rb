class AuthController < ApplicationController
  # sessions - no longer what we want to use
  # what is a session?
      # session[:user_id] = user.id # something
      # redirect


  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = generate_token(user)
      render json: { token: token }, status: 200
    else
      # render "Failed" status: 404
    end
  end

  private
  def hmac_secret
    'super_secret'
  end

  def generate_token(user)
    payload = { user_id: user.id }
    JWT.encode payload, hmac_secret, 'HS256'
  end

  def decode_token(token)
    decoded = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
    decoded[0]
  end
end
