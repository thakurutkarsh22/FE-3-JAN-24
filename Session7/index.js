const obj = {
  a: 12,
  b: 13,
  name: "akash",
};

// instance ?

class Car {
  name;
  model;

  constructor(name, model) {
    // context = new -> {}
    this.name = name;
    this.model = model;
  }

  canRun() {
    console.log("hello");
  }
}

const ferrari = new Car("ferrari", "v1");

// ferrari.__proto__.year = "2019";

console.log(ferrari);

//ferrari is an instance of Car class.

// for (const key in ferrari) {
//   if (Object.hasOwnProperty.call(ferrari, key)) {
//     const element = ferrari[key];
//     console.log(element, key);
//   }
// }

// const keyValuePair = Object.entries(ferrari); // [[key, value]]
// console.log(keyValuePair);

// const onlyKeys = Object.keys(ferrari);

// const onlyValues = Object.values(ferrari);

// console.log(onlyKeys);
// console.log(onlyValues);

//  --------- Activity

// const employeeData = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// class Util {
//   data;
//   constructor(employeeData) {
//     this.data = employeeData;
//   }

//   sumSalaries() {
//     const salariesArray = Object.values(this.data);

//     let sum = 0;
//     for (let index = 0; index < salariesArray.length; index++) {
//       const element = salariesArray[index];
//       sum += element;
//     }

//     return sum;
//   }

//   averageSalaries() {
//     const totalSalary = this.sumSalaries();
//     const noOfEmployees = Object.keys(this.data).length;

//     return totalSalary / noOfEmployees;
//   }

//   findSalaryRange() {
//     const salariesArray = Object.values(this.data).sort((a, b) => a - b); // ascendng order
//     let maxSalary = salariesArray[salariesArray.length - 1];
//     let lowestSalary = salariesArray[0];

//     return maxSalary - lowestSalary;
//   }
// }

// const employeeDataObj = new Util(employeeData);

// console.log(employeeDataObj.sumSalaries());
// console.log(employeeDataObj.findSalaryRange());

// console.log(employeeDataObj);

// -------- ----------- INHERITANCE -----------------

// class Parent {
//   name;
//   properties = 12;

//   constructor(name) {
//     this.name = name;
//   }

//   sum() {
//     console.log("sum");
//   }

//   livingLife() {
//     console.log("living");
//   }
// }

// const parentObj = new Parent("Parenttttttttt");
// console.log(parentObj);

// // child is a derived class
// // we are dervied from our parents
// class Child extends Parent {
//   toys = 10;
//   name;

//   constructor(name) {
//     super(); //  super ? ->  Parent
//     this.name = name; // this -> Child
//   }

//   badHabits() {
//     console.log("yep bad habits");
//   }

//   screenTime() {
//     console.log("100 hrs of instagram");
//   }
// }

// const childObj = new Child("Aman");
// childObj.screenTime();
// childObj.livingLife();
// console.log(childObj);

//  ----------- Method Overriding ----------

class Student {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  markAttendance() {
    console.log(this.name, " is present in CLASS");
  }

  books() {
    console.log("books");
  }
}

class SportsCaptain extends Student {
  name;
  age;
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  markAttendance() {
    // super.markAttendance();
    console.log(this.name, " is present in GROUND");
  }

  equipment() {
    console.log("hocky");
  }
}

// const utkarsh = new Student("utkarsh", 12);
// utkarsh.markAttendance();
// console.log(utkarsh);

const virat = new SportsCaptain("virat", 30);
virat.markAttendance();
console.log(virat);

//  --------- Acitvity Office....

class Employee {
  name;
  department;

  constructor(name, dep) {
    this.name = name;
    this.department = dep;
  }

  markPresent() {
    console.log(this.name, " is PRESENT");
  }

  getRole() {
    console.log("Employee of Office");
  }
}

const utEmployee = new Employee();

// developer is child.
// employee is parent.

class Developer extends Employee {
  prefLanguage;
  constructor(name, preflanguage) {
    super(name, "Engineering"); // i am calling Employee Constructor
    this.prefLanguage = preflanguage;
  }

  submitCode() {
    console.log(`Code submitted by ${this.name} from CCBCCB`);
  }

  getRole() {
    console.log(`works with ${this.prefLanguage}`);
  }
}

const utkarsh = new Developer("utkarsh", "java");
utkarsh.markPresent();
utkarsh.submitCode();
utkarsh.getRole();
console.log(utkarsh);
