# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all

Team.create(
    name: 'Boston Celtics',
    image_url: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg',
    founded_year: 1946,
    city: 'Boston',
    arena: 'TD Garden',
    owner: 'Wyc Grousbeck'
)

Team.create(
    name: 'Chicago Bulls',
    image_url: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg',
    founded_year: 1966,
    city: 'Chicago',
    arena: 'United Center',
    owner: 'Jerry Reinsdorf'
)

Team.create(
    name: 'Houston Rockets',
    image_url: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg',
    founded_year: 1967,
    city: 'Houston',
    arena: 'Toyota Center',
    owner: 'Tilman Fertitta'
)

Team.create(
    name: 'Los Angeles Lakers',
    image_url: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
    founded_year: 1948,
    city: 'Los Angeles',
    arena: 'Crypto.com Arena',
    owner: 'Jerry Buss Family Trust'
)

Team.create(
    name: 'Golden State Warriors',
    image_url: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
    founded_year: 1946,
    city: 'Golden State',
    arena: 'Chase Center',
    owner: 'Joe Lacob'
)
