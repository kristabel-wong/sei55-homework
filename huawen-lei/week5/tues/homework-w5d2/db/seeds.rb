
Movie.destroy_all

Movie.create!(
    name: 'The Silence of the Lambs',
    release_year: 1991,
    director: 'Jonathan Demme',
    starring: 'Jodie Foster',
    running_time: 118,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg'
)

Movie.create!(
    name: 'Seven',
    release_year: 1995,
    director: 'David Fincher',
    starring: 'Brad Pitt',
    running_time: 127,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg'
)

Movie.create!(
    name: 'The Fall',
    release_year: 2006,
    director: 'Tarsem Singh',
    starring: 'Lee Pace',
    running_time: 117,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/2/26/Fall_ver2.jpg'
)

puts "Done! Created #{ Movie.count } movies"
puts Movie.pluck( :name ).join(', ')


