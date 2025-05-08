
# TypeScript Interview Notes

 ✅ What’s the Difference Between `interface` and `type` in TypeScript?

Both `interface` and `type` in TypeScript are used to define the shape of data, but they serve slightly different purposes and have different capabilities.

### `interface`

An `interface` is used to define the structure of an object. It specifies the properties and method signatures an object must have. Interfaces are ideal for defining object contracts and can be extended or implemented by classes.

#### Syntax

```ts
interface InterfaceName {
  property: type;
  method(): returnType;
}
```

#### Example

```ts
interface Person {
  name: string;
  gender: string;
  age: number;
}

const person: Person = {
  name: "Nazim",
  gender: "Male",
  age: 25,
};

console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}.`);
```

#### Output

```
Name: Nazim, Age: 25, Gender: Male.
```

---

### `type`

A `type` alias can define any valid type in TypeScript — including primitives, unions, intersections, and object shapes. It’s more flexible than an interface and great for building complex type compositions.

#### Example

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Nazim",
  age: 25,
};

console.log(user);
```

#### Output

```ts
{ name: "Nazim", age: 25 }
```

---

### 🔑 Key Differences Between `type` and `interface`

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <thead style="background-color: #f2f2f2; text-align: center;">
    <tr>
      <th>No</th>
      <th>Type Alias</th>
      <th>Interface</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Can describe any valid type: primitives, unions, tuples, etc.</td>
      <td>Mainly used to describe object shapes and class contracts.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cannot be reopened to add new properties after creation.</td>
      <td>Can be extended or merged using declaration merging.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Ideal for creating complex type compositions using union or intersection types.</td>
      <td>Ideal for defining consistent structure of objects or classes.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Better suited for utility types and functional programming patterns.</td>
      <td>Better suited for object-oriented patterns and inheritance.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Cannot implement a type alias in a class directly.</td>
      <td>Can be implemented by classes for enforcing structure.</td>
    </tr>
  </tbody>
</table>
---

## 🔍 What is the `keyof` Keyword in TypeScript?

The `keyof` keyword is a TypeScript operator used to get a union of string literal types representing the keys of a given object type.

It's particularly useful when you want to build utility types or restrict values to valid keys of another type, ensuring strong type safety.

### Example

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;
// Result: "name" | "age" | "email"
```

In this example, `keyof Person` creates a new type that is a union of the keys `"name"`, `"age"`, and `"email"`. This allows you to safely refer to the keys of an object type in generic or dynamic scenarios.

## ❓ Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

- `any`: Opts out of type checking. You can assign anything to a variable typed as `any`, and it can be assigned to anything.
- `unknown`: Like `any`, but safer. You cannot use it directly without narrowing the type first.
- `never`: Indicates values that never occur. Used in functions that never return or throw exceptions.

## 🧭 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums allow you to define a set of named constants.

```ts
// Numeric Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// String Enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}
```

## 💡 What is type inference in TypeScript? Why is it helpful?

Type inference means TypeScript automatically determines the type of a variable when it's declared without an explicit type. This helps reduce redundancy and improves code readability while maintaining type safety.

```ts
let count = 10; // inferred as number
```

## 🛠️ How does TypeScript help in improving code quality and project maintainability?

- Catches errors at compile time
- Provides better IDE support (auto-completion, navigation, refactoring)
- Encourages better design with interfaces and types
- Makes code more self-documenting and easier to understand
- Enhances collaboration in large teams

## 🔀 Provide an example of using union and intersection types in TypeScript.

```ts
// Union type
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

// Intersection type
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  department: string;
};

type ManagerEmployee = Employee & Manager;
```

