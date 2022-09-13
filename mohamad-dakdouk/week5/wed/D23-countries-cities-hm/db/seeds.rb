# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all

aust = Country.create(
    name: 'Australia',
    location:'Pacific Ocean',
    language: 'English',
    population: 25000000,
    vist: 1, 
    image_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D823/production/_119013355_gettyimages-1227936086.jpg'
)

egypt = Country.create(
    name: 'Eygpt',
    location:'North Africa',
    language: 'Arabic',
    population: 102000000,
    vist: 1, 
    image_url: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--WxWCMQlD--/c_fill,h_580,w_860/v1/EducationHub/photos/women-and-children-on-the-banks-of-the-nile.webp'
)

italy = Country.create(
    name: 'Italy',
    location:'South Europe',
    language: 'Italian',
    population: 59000000,
    vist: 1, 
    image_url: 'https://a.cdn-hotels.com/gdcs/production22/d554/0eef04a7-c6d5-4d50-bce9-c8fa27187158.jpg?impolicy=fcrop&w=800&h=533&q=medium'
)

puts "Done! Created #{Country.count} countries"
puts Country.pluck(:name).join(',')

#######################################
City.destroy_all

City.create!(
    name:'Sydney',
    capital: 'NSW',
    population: 5000000,
    attractions: 'Sydney Harbour',
    image:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRLLL35uofakoi43tVjzlWjbtisa6-4XBoJQH5EtirNAgJU61yeVMjgzRZaLk7V8T4s',
    country_id: aust.id


)

City.create!(
    name:'Melbourne',
    capital:  'Victoria',
    population: 5000000,
    attractions: 'City Walk',
    image:'https://www.travelandleisure.com/thmb/Bn5wLoW1H1mO838JBtbqAfPeXcg=/735x0/melbourne-australia-MELBOURNETG0721-62ff9ae2570945ec80160ddf46ee7cb1.jpg',
    country_id: aust.id

)

City.create!(
    name:'Cairo',
    capital:  'Capital North',
    population: 25000000,
    attractions: 'Giza',
    image:'https://media.istockphoto.com/photos/mosque-and-pyramids-picture-id1174818077?k=20&m=1174818077&s=612x612&w=0&h=vAutxzWDTokCJkf6010sguiHP6yc8Nzt8qePG9DEew0=',
    country_id: egypt.id

    
)

City.create!(
    name:'Alexandria',
    capital: 'North Mediterranean Port',
    population: 5000000,
    attractions: 'Lighthouse of Alexandria',
    image:'https://miro.medium.com/max/1400/1*GeoeYveViehYfUBCu5limw.jpeg',
    country_id: egypt.id

    
)
City.create!(
    name:'Rome',
    capital:  'South Captial',
    population:  3000000,
    attractions: 'Colosseum', 
    image:'https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    country_id: italy.id

)
City.create!(
    name:'Milan',
    capital:  'North Lombardy',
    population: 1300000,
    attractions: 'Gothic Duomo Cathederal', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHeBO7P_t3w7cb3t2Q7Zk2S7jNtQC1-Bz0g&usqp=CAU',
    country_id: italy.id
)

puts "Done! Created #{ City.count } City:"
puts City.pluck( :name ).join(',')