class Book < ActiveRecord::Base
  belongs_to :author

  # def author=(author)
    # self.author_id = author.id
  # end
end
