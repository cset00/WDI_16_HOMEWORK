# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p = Planet.new
p.name = 'unicorn sprinkles'
p.description = 'a planet where all dreams come true'
p.distance_fr_earth = '0000'
p.save

Planet.create name:'mercury', description: 'cool n blue', distance_fr_earth: '1500'