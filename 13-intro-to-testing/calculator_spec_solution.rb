require_relative "../calculator.rb"

describe "Calculator" do 
    let(:calculator) {Calculator.new}

    it "adds two numbers" do
        expect(calculator.add(2, 3)).to eq 5
    end

    it "raises an error if three arguments are passed" do
        expect{ calculator.add(1, 2, 3) }.to raise_error ArgumentError
    end

    it "raises an error if arguments are not numbers" do
        expect{ calculator.add("dinosaur", "taco") }. to raise_error ArgumentError
    end

    it "subtracts two numbers" do
        expect(calculator.subtract(10, 3)).to eq 7
    end

    it "multiplies two numbers" do
        expect(calculator.multiply(10, 3)).to eq 30
    end

    it "divides two numbers" do
        expect(calculator.divide(10, 5)).to eq 2
    end

    it "divides two numbers when first is not multiple of second" do
        expect(calculator.divide(5, 2)).to eq 2.5
    end

    it "divides two negative numbers and gets a positive" do
        expect(calculator.divide(-10, -2)).to eq 5
    end

    it "raises an error when dividing by zero" do
        expect{ calculator.divide(10, 0) }.to raise_error ZeroDivisionError
    end
end