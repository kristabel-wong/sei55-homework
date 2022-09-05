class Zoo < ApplicationRecord
    # Tell AR to look at the 'zoo_id' column of the 'animals' table, to find out which works belong to a certain zoo.
    has_many :animals
end
