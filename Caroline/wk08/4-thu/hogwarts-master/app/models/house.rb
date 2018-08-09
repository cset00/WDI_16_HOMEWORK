# class House < ActiveRecord
# end

class House < ActiveRecord::Base
    has_many :students
end