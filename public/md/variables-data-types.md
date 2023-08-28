Variables are used to store and manage data in JavaScript. They act as containers that hold values. You can think of them as named storage locations for information that can be changed or accessed later in your code.

```js
// Declare a variable named 'age' and assign a value
var age = 25;

// Variables can be updated with new values
age = 30;

// Declare multiple variables in one line
var name = "John",
    city = "New York";
```

### Primitive Data Types

JavaScript has several primitive data types, which are the building blocks of all other data in the language. They are simple and immutable (cannot be changed once created). The primitive data types in JavaScript are:

Number: Represents both integer and floating-point numbers.

```js
var num = 42; // An integer
var price = 19.99; // A floating-point number
```

String: Represents textual data enclosed in single ('') or double ("") quotes.

```js
var greeting = "Hello, world!";
var name = "Alice";
```

Boolean: Represents a binary value, true or false.

```js
var isStudent = true;
var isLoggedIn = false;
```

Null: Represents an intentional absence of value.

```js
var emptyValue = null;
```

Undefined: Represents a variable that has been declared but has not been assigned a value.

```js
var uninitialized;
console.log(uninitialized); // Outputs: undefined
```

Symbol: Represents a unique and immutable value, often used as object property keys.

```js
var uniqueKey = Symbol("description");
```

Each primitive data type has its own characteristics and uses in programming. It's important to note that variables of primitive data types store the actual value directly.
