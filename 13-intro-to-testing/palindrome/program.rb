# write a is_palindrome? function, to check whether a string is a palindrome

def is_palindrome?(string)
  if string.is_a?(String)
    string.reverse == string
  else
    raise ArgumentError.new("argument must be a string")
  end
end

# factorial(n) returns n! - factorial of 5 = 5*4*3*2*1

def factorial(n)
  if n.is_a?(Fixnum)
    if n > 0
      counter = n - 1
      counter.times do
        n = n * counter
        counter -= 1
      end
      n
    elsif n == 0
      1
    else
      raise ArgumentError.new("argument must be positive")
    end
  else
    raise ArgumentError.new("argument must be an integer")
  end
end
