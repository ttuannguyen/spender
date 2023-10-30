# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# When re-seed, we need to remove the validations first

# User.destroy_all
# Category.destroy_all
# Expense.destroy_all
# Note.destroy_all

u1 = User.create(username: "johndoe", password: "asdfghjk")
# u2 = User.create(username: "pikachu", password: "asdfghjk")

b1 = Budget.create(name: "Rent & Utilities", amount: 0, description: "This budget includes all expenses related to rent payments, mortgage payments, electricity, water, gas, internet bills, etc.")
b2 = Budget.create(name: "Groceries", amount: 0, description: "This budget includes all expenses related to recreational activities, such as movies, concerts, dining out, and other forms of entertainment.")
b3 = Budget.create(name: "Entertainment", amount: 0, description: "This budget is for leisure and recreational activities and includes expenses related to movies, concerts, dining out, hobbies, and other forms of entertainment.")
b4 = Budget.create(name: "Essentials", amount: 0, description: "This budget is designed to cover the basic necessities for daily usage.")
b5 = Budget.create(name: "Transportation", amount: 0, description: "This budget is designed to track and manage expenses related to transportation, such as Uber, Lyft, taxi and public transportation costs.")
b6 = Budget.create(name: "Subscriptions", amount: 0, description: "This budget includes expenses related to various subscriptions, such as streaming services, online memberships, and software subscriptions.")
b7 = Budget.create(name: "Other", amount: 0, description: "This budget includes all other expenses")

# c1 = Category.create(name: "Rent & Utilities")
# c2 = Category.create(name: "Groceries")
# c3 = Category.create(name: "Entertainment")
# c4 = Category.create(name: "Essentials")
# c5 = Category.create(name: "Transportation")
# c6 = Category.create(name: "Subscriptions")


# e1 = Expense.create(merchant: "FirstService Residential", date: "1/1/2023", amount: 2000.00, user: u1, category: c1)
# e2 = Expense.create(merchant: "Trader Joe's", date: "1/14/2023", amount: 16.00, user: u1, category: c2)
# e3 = Expense.create(merchant: "Whole Foods", date: "1/14/2023", amount: 25.00, user: u2, category: c2)

# n1 = Note.create(content: "Rent is due by the 5th of every month.", user: u1)




puts "✅ Done seeding!"