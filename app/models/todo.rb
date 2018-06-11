class Todo < ApplicationRecord
  validates_presence_of :title, :body
  validates_inclusion_of :done, in: [true, false]

  has_many :steps
end
