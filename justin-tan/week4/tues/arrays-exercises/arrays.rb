puts "arrays"

# 1. Create an array of the days of the week

#     Create a variable named days_of_the_week as an array of the following:
#         Monday
#         Tuesday
#         Wednesday
#         Thursday
#         Friday
#         Saturday
#         Sunday

# 2. My calendar says the first day is Sunday...

#     Remove Sunday from the last postion and move it to the first position. Use array methods.


days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

element = days_of_the_week.pop

days_of_the_week.unshift(element)

# 3. Create a new array of the days of the week :

#     Re-create the original days_of_the_week array first, to undo the modifications from #2
#     Use the values from that array to create a new array whose elements are also arrays, i.e. a nested array:
#     The first inner array should be the weekdays
#     The second inner array should be the weekend days

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

weekdays = days_of_the_week.take 5
weekends = days_of_the_week.drop 5

new_days_of_the_week = [weekdays, weekends]

#or days_of_the_week.rotate -1
# require 'pry'; binding.pry
# 4. Remove either the weekdays or the weekends
new_days_of_the_week.pop


# Your choice...
# 5. Sort the remaining days alphabetically

newArr = new_days_of_the_week[0].sort
p newArr


