class Animal
    def initialize (name, age, gender, species)
        @name = name
        @age = age
        @gender = gender
        @species = species
        @toys = []
    end

    def to_s
        "Animal name: #{name}, Age: #{@age}, Gender: #{@gender}, Species: #{@species}, List of toys: #{@list_of_toys.join(', ')}"
    end

    def name
        @name
    end

    def age
        @age
    end

    def gender
        @gender
    end

    def species
        @species
    end

    def toys
        @toys
    end

    def add_toy (toy)
        @toys.push(toy)
    end
end