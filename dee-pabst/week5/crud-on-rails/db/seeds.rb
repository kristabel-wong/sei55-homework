Tree.create!(
    common_name: 'Mountain ash',
    botanical_name: 'Eucalyptus regnans',
    key_id_features: 'straight-trunked tree with smooth grey bark',
    distribution: 'Eucalyptus regnans occurs across a 700 km by 500 km region in the southern Australian states of Victoria and Tasmania',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/MountainAshWithCars.jpg/440px-MountainAshWithCars.jpg'
)
Tree.create!(
    common_name: 'New Zealand kauri',
    botanical_name: 'Agathis australis',
    key_id_features: 'Mature kauri trees have characteristically large trunks, with little or no branching below the crown.',
    distribution: 'North Island New Zealand',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Kauri_Te_Matua_Ngahere.jpg/440px-Kauri_Te_Matua_Ngahere.jpg'
)
Tree.create!(
    common_name: 'Norfolk pine',
    botanical_name: 'Araucaria heterophylla',
    key_id_features: 'straight vertical trunks and symmetrical branches, forming floors; the plane of each floor is a perfect pentagon.',
    distribution: 'Endemic to Norfolk Island',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Norfolkpine001.jpg/340px-Norfolkpine001.jpg'
)

puts "Done! planted #{Tree.count} trees in the database"
puts Tree.pluck( :common_name ).join(', ')

# t.string  :common_name
# t.string  :botanical_name
# t.text    :key_id_features
# t.text    :distribution
# t.text    :image_url  