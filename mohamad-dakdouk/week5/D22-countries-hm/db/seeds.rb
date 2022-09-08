# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all

Country.create(
    name: 'Australia',
    location:'Pacific Ocean',
    language: 'English',
    population: 25000000,
    vist: 1, 
    image_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D823/production/_119013355_gettyimages-1227936086.jpg'
)

Country.create(
    name: 'Eygpt',
    location:'North Africa',
    language: 'Arabic',
    population: 102000000,
    vist: 1, 
    image_url: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--WxWCMQlD--/c_fill,h_580,w_860/v1/EducationHub/photos/women-and-children-on-the-banks-of-the-nile.webp'
)

Country.create(
    name: 'Italy',
    location:'South Europe',
    language: 'Italian',
    population: 59000000,
    vist: 1, 
    image_url: 'https://a.cdn-hotels.com/gdcs/production22/d554/0eef04a7-c6d5-4d50-bce9-c8fa27187158.jpg?impolicy=fcrop&w=800&h=533&q=medium'
)

puts "Done! Created #{Country.count} countries"
puts Country.pluck(:name).join(',')