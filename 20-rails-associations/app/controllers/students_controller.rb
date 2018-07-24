class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update, :delete]

  def index
    # we could use this in the view - technically
    # don't access the database in the view!
    @students = Student.first(100)
  end

  def show
     # @student = Student.find(params[:id]) - covered by our before_action
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.create(student_params)
    if @student.errors.any?
      render :new
    else
      redirect_to student_path(@student)
    end
  end

  def edit

  end

  def update

  end

  def delete

  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    # {
      # name: params[:student][:name],
      # cohort_id: params[:student][:cohort_id]
    # }
    params.permit(student: [:name, :cohort_id])[:student]
  end
end
