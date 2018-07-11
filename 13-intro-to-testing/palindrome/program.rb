# write a is_palindrome? function, to check whether a string is a palindrome

def is_palindrome?(string)
  if string.is_a?(String)
    string.reverse == string
  else
    raise ArgumentError.new("argument must be a string")
  end
end

# factorial(n) returns n! - factorial of 5 = 5*4*3*2*1
