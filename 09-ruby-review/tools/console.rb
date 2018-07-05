require_relative '../config/environment.rb'
require 'pry'

def reload
  load 'config/environment.rb'
end

Pry.start


spongebob= Student.new("Spongebob", "Squarepants")
patrick= Student.new("Patrick", "Star")
puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")
test1 = BoatingTest.new(spongebob, "test1", "pending", puff)
test2 = BoatingTest.new(patrick, "test2", "pending", krabs)

binding.pry
puts "hi"
