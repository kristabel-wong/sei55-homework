# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.create!(
    name:'Angel wing begonia',         
    image_url:  'https://www.thespruce.com/thmb/aGjCxEd-F4Zr1iyw8amlP_IjsjI=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KaraRileyBegoniaMaculata-23H-8652c7a7ce084592a9a386e9d5927acf.jpg',
    sun_exposure:'Partial shade',
    native_area:'South America',
    mature_size:80
)

Plant.create!(
    name:'Gloxinia',         
    image_url: 'https://www.thespruce.com/thmb/y-2SdviiPkrszMwcLASJYfdb6pE=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-senningia-hybrids-indoors-1902487-hero-0cfa2685cbbf41159fe142ca5ee67bf3.jpg',
    sun_exposure:'Partial to full shade', 
    native_area:'South America',
    mature_size: 30
)

Plant.create!(
    name:'Round-leaved calathea',         
    image_url:'https://www.thespruce.com/thmb/8C2Xrr5lsNlNkjKZrFfd4TJk7Vo=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/calathea-orbifolia-growing-guide-5270824-hero-2a3b8667f05b40a49b27da573d2486fb.jpg',
    sun_exposure:'Partial shade', 
    native_area:'South America',
    mature_size: 80
)

Plant.create!(
    name:'Alocasia silver dragon',         
    image_url:'https://www.thespruce.com/thmb/z4YcSSTJrfy7WzJXhVBjvcQfoQo=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1366397696-85f3109698e44a7e81e727216037913b.jpg',
    sun_exposure:'Partial shade', 
    native_area:'South East Asia',
    mature_size: 90
)

puts "Done! Created #{ Plant.count } plants"
puts Plant.pluck( :name ).join(', ')