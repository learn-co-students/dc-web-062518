class BoatingTest

  @@all = []
  attr_reader :test_name, :student
  attr_accessor :status

  #student is an Object, instructor is an Object
  def initialize(student, test_name, status, instructor)
    @student = student
    @test_name = test_name
    @status = status
    @instructor = instructor
    @@all << self
  end

  def self.all
    @@all
  end
end
