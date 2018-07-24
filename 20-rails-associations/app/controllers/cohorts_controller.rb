class CohortsController < ApplicationController
  def index
    @cohorts = Cohort.all
  end

  def show
    @cohort = Cohort.find(params[:id])
  end

  def new
    # sometimes nothing here - if we aren't using @cohort in the view!
    @cohort = Cohort.new
  end

  def create
    @cohort = Cohort.new(cohort_params)

    # run the sql to persist the cohort
    if @cohort.save
      redirect_to '/cohorts'
    else
      # redirect_to new_cohort_path # - doesn't work, because it makes a new GET request to the new path
      render :new
    end
  end

  def edit
    @cohort = Cohort.find(params[:id])
  end

  def update
    @cohort = Cohort.find(params[:id])

    if @cohort.update(cohort_params)
      redirect_to "/cohorts/#{@cohort.id}"
    else
      render :edit
    end
  end

  # controller action is called destroy
  def destroy
    Cohort.destroy(params[:id])
    redirect_to cohorts_path
  end

  private

  def cohort_params
    params.require(:cohort).permit(:name)
  end
end
