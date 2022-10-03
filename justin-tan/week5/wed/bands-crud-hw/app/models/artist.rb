class Artist < ApplicationRecord
    belongs_to :band#, required: false
end
