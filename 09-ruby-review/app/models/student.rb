require 'pry'
class Student

  @@all = []
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @@all << self
  end

  def self.all
    @@all
  end

  #return an array of all of the students full names
  def self.full_names
    @@all.map do |student|
      student.full_name
    end
    # self.all.map do |student|
    #   "#{student.first_name} #{student.last_name}"
    # end
  end

  #initialize a new boating test with a student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
  def add_boating_test(test_name, status, instructor)
    BoatingTest.new(self, test_name, status, instructor)
  end

  #take in a student full name and output that student instance (Object)
  def self.find_student(input_full_name)
    self.all.find { | student |
      student.full_name == input_full_name
    }
    # self.all.each do |student|
    #   if student.full_name == input_full_name
    #     return student
    #   end
    # end
  end

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

end
