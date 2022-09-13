# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all 

Album.create!(
    name: 'Justice',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png',
    released: '19 March, 2021',
    genre: 'Pop',
    length: 45

)


Album.create!(
    name: 'Purpose',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png',
    released: '13 November, 2015',
    genre: 'Pop R&B soul EDM dance-pop', 
    length: 48

)

Album.create!(
    name: '÷',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
    released: '3 March 2017',
    genre: 'Pop',
    length: 46

)


puts "Done! Created #{ Album.count } albums."
puts Album.pluck( :name ).join(', ')

