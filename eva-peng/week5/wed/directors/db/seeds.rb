
Director.destroy_all

steven = Director.create!(
   name: 'Steven Spielberg',
   nationality: 'USA',
   dob: '1946/12/18', 
   award: 152,
   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Steven_Spielberg_%2836057844341%29_%28cropped%29.jpg/200px-Steven_Spielberg_%2836057844341%29_%28cropped%29.jpg'
)

 james = Director.create!(
    name: 'James Cameron',
    nationality: 'Canada',
    dob: '1954/08/16', 
    award: 33,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/James_Cameron_by_Gage_Skidmore.jpg/220px-James_Cameron_by_Gage_Skidmore.jpg'
 )

 chris = Director.create!(
    name: 'Christopher Nolan',
    nationality: 'UK/USA',
    dob: '1970/07/30', 
    award: 19,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Christopher_Nolan_Cannes_2018.jpg/220px-Christopher_Nolan_Cannes_2018.jpg'
 )

 puts "Done! Created #{Director.count} direcots:"
 puts Director.pluck(:name).join(', ')



 Movie.destroy_all

 Movie.create!(
    title: 'War Horse',
    year: '2011',
    genre: 'History, Drama, War',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/da/War-horse-poster.jpg',
    director_id: steven.id
 )

 Movie.create!(
    title: 'Munich',
    year: '2005',
    genre: 'Drama',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Munich_1_Poster.jpg',
    director_id: steven.id
 )

 Movie.create!(
    title: 'Avatar',
    year: '2009',
    genre: 'Sci-fi, Adventure, Action, Fantasy',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
    director_id: james.id
 )

 Movie.create!(
    title: 'Titanic',
    year: '1997',
    genre: 'Romance, Drama, Disaster',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png',
    director_id: james.id
 )

 Movie.create!(
    title: 'The Dark Knight',
    year: '2008',
    genre: 'Action, Adventure, Fantasy',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    director_id: chris.id
 )

 puts "Done! Created #{Movie.count} movies:"
 puts Movie.pluck(:title).join(', ')
