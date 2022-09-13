# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

musk = User.create!(
    
    last_name: 'Musk',
    first_name: 'Elon',
    age: 50,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/452px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    bio: 'I am just a poor billionaire'

)

bezos =  User.create!(
    
    last_name: 'Bezos',
    first_name: 'Jeff',
    age: 55,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
    bio: "Don't judge me, love me."

)

zuckerberg= User.create!(
    
    last_name: 'Zuckerberg',
    first_name: 'Mark',
    age:38,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    bio: "I am NOT a robot.....beep"

)

gates = User.create!(
    
    last_name: 'Gates',
    first_name: 'Bill',
    age:56,
    profile_img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/800px-Bill_Gates_2017_%28cropped%29.jpg',
    bio: "I should not be grouped in with these other guys!"

)


puts "Done...I have added #{User.count}  users."
puts User.pluck( :last_name ).join(', ')

#======= Post Seeds ============#

Post.destroy_all

Post.create!(

    title: 'I went to the moon!',
    link: 'www.nasa.com',
    image: 'https://www.placecage.com/c/200/300',
    votes: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: musk.id
)


Post.create!(

    title: 'Stocks Up!',
    link: 'www.nasdaq.com',
    image: 'https://www.placecage.com/c/200/300',
    votes: 10,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: musk.id

)

Post.create!(

    title: 'Should we help others?',
    link: 'www.redcross.org',
    image: 'https://www.placecage.com/c/200/300',
    votes: -1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: gates.id
    
)

Post.create!(

    title: 'DAE get imposter syndrome?',
    link: 'www.headspace.org',
    image: 'https://www.placecage.com/c/200/300',
    votes: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: bezos.id
)

puts "Done...I have added #{Post.count}  posts."
puts Post.pluck( :title ).join(', ')