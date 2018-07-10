require 'pry'

#1
days_of_the_week = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'.split(', ')
# %w|mon tue wed thur fri sat sun| <= %w stands for word.


#2
days_of_the_week.unshift(days_of_the_week.pop)
#pop push shift unshift change existing arrays. if you still need it, be careful
#in ruby, we've learnt about sub vs sub!. sub doesn't affect the existing value, whereas sub! replaces it.


#3
days_of_the_week.push(days_of_the_week.shift)
days_of_the_week = [days_of_the_week.slice(0, 5),days_of_the_week.slice(5, 7)]
#in ruby, instead of using slice, we could also write: days_of_the_week[0..4]. NOTE that the last value is inclusive, unlike split.


#4
# remove weekdays
days_of_the_week.shift

# remove weekends
days_of_the_week.pop


#5
days_of_the_week.sort


binding.pry