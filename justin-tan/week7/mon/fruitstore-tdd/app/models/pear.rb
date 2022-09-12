
# Single Table Inheritance: "a Pear is a kind of Fruit"
# We want to use the 'fruits' table to store Pears, Apples, Bananas, etc, ie. not have to make a unique table for each of these..
# and we might want all these kinds of fruits to share some methods of the base class Fruit
class Pear < Fruit

    validates :name, presence: true, uniqueness: true

    def squishy?
        true # this is a hardcoded return vale
    end

end