# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Garfield', breed: 'Calico', age: 45, quote: 'Mondays...')
Cat.create(name: 'Kiki', breed: 'Tonakese', age: 10, quote: 'hello')
Cat.create(name: 'Felix', breed: 'Tabby', age: 5, quote: 'meow')
Cat.create(name: 'HelloKitty', breed: 'human', age: 15, quote: 'I am not a cat')

Hobby.create(title: 'sleep', description: 'zzzzzzzzz')
Hobby.create(title: 'play with yarn', description: 'funn!!!')
Hobby.create(title: 'eat', description: 'yummmmm')

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 1)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 3)
