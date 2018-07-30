class TreasuresController < ApplicationController
  before_action :set_user
  before_action :set_treasure, only: [:show, :edit, :update, :destroy]

  def index
    @treasures = @user.treasures
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def set_user
    @user = User.find(params[:user_id])
  end

  def set_treasure
    @treasure = @user.treasures.find(params[:id])
  end
end
