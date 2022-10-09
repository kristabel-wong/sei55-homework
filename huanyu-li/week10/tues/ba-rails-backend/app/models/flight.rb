class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations
  has_many :users, through: :reservations

  def departure_date_formatted
    self.departure_date.strftime '%d %b %Y, %H:%M'
  end


end
