Member.destroy_all

max = Member.create!(
    name: 'Max Mustermann',
    phone: '0411404018',
    avatar: 'https://joeschmoe.io/api/v1/male/max',
    town: 'Santiago, Chile'
)

olivia = Member.create!(
    name: 'Olivia MacChruim',
    phone: '0405030408',
    avatar: 'https://joeschmoe.io/api/v1/female/olivia',
    town: 'Barcelona, Spain'
)

akbar = Member.create!(
    name: 'Akbar Vincze',
    phone: '0405030404',
    avatar: 'https://joeschmoe.io/api/v1/male/Akbar',
    town: 'São Paulo, Brazil'
)

tanguy = Member.create!(
    name: 'Tanguy Snelling',
    phone: '0425535404',
    avatar: 'https://joeschmoe.io/api/v1/male/tanguy',
    town: 'São Paulo, Brazil'
)

puts "Done! Added #{Member.count} new members to the database"
puts Member.pluck(:name).join(', ')


# Item seed data

Item.destroy_all

Item.create!(
    summary: 'Sofa Set',
    description: 'One 2 seater and one 3 seater. On the 3 seater the zipper of one of the couch cushions is not working.',
    condition: 'very good',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1660280587.jpeg',
    category: 'Furniture',
    member_id: max.id
)

Item.create!(
    summary: 'Piano',
    description: 'Free Piano in good working order.',
    condition: 'It requires tuning.',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1659736626.jpeg',
    category: 'Musical Instruments',
    member_id: olivia.id
)

Item.create!(
    summary: 'Kids Ride On Car',
    description: 'Has been stored outside under the stairs since taking these pics so will need a clean. ',
    condition: 'used, needs cleaning',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1661339130.jpg',
    category: 'Toys',
    member_id: akbar.id
)

Item.create!(
    summary: 'Anthony Robbins Program And Negotiation Program',
    description: 'Both programs are really good. You will need a cassette player for the negotiation program',
    condition: 'working',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1661074576.jpeg',
    category: 'Anything Else',
    member_id: tanguy.id
)

Item.create!(
    summary: 'Easy Home Convection Heater',
    description: 'Ready for pick up now.
    240 volt 2400 watts aussie plug
    tested working by me ( quick test)
    great way to burn excess money.',
    condition: 'working',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1661312673.jpg',
    category: 'Anything Else',
    member_id: max.id
)

Item.create!(
    summary: 'Day Bed',
    description: 'Outdoor Day bed',
    condition: 'used',
    image: 'https://s3-ap-southeast-2.amazonaws.com/ziilch-assets/content/au/images/1656130589.jpg',
    category: 'Outdoor',
    member_id: olivia.id
)

puts "Done! added #{Item.count} items to the database"
puts Item.pluck(:summary).join(', ')