class Step < ApplicationRecord
  validates_presence_of :todo_id, :title
  validates_inclusion_of :done, in: [true, false]

  belongs_to :todo
end
