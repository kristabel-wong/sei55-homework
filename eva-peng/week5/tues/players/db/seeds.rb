Player.destroy_all 

Player.create!(
    name: 'Rafael Nadal',
    sex: 'Male',
    dob: '3 June 1986',
    country: 'Spain',
    grand_slam: 22,
    highest_ranking: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg/800px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg'
)

Player.create!(
    name: 'Novak Djokovic',
    sex: 'Male',
    dob: '22 May 1987',
    country: 'Serbia',
    grand_slam: 21,
    highest_ranking: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Novak_Djokovi%C4%87_Trophy_Wimbledon_2019-croped_and_edited.jpg'
)

Player.create!(
    name: 'Serena Williams',
    sex: 'Female',
    dob: '26 September 1981',
    country: 'USA',
    grand_slam: 23,
    highest_ranking: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Serena-Smiling-2020.png/800px-Serena-Smiling-2020.png'
)

puts "Done! Created #{Player.count} players."
puts Player.all.pluck(:name).join(', ')



