class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|

      t.string  :last_name
      t.string  :first_name
      t.integer :age
      t.text    :profile_img_url
      t.text    :bio

    end
  end
end
