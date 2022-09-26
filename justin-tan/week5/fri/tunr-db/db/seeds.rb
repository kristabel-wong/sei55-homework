# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

s1 = Song.create! title: 'Achy Breaky Heart'
s2 = Song.create! title: 'Draw us In'
s3 = Song.create! title: 'Burn the Witch'
s4 = Song.create! title: 'Identikit'

puts "created #{ Song.count} songs"

################################################

print "creating artists.."

Artist.destroy_all

art1 = Artist.create! name: 'Billy Ray Cyrus'
art2 = Artist.create! name: 'Metz'
art3 = Artist.create! name: 'Radiohead'

puts "created #{ Artist.count } artists"

# Create associations from artists to their songs
art1.songs << s1 # THIS ACTUALLY UPDATES THE songs TABLE

# This means "the song s1 has its artist_id set to art.id"

#I.e. the query is something like :
# s1.update artist_id: art1.id
# UPDATE songs SET artist_id = art.id WHERE id = s1.id

art2.songs << s2  # ' Draw Us In ' (s2) is by Metz (art2)

# both 'burn the witch' (s3) and 'Identikit' (s4) are by radiohead (art3)
art3.songs << s3 << s4

# Test the associations we just made: 
puts "Testing artist -< songs associations:"
puts "- the song '#{Song.first.title}' is by #{Song.first.artist.name}"
puts "- the artist #{Artist.last.name} has the songs: #{Artist.last.songs.pluck(:title).join(', ')}"

#############################################

print "Creating albums..."

Album.destroy_all

alb1 = Album.create! title: 'Some Gave All', year: '1992'
alb2 = Album.create! title: 'Atlas Vending', year: '2021'
alb3 = Album.create! title: 'A Moon-Shaped Pool', year: '2016'

puts "created #{Album.count} albums."

#Create associations from songs to albs

alb1.songs << s1

alb2.songs << s2

alb3.songs << s3 << s4

puts "Testing album -< songs association:"
puts " • the song '#{Song.first.title}' is on the album '#{Song.first.album.title}"
puts " • the album '#{Album.last.title}' has the songs: #{Album.last.songs.pluck(:title).join(', ')} "

###################################################

print "creating genres...."

Genre.destroy_all

g1 = Genre.create! name: 'Post Punk'
g2 = Genre.create! name: 'Math Rock'
g3 = Genre.create! name: 'Paranoid Art Rock'
g4 = Genre.create! name: 'Sadcore'
g5 = Genre.create! name: 'Country'
g6 = Genre.create! name: 'IDM' #Intelligent Dance Music

puts "created #{Genre.count} genres."

########################################################

#s1 (achy breaky heart) is in the genre g5 (country)
# In other words, in the join table genres_songs, create a
# new row with song_id = s1.id, genre_id = g5.id
s1.genres << g5

#This song is in three genres, ie create THREE rows in
#the genres_songs table
s2.genres << g1 << g2 << g4 

s3.genres << g3 << g4 << g6

s4.genres << g3 << g4

# You could instead write:
# from the genre side, add multiple songs
# g1.songs << s1 << s3

# Test genres <-< songs associations
puts "Genre '#{ g3.name }' has songs: #{ g3.songs.pluck(:title).join(', ') }"
puts "Song '#{s4.title}' has genres: #{ s4.genres.pluck(:name).join(', ') }"

################################################

print "Creating mixtapes..."

Mixtape.destroy_all

m1 = Mixtape.create! name: 'Code Jams'
m2 = Mixtape.create! name: 'Post-Lockdown Dance Party'
m3 = Mixtape.create! name: 'Make-out Music' 

puts "created #{Mixtape.count} mixtapes."

# Create songs >-< mixtapes associations, i.e. add songs to mixtape
m1.songs << s1 << s2 << s3 << s4
m2.songs << s3 << s4
m3.songs << s1 << s2

puts "Mixtape '#{ m1.name }' has the songs: #{m1.songs.pluck(:title).join(', ')}"
puts "song '#{s3.title}' is on mixtapes: #{s3.mixtapes.pluck(:name).join(', ')}"

##########################################

print "Creating users..."

User.destroy_all

u1 = User.create! email: 'luke@ga.co', name: 'Luke', password: 'chicken'
u2 = User.create! email: 'kris@ga.co', name: 'Kris', password: 'chicken'
u3 = User.create! email: 'shayni@ga.co', name: 'Shayni', password: 'chicken'

puts "created #{ User.count } users."

# Add user -< mixtake associations

u1.mixtapes << m1 << m3
u2.mixtapes << m2

puts "User #{u1.name} has mixtapes: #{u1.mixtapes.pluck(:name).join(', ')}"
puts "Mixtape '#{ m1.name}' belongs to #{m1.user.name}"