
Director.destroy_all

david = Director.create!(
    name: 'David Fincher',
    Born_year: 1962,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/David_Fincher_2010_New_York_Film_Festival_-_02_%28cropped%29.jpg/800px-David_Fincher_2010_New_York_Film_Festival_-_02_%28cropped%29.jpg'
)

jonathan = Director.create!(
    name: 'Jonathan Demme',
    Born_year: 1968,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/JonDemme-by-JSDwyer.jpg/800px-JonDemme-by-JSDwyer.jpg'
)


tarsem = Director.create!(
    name: 'Tarsem Singh',
    Born_year: 1990,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Tarsem_Singh_at_WonderCon_2011.jpg'
)


puts "Done! Created #{Director.count}"
puts Director.pluck(:name).join(', ')


Movie.destroy_all

Movie.create!(
    name: 'The Silence of the Lambs',
    release_year: 1991,
    starring: 'Jodie Foster',
    running_time: 118,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg',
    director_id: jonathan.id
)

Movie.create!(
    name: 'Seven',
    release_year: 1995,
    starring: 'Brad Pitt',
    running_time: 127,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg',
    director_id: david.id
)

Movie.create!(
    name: 'The Fall',
    release_year: 2006,
    starring: 'Lee Pace',
    running_time: 117,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/2/26/Fall_ver2.jpg',
    director_id: tarsem.id
)

Movie.create!(
    name: 'The Social Network',
    release_year: 2010,
    starring: 'Jesse Eisenberg',
    running_time: 120,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png',
    director_id: david.id
)

puts "Done! Created #{ Movie.count } movies"
puts Movie.pluck( :name ).join(', ')



