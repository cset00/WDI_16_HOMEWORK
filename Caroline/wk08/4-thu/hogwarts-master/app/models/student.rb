# def Student < ActiveRecord::Base
#   belongs_to :houses
# end

class Student < ActiveRecord::Base
  belongs_to :house
end
