User.destroy_all
Flavor.destroy_all
Sundae.destroy_all

puts "🌱 Seeding Users..."
10.times do |user|
  User.create(user_name: Faker::Name.name, favorite_flavor: Faker::Dessert.flavor, age_of_account: rand(10))
end
puts "🌱 Seeding Flavors..."
10.times do |flavor|
  Flavor.create(name: Faker::Dessert.variety, price: rand(10), description: Faker::Restaurant.description, has_dairy: Faker::Boolean.boolean)
end
puts "🌱 Seeding Sundaes..."
10.times do |sundae|
  Sundae.create(name: Faker::Dessert.variety, container: Faker::Food.measurement, topping: Faker::Dessert.topping, user_id: User.all.ids.sample, flavor_id: Flavor.all.ids.sample)
end
# Seed your database here

puts "✅ Done seeding!"
