class StudentsController < ApplicationController
  # GET /students/6365  => show action, params[:id] = 6365
  before_action :set_student, only: [:show, :edit, :update, :destroy]

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
    @cohorts = Cohort.all.sort_by { |c| c.name }
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
    @cohorts = Cohort.all.sort_by { |c| c.name }
  end

  def update
    @student.update(student_params)
    if @student.errors.any?
      render :edit
    else
      redirect_to student_path(@student)
    end
  end

  def destroy
    @student.delete
    redirect_to students_path
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
    params.require(:student).permit(:name, :cohort_id)
  end
end
