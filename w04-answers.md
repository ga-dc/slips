#### "Describe the difference between what is truthy/falsey in Ruby vs JavaScript?"
Javascript
* Falsey: `false`, `undefined`, `null`, `0`, `""`, `NaN`

Ruby
* Falsey: `false`, `nil`

#### "Define what a function is in Javascript and how it compares to a Ruby method."
Both are code blocks that can be used repeatedly to perform a specific task. Both can take arguments and return a value.
* Different syntax (see below examples).
* Ruby methods can make use of implicit returns.

```javascript
// A javascript multiply function
function multiply( number, multiplier ){
  return number * multiplier;
}
```

```ruby
# A ruby multiply method
def multiply number, multiplier
  number * multiplier
end
```

#### "Differentiate between function declarations and expressions."
Declaration
* Defines a function without saving it to a variable.

```javascript
function multiply( number, multiplier ){
  return number * multiplier;
}
```

Expression
* A function that is saved to a variable.
* Function expressions are "hoisted" (i.e., are immediately interpreted by by Javascript, regardless of their position in code).

```javascript
var multiply = function( number, multiplier ){
  return number * multiplier;
}
```

#### "Explain the concept of a 'callback' function."
A callback function is a function that is executed when a certain action is completed.
* Key component of asynchronous programming.
* Example #1: a function that increments a timer after each interval of a `setInterval` method.
* Example #2: a function that stores the response of an AJAX call.

#### "What are Ruby's 5 main data types?"
* Number
* String
* Boolean
* Nil
* Symbol

#### "What's the difference between a symbol and a string?"
Symbol
* Occupies one place in memory.
* Immutable. Value cannot be changed.

String
* Mutable.
* Every new string occupies a new place in memory, even if the value of the strings are the same.

```ruby
# These three variables each point to the same place in memory
animal = :dog
canine = :dog
mans_best_friend = :dog

# These three variables each point to different places in memory.
animal = "dog"
canine = "dog"
mans_best_friend = "dog"
```

#### "What's an enumerator?"
* A loop-like method that allows us to traverse/inspect/modify collections (e.g., arrays, hashes).
* Preferred by Ruby over loops.
* Of the `Enumerator` class.

#### "Use the whiteboard to create a Ruby method that has two arguments."
```ruby
# returns a number multiplied by a multiplier
def multiply number, multiplier
  return number * multiplier
end

multiply( 3, 5 )
# => 15
```

#### "What's the difference between explicit and implicit return?"
* An explicit return is an outrightly defined return value in a Ruby method. It is indicated by using the `return` keyword.
* When no explicit return is defined, a Ruby method will return whatever value the last line of code in a method returns. This is called an implicit return. It does not make use of the `return` keyword.

#### "How would you add a key / value pair to an existing hash?"
```ruby
# Initialize classroom hash
classroom = {
  name: "Peanut Butter",
  teacher: "Adrian Maseda"
}

# Add new squads key that stores array of squads
classroom[:squads] = [ "Bash", "C", "Fortran" ]
```

#### "What's the difference between a loop and an enumerator?"
A loop allows us to repeat an action. An enumerator allows us to iterate through elements of a collection.
* A loop can do the same thing as an enumerator, but enumerators are Ruby's preferred method of doing so.

#### "What's the difference between 'break' and 'return'?"
`break` ends a loop. `next` skips to a loop's next iteration.

#### "Write a 'puts' statement on the board, and describe its input, output, and side effects."
`puts "Hello world!"`
* Input: the string "Hello world!"
* Output: `nil`. The output of every `puts` statement is `nil`.
* Side effect: printing "Hello world!" to the console.

#### "What's the difference between an index and a key?"
An index is used to increase performance.  A key is used to uniquely identify a row.

#### "List two Ruby Enumerators and give their purpose."
`each`: Calls the given block once for each element in self, passing that element as a parameter.
`each_with_index`: Calls block with two arguments, the item and its index, for each item in enum.
`map/collect`: Returns a new array with the results of running block once for every element in enum.
`select/find_all`: Returns a new array containing all elements of ary for which the given block returns a true value.
`detect/find`: Passes each entry in enum to block. Returns the first for which block is not false.
`reject`: Returns an array for all elements of enum for which the given block returns false.
`all?`: Passes each element of the collection to the given block. The method returns true if the block never returns false or nil.
`any?`: Passes each element of the collection to the given block. The method returns true if the block ever returns a value other than false or nil.

#### "Explain the purpose of HTML attributes."
Attributes modify the element, providing meta-information about an element.

#### "Why would we want to take an object-oriented approach to programming?"
To have our solution closely resemble the problem domain.  
It allows us to break our problem in entities.
Each entity encapsulates data and behavior together, while defining an interface with the outside world.
It's easy to expand/share functionality via inheritence and polymorphism.

#### "Create a Student class with one property and one method. Initialize a student."
```
class Student
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def graduate(class)
    class.graduate(self)
  end
end

harry_potter = Student.new("Harry")
```

#### "Explain the difference between attr_reader, attr_writer and attr_accessor."
`attr_reader`: creates getters for the passed attributes.  Must be set via instance variables.
`att_writer`: creates setters for the passed attributes, which assign the associated instance variables.
`attr_accessor`: creates both setters and getters for the passed attributes.

#### "What is the difference between local and instance variables?"
Local variable are accessible withing the scope they are created (usually a method).
Instance variables are available for every instance method in an instance of the class.

#### "When would you use a class variable? Provide an example."
To maintain the same information across every instance (e.g. count of instances, configuration info that is used by all instances)

#### "Create a Lion class that inherits from a Cat class.  Lion#speak returns a ROAR.",
```
class Lion < Cat
  def speak
    "Roar"
  end
end
```

#### "What components are displayed on an ERD?"
Entities, relationships, and attributes

#### "Draw an ERD for a Doctors, Patients, and Appointments."
Doctors have_many Appointments.  Patients have_many Appointments.
Appointments contains FK for Doctor and Patient

#### "List common steps to follow when solving a problem."
- clarify the problem
- brainstorm
- organize/select
- prototype
- review
- double down or pivot

#### "Write the SQL statement to list the last names of everyone in the 'students' table."
`SELECT last_name FROM students`

#### "What's the difference between 'relative' and 'absolute' positioning?"
- static: not positioned
- relative: relative to normal position
- fixed: relative to viewport
- absolute: relative to the nearest **positioned** ancestor

#### "What is a reliable source for 3rd party fonts?"
Google fonts

#### "Name 2 pseudo-classes that allow css to add content to a page."
::after, ::before
