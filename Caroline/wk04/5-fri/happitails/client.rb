class Client
    def initialize (name, num_children,age)
       @name = name
       @num_children = num_children
       @age = age
       @list_of_pets = []
    end

    def name 
        return @name
    end

    def num_children
        return @num_children
    end

    def age
        return @age
    end

    def list_of_pets
        return @list_of_pets
    end


end