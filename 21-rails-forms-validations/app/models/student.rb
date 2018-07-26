class Student < ApplicationRecord
  belongs_to :cohort

  def something_else
    nil
  end

  # can be called in the form builder
  def test_method
    "Here is the sample input"
  end
end
