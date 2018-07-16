class Client
    def initialize (name, num_children,age)
       @name = name
       @num_children = num_children
       @age = age
       @list_of_pets = []
    end

    def to_s
        "Client name: #{name}, Number of children: #{@num_children}, Age: #{@age}, List of pets: #{@list_of_pets.join(', ')}"
    end

    def name 
        @name
    end

    def num_children
        @num_children
    end

    def age
        @age
    end

    def list_of_pets
        @list_of_pets
    end


end