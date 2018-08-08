class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.text :description
      t.text :distance_fr_earth

      t.timestamps
    end
  end
end
