puts "Enter filename: "
file_name = gets


f = File.open(file_name.chomp)
puts "#{f.readlines(sep = $/).length} line(s)"