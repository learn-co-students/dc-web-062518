class CatsController < ApplicationController
  #get all fetch
  def index
    render json: Cat.all
  end

  #get one fetch
  def show
    render json: Cat.find(params[:id])
  end

  #post fetch
  def create
    render json: Cat.create(cat_params)
  end

  def cat_params
    params.require(:cat).permit(:name, :breed, :age, :quote)
  end

  #patch fetch
  def update
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  #delete fetch
  def destroy
    render json: Cat.find(params[:id]).destroy
  end

end
