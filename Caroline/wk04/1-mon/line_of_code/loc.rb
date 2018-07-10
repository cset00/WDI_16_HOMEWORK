# CLI program

# puts "Enter filename: "
# file_name = gets.chomp


# f = File.open(file_name)
# puts "#{f.readlines(sep = $/).length} line(s)"


# there are built in methods & standard libraries
# if you want to use standard libraries, you usually need to include them first

# to read files, see if there are libraries that allow this
# sometimes, you need to 'require' it at the start, sometimes not.

# eg. if you use 'fileutils' you need to put 'require 'fileutils'' at the top of this page. 
# ^ This will let you use similar cli commands

#The above could also be written:

# File.readlines(file_name).length
# File.readlines(file_name).size
# File.readlines(file_name).count
# IO.readlines(file_name).size


# argument vector. a built in array thing.
# puts ARGV


# p ARGV 
# programmers print. gives you more info. not for end users.

#so for the above example, could:
puts IO.readlines(ARGV[0]).size

# ^ can just type 'ruby loc.rb data.txt' and it'll give you the no. of lines 
# instead of typing ruby loc.rb ENTER then bla bla..