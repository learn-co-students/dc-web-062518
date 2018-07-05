# Ruby Questions

## Variable naming conventions

snake_case variables (ruby)
camelCase variables (javascript)

Capitalized = Constants (Class, Module)
ALL_CAPS = Constants that are not Classes or Modules
STUDENT_NAMES = []

## Two ways to find

`self.find_student`
iterate vs. conditional

[] - find in an array, have to iterate (several ways to iterate)

```
def self.find_student(input_full_name)
  @@all.each do |student|
    if student.full_name == input_full_name
      return student
    end
  end
end

def self.find_student(input_full_name)
  @@all.find do |student|
    student.full_name == input_full_name
  end
end
```  

## How to decide which order to work on the models?

Back and forth
Write out the specification before we actually begin building
Back and forth
data first
relationships next


```
```


## Bare minimum code for things to 'work' for belongs_to / has_many?

Can call methods to get related objects

## Application design - General principles
