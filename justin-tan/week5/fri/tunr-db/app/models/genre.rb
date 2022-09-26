class Genre < ApplicationRecord

    # This defines one end of a many to many associationl;
    # it requires/assumes that the 'genres_songs' join table already exist
    # and that the table has 'genre_id' and 'song_id' integer columns
    # ... also know as HABTM
    has_and_belongs_to_many :songs

    has_many :artists, through: 'songs'
end
