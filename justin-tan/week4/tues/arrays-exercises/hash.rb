puts "hash"

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}


# How would you return the string "One"?
h[1]

# How would you return the string "Two"?
h[:two]

# How would you return the number 2?
h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"


# How would you add {:four => 4} to the hash?
h[:four] = 4



is = {true => "It's true!", false => "It's false"}


# What is the return value of is[2 + 2 == 4]?
p is[2 + 2 == 4]

# What is the return value of is["Erik" == "Jonathan"]?
#false

# What is the return value of is[9 > 10]?
#false

# What is the return value of is[0]?
#nil

# What is the return value of is["Erik"]?
#nil

users = {
    "Jonathan" => {
      :twitter => "tronathan",
      :favorite_numbers => [12, 42, 75],
    },
    "Erik" => {
      :twitter => "sferik",
      :favorite_numbers => [8, 12, 24],
    },
    "Anil" => {
      :twitter => "bridgpal",
      :favorite_numbers => [12, 14, 85],
    },
  }


# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]


# How would you add the number 7 to Erik's favorite numbers?
users["Jonathan"][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users["Justin"] = {:twitter => "jtws", :favorite_numbers => [8]}

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]


# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort[0]


# How would you return an array of Anil's favorite numbers that are also even?
arr = users["Anil"][:favorite_numbers]

arr.select! { |a| a % 2 == 0 } #or .even?


# How would you return an array of the favorite numbers common to all users?

arr_one = users["Jonathan"][:favorite_numbers]
arr_two = users["Erik"][:favorite_numbers]
arr_three = users["Anil"][:favorite_numbers]

arr_one & arr_two & arr_three

common = users['Jonathan'][:favorite_numbers] #to place a placeholder value

users.values.each do |info|
    p info[:favourite_numbers]
    common = common & info[:favorite_numbers]
end

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

all_arr = arr_one + arr_two + arr_three

all_arr.sort.uniq

all_numbers = users.values.map do |info|
    info[:favorite_numbers]
end

require 'pry'; binding.pry