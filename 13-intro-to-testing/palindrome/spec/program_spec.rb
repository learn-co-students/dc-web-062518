require_relative '../program.rb'

describe 'is_palindrome?' do
  # description of tasks
  it 'returns true if the argument is a palindrome' do
    # set up expectations
    # expect(___).to matcher (to be x, to eq x, to be_falsey, to include(value))
    expect(is_palindrome?('racecar')).to be true
  end

  it 'returns false when the argument is not a palindrome' do
    expect(is_palindrome?('house')).to be false
  end

  # consider unexpected arguments!
  # what if the string is an integer?
  # show an error!
  it 'raises an error if passed a non-string argument' do
    expect { is_palindrome?(8) }.to raise_error("argument must be a string")
  end

  # capitalization
  # spaces
  # numbers (in the string)
  # punctuation (alternate characters)
end

describe 'factorial' do
  it 'returns the factorial of n' do
    expect(factorial(5)).to eq 120
    expect(factorial(4)).to eq 24
  end

  it 'raises an error on a negative input' do
    expect { factorial(-5) }.to raise_error("argument must be positive")
  end

  it 'handles 0 appropriately' do
    expect(factorial(0)).to eq 1
  end

  it 'handles 1 appropriately' do
    expect(factorial(1)).to eq 1
  end

  it 'raises an error on a float' do
    expect { factorial(1.5) }.to raise_error("argument must be an integer")
  end

  it 'raises an error if passed an argument that is not an integer' do
    expect { factorial('apple')}.to raise_error('argument must be an integer')
  end
end
