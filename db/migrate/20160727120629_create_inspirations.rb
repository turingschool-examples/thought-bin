class CreateInspirations < ActiveRecord::Migration
  def change
    create_table :inspirations do |t|
      t.string :name
      t.string :link
      t.boolean :inspired

      t.timestamps null: false
    end
  end
end
