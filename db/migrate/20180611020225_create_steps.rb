class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.integer :todo_id, null: false
      t.string :title, null: false
      t.text :body
      t.boolean :done, null: false, default: false

      t.timestamps
    end
  end
end
