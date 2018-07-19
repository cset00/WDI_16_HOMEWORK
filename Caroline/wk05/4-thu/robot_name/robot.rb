# create a robot class
# need to have initialise with name in it (randomise)
# and a method to get name
# reset method that randomises the name again ?
# mac address also needs to be in initialise and not in reset

# how to randomize 2 letters and 3 numbers?
# 2 times random letters + 3 times random numbers?

require 'pry'
class Robot
    
    attr_reader :instruction_count

    def initialize
        @time_created = Time.now
        @name = generate_name
        @mac_address = 5.times.map { ('AA'..'ZZ').to_a.sample }.join('-')
        @counter = 0
    end

    def generate_name
        letters = ('A'..'Z').to_a
        random_letters = 2.times.map { letters.sample }
        # or random_letters = ('AA'..'ZZ').to_a.sample
        random_numbers = 3.times.map { rand(9) }
        name = random_letters + random_numbers
        name.join('')
    end
    

    # def instruction_count
    #     @counter
    # end
    # see attr at the very top to replace the 3 lines of code just above this.

    def name
        @counter = @counter + 1
        @name
    end

    def mac_address
        @counter = @counter + 1
        @mac_address
    end

    def reset
        @time_reboot = Time.now
        @counter = @counter + 1
        @name = generate_name
    end

    def timers
        t2 = Time.now
        time_since_created = t2 - @time_created
        if @time_reboot != nil
            time_since_reboot = t2 - @time_reboot
            puts "#{time_since_reboot.to_i} seconds since last boot, #{time_since_created.to_i} seconds since creation"  
        else
            puts "#{time_since_created.to_i} seconds since creation"
        end
    end
    
end




puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name


puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name

binding.pry

