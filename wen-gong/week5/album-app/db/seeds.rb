# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Singer.destroy_all

justin = Singer.create!(
    name: 'Justin Bieber',
    born: 'Justin Drew Bieber
    March 1, 1994 (age 28)
    London, Ontario, Canada',
    website: 'justinbiebermusic.com',
    image: 'https://data.whicdn.com/images/351807967/original.jpg'
)

ed = Singer.create!(
    name: 'Ed Sheeran',
    born: 'Edward Christopher Sheeran
    17 February 1991 (age 31)
    Halifax, West Yorkshire, England',
    website: 'edsheeran.com',
    image: 'https://data.whicdn.com/images/327603222/original.jpg'
)

puts "Done! Created #{ Singer.count } singers:"
puts Singer.pluck( :name ).join(", ")

###Album seeds
####################

Album.destroy_all

Album.create!(
    name: 'Justice',
    released: '2021',
    genre: 'Pop',
    length: '45',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png',
    singer_id: justin.id
)

Album.create!(
    name: 'Purpose',
    released: '2015',
    genre: 'Pop R&B soul EDM dance-pop',
    length: '48',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png',
    singer_id: justin.id
)


Album.create!(
    name: '÷',
    released: '2017',
    genre: 'Pop',
    length: '46',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
    singer_id: ed.id
)

puts "Done! Created #{ Album.count } Albums:"
puts Album.pluck( :name ).join(', ')