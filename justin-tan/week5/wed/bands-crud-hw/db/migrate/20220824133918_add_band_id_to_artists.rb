class AddBandIdToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :band_id, :integer
  end
end
