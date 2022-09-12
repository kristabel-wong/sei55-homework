puts "arrays"
# 1Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

# days_of_the_week = ["Money", "Tuesday", "Wednesday", "Thursday", "Friday", "Sataurday", "Sunday"]
days_of_the_week = %w{Money Tuesday Wednesday Thursday Friday Sataurday Sunday}

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

moved_day = days_of_the_week.pop
days_of_the_week.unshift moved_day

# days_of_the_week.rotate! -1

puts days_of_the_week
# 3. Create a new array of the days of the week :
# Re-create the original days_of_the_week array first, to undo the modifications from #2
# The first inner array should be the weekdays
# The second inner array should be the weekend days

days_of_the_week = %w{ Monday Tuesday Wednesday Thursday Friday Sataurday Sunday }

week_days = days_of_the_week[0..4]

p "week_days:", week_days
week_days = days_of_the_week[5, 2]
p "weekend days:", weekend_days

week_parts = [ week_days, weekend_days ]
p "week parts:", week_parts

# require 'pry'; binding.pry
# 4. Remove either the weekdays or the weekends
week_parts.pop 
# require 'pry'; binding.pry



# Your choice...

# 5. Sort the remaining days alphabetically

sorted = week_parts.first.sort
p sorted

    
