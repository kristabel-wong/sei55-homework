#To actually run these lines, and create items in the database you need to run the terminal 

Planet.destroy_all  #removes all the rows


Planet.create!(
    name: 'Earth',
    image_url: 'https://scitechdaily.com/images/earth-losing-mass.jpg',
    orbit: 1,
    mass: 1,
    moons: 1
)


Planet.create!(
    name: 'Mars',
    image_url: 'https://space-facts.com/wp-content/uploads/mars.jpg',
    orbit: 2,
    mass: 3,
    moons: 4
)

Planet.create!(
    name: 'Venus',
    image_url: 'https://cdn.mos.cms.futurecdn.net/pNX8eVGowB6WT8tyrTMufk-1200-80.jpg',
    orbit: 0.5,
    mass: 4,
    moons: 4
)

Planet.create!(
    name: 'Jupiterr',
    image_url: 'https://www.bu.edu/files/2022/01/feat-PIA21984_orig.jpg',
    orbit: 0.3,
    mass: 10_000,
    moons: 12
)

puts "Done! Created #{Planet.count} planets"
puts Planet.pluck(:name).join(',')