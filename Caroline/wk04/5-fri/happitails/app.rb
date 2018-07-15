require_relative 'client'
require_relative 'animal'
require 'pry'

$clients = []
$animals = []
shelter = {"Animals" => $animals, "Clients" => $clients}


# declare a shelter - array, hash, custom object
# you have permission to make the shelter a global ($)

# cli - program (a system where you look after the shelter)

# Show a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# quit

bruce = Animal.new("Bruce", 2, "Male", "Border collie")
$animals.push(bruce)

marley = Animal.new("Marley", 1, "Female", "Golden retriever")
$animals.push(marley)

erin = Client.new("Erin", 2, 31)
$clients.push(erin)



def create_animal 
    print "Name of new animal: "
    pet_name = gets.chomp

    print "Age of animal: "
    pet_age = gets.chomp.to_i

    print "Gender of animal: "
    pet_gender = gets.chomp

    print "Species of animal: "
    pet_species = gets.chomp

    new_pet = Animal.new(pet_name, pet_age, pet_gender, pet_species)
    $animals.push(new_pet)
end


def create_client 
    print "Name of client: "
    client_name = gets.chomp

    print "No. of children: "
    client_num_children = gets.chomp.to_i

    print "Age of client: "
    client_age = gets.chomp

    new_client = Client.new(client_name, client_num_children, client_age)
    $clients.push(new_client)
end


def adopt_pet(client_name, pet_name)
    client = $clients.select { |clt| clt.name == client_name }
    if client == []
        puts "Client #{client_name} is not in our database. Please make sure you create a client first."
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    end

    animal = $animals.select { |anm| anm.name == pet_name }
    if animal == []
        puts "We can't find the pet #{pet_name} in our database."
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    end
    
    $animals.each do |animal|
        if animal.name == pet_name
            $clients.each do |client|
                if client.name == client_name
                    client.list_of_pets.push(animal)
                    $animals.delete(animal)
                    puts "#{animal.name} has been adopted by #{client.name}!"  
                end
            end
        end
    end
end


def giveup_pet(client_name, pet_name)
    client = $clients.select { |clt| clt.name == client_name }
    if client == []
        puts "Client #{client_name} is not in our database. Please make sure you create a client first."
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    end
    
    $clients.each do |client|
        if client.name == client_name
            pet = client.list_of_pets.select { |pet| pet.name == pet_name }
            if pet == []
                puts "We can't find pet #{pet_name} in #{client_name}'s list of pets"
                print "Back to menu? (y/n) "
                yesno = gets.chomp.upcase

                if yesno == 'N' || yesno == 'Q' 
                    exit
                else
                    show_menu
                end
            end
            client.list_of_pets.each do |pet|
                if pet.name == pet_name
                    $animals.push(pet)
                    client.list_of_pets.delete(pet)
                    puts "#{pet.name} has been added to the shelter by #{client.name}"
                end
            end
        end
    end
end


def show_menu
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Create an animal"
    puts "4. Create a client"
    puts "5. Adopt an animal"
    puts "6. Put an animal up for adoption"
    puts "7. Quit (or press Q to quit)"
    print "Select from the menu by typing the number: "
    @user_selection = gets.chomp.upcase

    case
    when @user_selection == '1'
        $animals.each do |animal|
            puts "#{animal.name}, age #{animal.age}, #{animal.gender}, species: #{animal.species}"
        end
        
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '2'
        $clients.each do |client|
            puts "#{client.name}, number of children: #{client.num_children}, age #{client.age}, list of pets: #{client.list_of_pets}"
        end

        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '3'
        create_animal
        puts "#{$animals.last.name} has been added!"
        
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '4'
        create_client
        puts "#{$clients.last.name} has been added!" 
        
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '5'
        if $animals == []
            puts "There are no animals in the shelter at the moment..."
            print "Back to menu? (y/n) "
            yesno = gets.chomp.upcase
            if yesno == 'N' || yesno == 'Q' 
                exit
            else
                show_menu
            end
        end

        print "Client name: "
        client_name = gets.chomp

        print "Animal to adopt: "
        animal_name = gets.chomp

        adopt_pet(client_name, animal_name)
        
        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '6'
        print "Client name: "
        client_name = gets.chomp

        print "Animal to add to shelter: "
        animal_name = gets.chomp

        giveup_pet(client_name, animal_name)

        print "Back to menu? (y/n) "
        yesno = gets.chomp.upcase

        if yesno == 'N' || yesno == 'Q' 
            exit
        else
            show_menu
        end
    when @user_selection == '7' || @user_selection == 'Q'
        exit
    else
        puts "Please make a selection between number 1 - 6 or press 'Q' to exit"
        show_menu
    end
end

show_menu





    






