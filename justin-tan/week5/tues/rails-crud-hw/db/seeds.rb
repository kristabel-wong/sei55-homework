# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.destroy_all 

Restaurant.create!(
    name: 'Carlton Wine Room',
    chef: 'Conor Pomroy',
    location: 'Carlton',
    cuisine: 'Contemporary European',
    year: 2018,
    price_range: 50,
    description: 'Elegant take on modern Australian food with a European influence that works well with wine and is seasonal.',
    restaurant_img: 'app/assets/images/carlton-wine-room.jpg',
    dish: 'Anchovy, fried bread, ricotta, pickled cucumber',
    dish_img: 'app/assets/images/carlton-wine-room-dish.jpg'
    
)

Restaurant.create!(
    name: 'Aru',
    chef: 'Khanh Nguyen',
    location: 'Melbourne',
    cuisine: 'Modern Asian',
    year: 2020,
    price_range: 70,
    description: "Crafted cleverly by combining familiar Southeast-Asian flavours, native Australian ingredients and ancient techniques, which results in absolute delishness",
    restaurant_img: 'app/assets/images/aru.jpg',
    dish: 'Flavors of Banh Mi',
    dish_img: 'app/assets/images/aru-dish.jpg'

)

Restaurant.create!(
    name: 'Embla',
    chef: 'Dave Verheul',
    location: 'Melbourne',
    cuisine: 'Contemporary...anything',
    year: 2015,
    price_range: 60,
    description: "An uncomplicated approach to food and wine, but yet the quality of it's collaboration remained unsurpassed. What could go wrong with small plates focus on flame grilling and fermenting, and a good glass of wine?",
    restaurant_img: 'app/assets/images/embla.jpg',
    dish: 'Half Roast Chook, roasted garlic',
    dish_img: 'app/assets/images/embla-dish.jpg'

)

puts "Done! created #{Restaurant.count} restaurants"

puts Restaurant.pluck(:name).join(', ')