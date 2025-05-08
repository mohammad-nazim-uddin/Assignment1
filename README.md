# TypeScript Interview Questions & Notes

## ✅ What’s the Difference Between `interface` and `type` in TypeScript?

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

<table>
  <thead align="center">
    <tr>
      <td><b>No</b></td>
      <td><b>Types</b></td>
      <td><b>Interface</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>A collection of data types.</td>
      <td>A syntactical contract.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>More flexible.</td>
      <td>Less flexible compared to type.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Uses the type keyword.</td>
      <td>Uses the interface keyword.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Supports creating a new name for a type.</td>
      <td>Provides a way to define entities.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Does not inherently support the use of an object.</td>
      <td>Supports the use of an object.</td>
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
