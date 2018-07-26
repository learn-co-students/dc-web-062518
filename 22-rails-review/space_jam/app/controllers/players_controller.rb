class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :edit, :destroy, :update]

  def index
    @players = Player.all
  end

  def show
  end

  def new
    @player = Player.new
  end

  def create
    @player = Player.new(player_params)
    if @player.valid?
      @player.save
      redirect_to player_path(@player)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @player.update(player_params)
      redirect_to player_path(@player)
    else
      render :edit
    end

  end

  def destroy
    @player.destroy
    redirect_to players_path
  end

  private
  def player_params
    params.require(:player).permit(:name, :number, :team_id)
  end

  def set_player
    @player = Player.find(params[:id])
  end
end
