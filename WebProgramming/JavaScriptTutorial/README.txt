## Mozilla tutorial, JavaScript

[Source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

## JavaScript first steps

### What is JavaScript?

An interpreted programming language for client side programming.

Executed in the browser's JavaScript engine.

Each browser tab has their own execution environment.

APIs: browser (or core): [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation), [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
      third party: such as Twitter or Google APIs.
      
### A first splash into JavaScript

Variables, Functions, Operators, Conditionals, Events, Loops, Objects.

.focus()
.createElement()
.appendChild()
.removeChild()
.querySelectorAll()
.getElementById()
typeof _var
.setAttribute()

### Troubleshooting JavaScript
      
Use developer tools.

### Variables

[Reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
      
Variable hoisting: variables are declared before any other code is executed.      

Variable types: numbers, strings, booleans, arrays, objects.
                loose typing (duck typing).
                
### Basic math in JavaScript

Number types: integer, fload, double.
              handles them all with Number() wrapper.

### Handling text

Strings: in " " or ' '.

Escape char: \.

Concat: +.

Convert: toString() and Number().

### Useful string methods

Objects: in JavaScript, everything is an object.

Methods: .length,
         [_number] string/array indexing,
         .indexOf(_substring) to find a substring,
         .slice(_begin, _end) to extract a substring,
         .toLowerCase()/toUpperCase(),
         .replace(_string, _with),
         .split(_by).
         
### Arrays

Created: []

Access: [_number], [_number, _number]

Methods: .length,
         .join(_with),
         .push(_value) and .pop(_value),
         .shift(_value) and unshift(_value) (same as above, but work with the beginning of the array),
         
## JavaScript building blocks

### Conditionals

if {
} else if {
}

&& is AND, || is OR, ! is NOT.

Ternary operator: (_condition) ? execute_if_true : execute_if_false

### Looping code

for (_initial_values; _exit_condition; _end_of_each_loop_expression) {
}

while and do..while

break, continue.

### Functions

Declared or annonymous. Can be stored in variables.

### Build your own function

Trivial.

### Function return values

Using return.

### Introduction to events

[Events reference](https://developer.mozilla.org/en-US/docs/Web/Events)

Event: generated when an action occures.
       listen to by EventListeners, handled by EventHandler function and both are coupled though registration.
         
Event handler properties: .onclick, .onfocus, .onblur, .ondoubleclick, .onmouseover, .onmouseout,
                          window.onkeypress, window.onkeydown, window.onkeyup,
                          register a function to an element.
                          there is also a different syntax: addEventListener() and removeEventListener().
                            aim to use them when you can as they are more powerful and modern.

Event object: passed to event handler functions as a parameter.
              catching the event object in an event handler is optional.
              [properties](https://developer.mozilla.org/en-US/docs/Web/API/Event) such as .target.
              preventDefault() to prevent, for example, forms from being submited if validation fails.

Event bubbling and capture: what happens when two handlers of the same event type are activated on one element.
                            in capture phase: browser checks if the element's outer-most ancestor has an event handler registered and if so, runs it.
                                              the browser then checks the next element and does the same.
                            in bubbling phase: browser checks if the element upon which an action was performed has an event handler registered and if so, runs it.
                                               the browser then checks the next immediate ancestor and does the same.
                              all event handlers are registered in the bubbling phase.
                            stopPropagation() stops event bubbling up the chain.

Event delegation: set an event handler on a parent and have it activate when any child of that parent is activated.
                  useful with lists.
                  [how it works](https://davidwalsh.name/event-delegate)
                  
[Event bubbling/capture](https://www.quirksmode.org/js/events_order.html)
[Accessing event objects](https://www.quirksmode.org/js/events_access.html)
                  
## Introducing JavaScript objects

### JavaScript object basics

Object: declare with {}.
        made up of properties declared with _propertyName: _value.
        and made up of methods declared with _propertyName: _function.
        access using (.) notation or [] notation.
        "this" is used to refer to the current object.
        
### Object-oriented JavaScript for beginners

Objects encapsulate data inside a namespace.

Generic object type: in other languages it is called a class.
                     objects are instantiated from it using a constructor function.
                     can be inherited and can inherit.
                     
Constructor function: a function like any other, but invoked with "new" keyword.
                      use "this" keyword to bind the data to the object instance.

### Object prototypes

Prototype object: each object inherits properties and function from a prototype object.
                  a prototype object can inherit from another prototype object, forming a prototype chain.
                  object prototype =! prototype property.
                    methods and properties are accessed by "walking up" the prototype chain, they are not copied!
                    example: child_obj.help() -> check if .help() is defined in child_object, if not, go up the
                             chain and if check it .help() is defined in parent_obj, if not check grandparent_obj...

JavaScript inheritance system allows function to be implied, overridden and altered just like in any other language.
                  
### Inheritance in JavaScript

Prototypal inheritance: called delegation.
                        use parent_constructor.call() inside the child_constructor.
                          .call() calls the parent "constructor"
                        
### Working with JSON

JSON: JavaScript Object Notation

Stopped here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON


































              