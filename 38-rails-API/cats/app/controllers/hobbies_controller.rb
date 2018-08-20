class HobbiesController < ApplicationController
  #get all fetch
  def index
    render json: Hobby.all
  end

  #get one fetch
  def show
    render json: Hobby.find(params[:id])
  end
end
