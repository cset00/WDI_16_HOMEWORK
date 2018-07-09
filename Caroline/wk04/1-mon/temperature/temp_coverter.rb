puts "Type in ANY value to start temp_coverter or press Q at any time to quit the program"
temp_value = gets 


def convert_temp(value,unit)
    if unit.chomp == "f"
        puts "fahrenheit: #{value}"
        puts "to Celcius: #{((value.to_i - 32) / 1.8).round(2)}"
        puts "to Kelvin: #{((value.to_i + 459.67) / 1.8).round(2)}"
    elsif unit.chomp == "C"
        puts "Celcius: #{value}"
        puts "to fahrenheit: #{(value.to_i * 1.8 + 32).round(2)}"
        puts "to Kelvin: #{(value.to_i + 273.15).round(2)}"
    else
        puts "Kelvin: #{value}"
        puts "to fahrenheit: #{(value.to_i * 1.8 - 459.67).round(2)}"
        puts "to Celcius: #{(value.to_i - 273.15).round(2)}"
    end
end

# convert_temp(temp_value, temp_unit)

# While gets.chomp isn't 'Q', 
# store the input value as temp_value then ask for temp_unit, then 
# run convert_temp



while temp_value.chomp != 'Q'
    puts "Type in a temp value: "
    temp_value = gets 

    if temp_value.chomp == 'Q'
        return
    else
        puts "Type in the temp unit: "
        temp_unit = gets

        if temp_unit.chomp == 'Q'
            return
        else
            convert_temp(temp_value, temp_unit)
        end
    end
end














