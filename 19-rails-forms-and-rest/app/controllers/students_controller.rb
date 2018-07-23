class StudentsController < ApplicationController
  def index
    # we could use this in the view - technically
    # don't access the database in the view!
    @students = Student.first(100)
  end

  def show
    @student = Student.find(params[:id])
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.create(student_params)
    redirect_to student_path(@student)
  end

  def edit

  end

  def update

  end

  def delete

  end

  private
  def student_params
    {
      name: params[:student][:name],
      cohort: params[:student][:cohort]
    }
  end
end
