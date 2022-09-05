# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Animal.destroy_all 

Animal.create!(

    name: 'Blue-Footed Booby',
    image_url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2017/08/07135450/44955-1396987470_1725918041-900-69c7f053e3-1484729993.jpg.webp',
    species: 'Marine Bird',
    region: 'Eastern Pacific Ocean',
    life_span: '17'

)

Animal.create!(

    name: 'Sparklemuffin Spider',
    image_url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2019/10/2/0/CI_JurgenOtto_Sparklemuffin_JSWeirdAnimals.jpg.rend.hgtvcom.966.725.suffix/1570022084418.jpeg',
    species: 'Arachnid',
    region: 'South-East Queensland, Australia',
    life_span: '2'

)

Animal.create!(

    name: 'Pangolin',
    image_url: 'https://travel.home.sndimg.com/content/dam/images/travel/stock/2019/10/3/GettyImages-1125626951.jpg.rend.hgtvcom.966.725.suffix/1570129324378.jpeg',
    species: 'Mammal',
    region: 'Central and West Africa, India and Southeast Asia',
    life_span: '4'

)

Animal.create!(

    name: 'Bush Viper',
    image_url: 'https://historydaily.org/content/109135/4bf906582f2318a8c69293cb9c4c4a6f.jpg',
    species: 'Reptile',
    region: 'Central Africa',
    life_span: '15'

)

Animal.create!(

    name: 'Mantis Shrimp',
    image_url: 'https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg',
    species: 'Crustacean',
    region: 'Indian and Pacific Ocean',
    life_span: '20'

)

puts "Done! Created #{ Animal.count } ."
puts Animal.pluck( :name ).join(', ')