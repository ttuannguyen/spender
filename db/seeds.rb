# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(username: "john", password: "asdfghjk")
u2 = User.create(username: "pikachu", password: "asdfghjk")

c1 = Category.create(name: "Rent & Utilities")
c2 = Category.create(name: "Groceries")
c3 = Category.create(name: "Entertainment")
c4 = Category.create(name: "Essentials")
c5 = Category.create(name: "Transportation")
c6 = Category.create(name: "Subscriptions")


e1 = Expense.create(merchant: "FirstService Residential", date: "1/1/2023", amount: 2000.00, user: u1, category: c1)
e2 = Expense.create(merchant: "Trader Joe's", date: "1/14/2023", amount: 16.00, user: u1, category: c2)
e3 = Expense.create(merchant: "Whole Foods", date: "1/14/2023", amount: 25.00, user: u2, category: c2)

n1 = Note.create(content: "Rent is due by the 5th of every month.", expense: e1)
n2 = Note.create(content: "Ingredients for French onion soup.", expense: e2)




puts "✅ Done seeding!"