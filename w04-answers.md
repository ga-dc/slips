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
#### "List two Ruby Enumerators and give their purpose."
#### "Explain the purpose of HTML attributes."
#### "Create a Student class with one property and one method. Initialize a student."
#### "Explain the difference between attr_reader, attr_writer and attr_accessor."
#### "What is the difference between local and instance variables?"
#### "When would you use a class variable? Provide an example."
#### "Create a Lion class that inherits from a Cat class."
