require 'pry'

# def create_account(name, amount)
#   { balance: amount, owner: name }
# end
#
# def withdraw(amount, account)
#   if amount > account[:balance]
#     puts "Deposit more money, #{account[:owner]}"
#   else
#     account[:balance] -= amount
#   end
# end
#
# def deposit(amount, account)
#   account[:balance] += amount
# end

class BankAccount
  attr_reader(:amount)
  attr_accessor(:name)

  # initialize
  # create_account
  # getters and setters
  def initialize(amount, name)
    # puts "got here"
    # puts amount
    # puts name
    @amount = amount
    @name = name
  end

  # withdraw
  # deposit

  def withdraw(amount)
    if amount > @amount
       puts "Deposit more money, #{@name}"
     else
       @amount -= amount
     end
  end

  def deposit(amount)
    @amount += amount
  end

  # def amount
    # @amount
  # end

  # def name
    # @name
  # end

  # def name=(string)
  #   # puts "Warning - updating account name could have unexpected consequences"
  #   @name = string
  # end

end

rob_account = BankAccount.new(100, "Rob")

binding.pry
puts "withdraw"
