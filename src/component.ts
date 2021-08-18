class Person {
  private id: number;
  private name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }
  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getAge(): number {
    return this.age;
  }

  setAge(value: number) {
    this.age = value;
  }
}
const person = new Person(1, "Ram", 20);
console.log(person);
