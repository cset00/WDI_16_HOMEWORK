#1
days_of_the_week = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'.split(', ')

#2
days_of_the_week.unshift(days_of_the_week.pop)

#3
days_of_the_week.push(days_of_the_week.shift)
days_of_the_week = [days_of_the_week.slice(0, 5),days_of_the_week.slice(5, 7)]

#4
# remove weekdays
days_of_the_week.shift

# remove weekends
days_of_the_week.pop

#5
days_of_the_week.sort