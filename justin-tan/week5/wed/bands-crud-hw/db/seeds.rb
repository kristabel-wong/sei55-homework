# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Band.destroy_all

acdc = Band.create!(
    name: 'AC/DC',
    year: 1979,
    country: 'Melbourne, Australia',
    genre: 'Rock',
    songs: 'Highway to Hell, Back to Black, Thunderstruck',
    album_number: 17,
    description: "AC/DC's mammoth power-chord roar became one of the most influential hard rock sounds of the '70s and helped define the style as the years progressed. Founded by Scottish-born brothers and , the Aussie band exploded onto the international stage in 1979 and still remained a great influence in today's rock n' roll scene.",
    image: 'https://cdn-img.scalabs.com.au/FenbwoQ0mkLR5Bx6NroOS8qI-cKqqJRbd2DGgwEtMFs/aHR0cHM6Ly9zdy10/cmlwbGVtLXByZC5z/Y2FkaWdpdGFsLmlv/L21lZGlhLzg0Nzkz/L2FjZGMtc3VwcGxp/ZWQuanBnP3ByZXNl/dD1NYWluSW1hZ2U'
)

migos = Band.create!(
    name: 'Migos',
    year: 2009,
    country: 'Atlanta, USA',
    genre: 'Hip hop, trap',
    songs: 'Stir Fry, Walk it Talk it, Slide',
    album_number: 4,
    description: 'While their rise to fame was somewhere between fast and meteoric, the Atlanta trio Migos are steeped in the Southern tradition of hip-hop groups. At the same time they sent trap genre to a new high of popularity through their enticing rhymes and strong lyrics.',
    image: 'http://musicfeeds.com.au/assets/uploads/migos-2018-supplied.jpg'

)

blackpink = Band.create!(
    name: 'Blackpink',
    year: 2016,
    country: 'Seoul, South Korea',
    genre: 'K-Pop',
    songs: "Pink Venom, As If It's Your Last, Playing with Fire",
    album_number: 3,
    description: "Blackpink is by far the most sucessful South Korean girl group internationally and have often been dubbed the as the biggest girl group in the world. Vocally combining fierce and bold rapping with frequent use of 'edgy' singing style, they have brought their band name to world stardom, even in the western world.",
    image: 'https://www.rollingstone.com/wp-content/uploads/2022/05/R1364Blackpink-Opener.jpg'
)

puts "Done! Created #{Band.count} bands"
puts Band.pluck(:name).join(', ')

##artist seed

Artist.destroy_all

Artist.create!(
    name: 'Angus Young',
    age: 67,
    nationality: 'Australian',
    hobbies: 'Smoking, shredding guitars, duck walking',
    bio: 'Co-founder, lead guitarist, songwriter and sole original member of AC/DC.',
    image: 'https://i.discogs.com/SITk5YC38UEY6SIcDrveDUW4kOcbKk1tk15ZjnI7fK0/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI3MzU0/NC0xNjExOTYyNzEx/LTg3NjguanBlZw.jpeg',
    band_id: acdc.id
)

Artist.create!(
    name: "Kiari 'Offset' Kendrell Cephus",
    age: 30,
    nationality: 'American',
    hobbies: "Smoking weed, bustin' rhymes, getting drunk",
    bio: 'Part of the rap trio Migos, also have his own solo studio albums, and husband to Cardi B.',
    image: 'https://thesource.com/wp-content/uploads/2022/01/Migos004.jpg',
    band_id: migos.id
)

Artist.create!(
    name: "Roseanne 'Rose' Park",
    age: 25,
    nationality: 'Korean-New Zealand',
    hobbies: "Playing guitar, singing, dancing",
    bio: 'One of the main singers in the group, with also some solo ventures and a model with Yves Saint Laurent',
    image: 'https://w0.peakpx.com/wallpaper/748/772/HD-wallpaper-rose-blackpink-korean-thumbnail.jpg',
    band_id: blackpink.id
)

puts "Done! created #{Artist.count} artists"
puts Artist.pluck(:name).join(', ')