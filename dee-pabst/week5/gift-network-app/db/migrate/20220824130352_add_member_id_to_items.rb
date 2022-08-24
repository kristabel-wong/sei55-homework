class AddMemberIdToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :member_id, :integer
  end
end
