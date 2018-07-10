require 'pry'
# Arrays
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.
planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push("Heart")

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
# and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
heroes = [planeteers,rangers]

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.
heroes_sorted = heroes.join(',').split(',').sort


# Randomize the contents of heroes using a method. The Ruby documentation might help.
heroes_random = heroes.join(',').split(',').shuffle


# Select a random element from heroes using a method. The Ruby documentation might help.
heroes.join(',').split(',').sample


# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.
heroes.join(',').split(',').select { |v| v=~ /^B/}





# Hashes
# Initialize a hash called ninja_turtle with the properties name, weapon and radical. 
# They should have values of "Michelangelo", "Nunchuks" and true respectively.
ninja_turtle = {
    name: 'Michelangelo',
    weapon: 'Nunchuks',
    radical: true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle[:age] = 21

# Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete(:radical)

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings 
# (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ['cheese','pepperoni','peppers']


# Access the first element of pizza_toppings.
ninja_turtle[:pizza_toppings].first

# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.
ninja_turtle.each do |key,value|
    puts key
end

# Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.
ninja_turtle.each do |key,value|
    if key == :pizza_toppings
        puts "#{key} are equal to #{value.join(', ')}"
    else
        puts "#{key} is equal to #{value}"
    end
end


binding.pry