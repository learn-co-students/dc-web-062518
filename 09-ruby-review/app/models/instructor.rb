class Instructor

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  #take in a student name and test name and return status failed (change test.status = 'failed')
  def fail_student(input_full_name, input_test_name)
    student = Student.find_student(input_full_name)
    boattest = BoatingTest.all.find { |boattest|
      boattest.test_name == input_test_name && boattest.student.full_name == input_full_name
    }
    boattest.status = 'failed'
  end

end
