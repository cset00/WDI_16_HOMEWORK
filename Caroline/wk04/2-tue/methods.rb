require 'pry'
# Round 1
# Write a function lengths that accepts a single parameter as an argument, 
# namely an array of strings. The function should return an array of numbers. 
# Each number in the array should be the length of the corresponding string.
words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]
def lengths (arr)
    new_arr = []
    arr.each do |str| 
        new_arr.push (str.length)
    end
    p new_arr
end

# i just found out about map :o
# could write the above like below
def lengths2 (arr)
    arr.map {|str| str.length}
end


lengths(words)


# Round 2
# Write a Ruby function called transmogrifier. This function should accept three arguments, 
# which you can assume will be numbers. Your function should return the "transmogrified" result

# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.

# For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

def transmogrifier (num1,num2,num3)
    (num1 * num2)**num3
end

# Use your function to find the following answers.

# transmogrifier(5, 4, 3)
8000

# transmogrifier(13, 12, 5)
92389579776

# transmogrifier(42, 13, 7)
14466001271480793216

# Round 3
# Write a function called toonify that takes two parameters, accent and sentence.

# If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
# If the accent is "elmer", replace all "r" with "w".
# Feel free to add your own accents as well!
# If the accent is not recognized, just return the sentence as-is.
# toonify("daffy", "so you smell like sausage")
# #=> "tho you thmell like thauthage"

def toonify (accent,sentence)
    if accent == "daffy"
        puts sentence.gsub('s','th')
    elsif accent == "elmer"
        puts sentence.gsub('r','w')
    else 
        puts sentence
    end
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "i just heard a rawring thunder")

# Round 4
# Write a function word_reverse that accepts a single argument, a string. 
# The method should return a string with the order of the words reversed. 
# Don't worry about punctuation.

# word_reverse("Now I know what a TV dinner feels like")
# # => "like feels dinner TV a what know I Now"
def word_reverse (str)
    str.split(' ').reverse.join(' ')
end

# Round 5
# Write a function letter_reverse that accepts a single argument, a string. 
# The function should maintain the order of words in the string but reverse the letters in each word. 
# Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letterReverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
def letter_reverse (str)
    str.split(' ').map { |each| each.reverse }.join(' ')
end


# Round 6
# Write a function longest that accepts a single argument, an array of strings. 
# The method should return the longest word in the array. In case of a tie, the method should return either.

# longest(["oh", "good", "grief"]) # => "grief"
# longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# # => "unrequited"
def longest (arr)
    arr.max_by {|str| str.length}
end

# or see below (Alex's code)
def longest2(collection)
    collection.max { |a, b| a.length <=> b.length }
end

# numericals (google)

# binding.pry