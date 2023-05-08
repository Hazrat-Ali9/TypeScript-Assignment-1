class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getDetails(): string {
    return `The name of the person is ${this.name}, and the age is ${this.age}`;
  }
}

const instanceOfPerson = new Person("Hazrat Ali", 50);
console.log(instanceOfPerson.getDetails());

class Student extends Person {
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  public getGrade(): string {
    return `The grade of the student is ${this.grade}`;
  }
}

const instanceOfStudent = new Student("Hazrat Ali", 20, 0);
console.log(instanceOfStudent.getGrade());
