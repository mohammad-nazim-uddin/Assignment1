
# TypeScript Interview Notes

## 🔄 Difference Between `type` and `interface`

<table>
  <thead>
    <tr>
      <th>No</th>
      <th>Type</th>
      <th>Interface</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Can define primitives, unions, intersections, and object shapes.</td>
      <td>Mainly defines the structure of objects and contracts for classes.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cannot be extended or reopened once defined.</td>
      <td>Can be extended or merged using declaration merging.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Better suited for complex type compositions.</td>
      <td>Better suited for object-oriented designs.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>More flexible in defining combinations of types.</td>
      <td>More structured and focused on defining object contracts.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Cannot be implemented by a class.</td>
      <td>Can be implemented by a class.</td>
    </tr>
  </tbody>
</table>

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

