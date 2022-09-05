# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(
    
    last_name: 'Musk',
    first_name: 'Elon',
    age: 50,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/452px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    bio: 'I am just a poor billionaire'

)

User.create!(
    
    last_name: 'Bezos',
    first_name: 'Jeff',
    age: 55,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
    bio: "Don't judge me, love me."

)

User.create!(
    
    last_name: 'Zuckerberg',
    first_name: 'Mark',
    age:38,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    bio: "I am NOT a robot.....beep"

)

puts "Done...I have added #{User.count}  users."
puts User.pluck( :last_name ).join(', ')