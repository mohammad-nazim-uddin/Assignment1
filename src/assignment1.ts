{
  function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
  }
  console.log(formatString("HELLO", false))

  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter(({ rating }) => rating >= 4.0);
  }

  const bookList = [
    { title: "Winds of Change", rating: 4.2 },
    { title: "Silent Storm", rating: 3.7 },
    { title: "Echoes of Truth", rating: 4.8 },
  ];

  filterByRating(bookList);

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

  concatenateArrays(["alpha", "beta"], ["gamma"]);
  concatenateArrays([10, 20], [30], [40, 50]);

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }

  }

  const myCar = new Car("Mazda", 2018, "CX-5");
  myCar.getInfo();
  myCar.getModel();
  
  

  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }

  processValue("example");
  processValue(12);

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.reduce<Product | null>((prev, curr) => {
      return !prev || curr.price > prev.price ? curr : prev;
    }, null);
  }

  const storeItems = [
    { name: "Marker", price: 12 },
    { name: "Board", price: 35 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(storeItems);
  

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      return Promise.reject("Error: Negative number not allowed");
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(n * n), 1000);
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
