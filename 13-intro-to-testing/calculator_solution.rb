class Calculator

    def add(num1, num2)
        raise ArgumentError if !(num1.is_a?(Numeric) && num2.is_a?(Numeric))
        num1 + num2
    end

    def subtract(num1, num2)
        raise ArgumentError if !(num1.is_a?(Numeric) && num2.is_a?(Numeric))
        num1 - num2
    end

    def multiply(num1, num2)
        raise ArgumentError if !(num1.is_a?(Numeric) && num2.is_a?(Numeric))
        num1 * num2
    end

    def divide(num1, num2)
        raise ArgumentError if !(num1.is_a?(Numeric) && num2.is_a?(Numeric))
        if num2 == 0
            raise ZeroDivisionError
        end
        num1.to_f / num2
    end

end