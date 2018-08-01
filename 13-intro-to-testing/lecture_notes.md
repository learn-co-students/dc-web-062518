- include `rspec` in Gemfile
- `rspec --init`

- Define TDD

- "DRY" doesn't apply (at least not as much)

- Require the file you're testing

1.  `describe` what you're testing
2.  say what `it` does
3.  write assertion

- First build the calculator in the first test (add).  When you need to redo it, move it to the top of the describe:

```
describe "Calculator" do

  let(:calculator) {Calculator.new}
  
  it "adds two numbers" do
    expect(calculator.add(2, 3)).to be 5
  end

  it "subtracts two numbers" do
    expect(calculator.subtract(10, 3)).to be 7
  end
end
```

- point out difference between `to be` (compares object identity equality) to `to eq` (compares value equality)

```
  it "should raise an error if input is a not number" do
    expect { calculator.add("hi", 5) }.to raise_error ArgumentError
  end
```

`raise ArgumentError if !(num1.is_a?(Numeric) && num2.is_a?(Numeric))
`