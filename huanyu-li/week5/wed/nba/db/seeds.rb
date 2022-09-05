
Team.destroy_all

warriors = Team.create!(
    name: 'Golden State Warriors',
    founded: 1946,
    arena: 'Chase Center',
    owner:'Joe Lacob',
    logo:'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg'
)

lakers = Team.create!(
    name: 'Los Angeles Lakers',
    founded: 1948,
    arena: 'Crypto.com Arena',
    owner:'Jerry Buss Family Trust',
    logo:'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg'
)

mavericks = Team.create!(
    name: 'Dallas Mavericks',
    founded: 1980,
    arena: 'American Airlines Center',
    owner:'Mark Cuban',
    logo:'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg'
)

bucks = Team.create!(
    name: 'Milwaukee Bucks',
    founded: 1968,
    arena: 'Fiserv Forum',
    owner:'Wesley Edens & Marc Lasry',
    logo:'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg'
)

nets = Team.create!(
    name: 'Brooklyn Nets',
    founded: 1976,
    arena: 'Barclays Center',
    owner:'Joe Tsai',
    logo:'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg'
)

Player.destroy_all

Player.create!(
    name:'LeBron James',
    height:2.06,
    weight:113,
    country:'USA',
    dob:'1984/12/30',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    team_id: lakers.id
)

Player.create!(
    name:'Russell Westbrook',
    height:1.91,
    weight:91,
    country:'USA',
    dob:'1988/11/12',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png',
    team_id: lakers.id
)

Player.create!(
    name:'Stephen Curry',
    height:1.88,
    weight:84,
    country:'USA',
    dob:'1988/03/14',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
    team_id: warriors.id
)

Player.create!(
    name:'Klay Thompson',
    height:1.98,
    weight:100,
    country:'USA',
    dob:'1990/02/08',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png',
    team_id: warriors.id
)

Player.create!(
    name:'Luka Doncic',
    height:2.01,
    weight:104,
    country:'Slovenia',
    dob:'1999/02/28',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
    team_id: mavericks.id
)

Player.create!(
    name:'Giannis Antetokounmpo',
    height:2.11,
    weight:110,
    country:'Greece',
    dob:'1994/12/06',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
    team_id: bucks.id
)

Player.create!(
    name:'Kyrie Irving',
    height:1.88,
    weight:88,
    country:'Australia',
    dob:'1992/03/23',
    photo:'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
    team_id: nets.id
)

