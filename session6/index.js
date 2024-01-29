// const personobj = {
//   name: "utkarsh",
//   class: 12,
//   roll: 123,
//   asdasdas: 123123,
// };

// personobj.name = "hello";
// console.log(personobj, "open Object");

// Schema ----

// Class is a syntatical sugar this is nothing known as class in js
// js converts Classes into Constructor functions.

// 2015 ->
// class Person {
// // not necessary
//   name;
//   standard;
//   note;

//   constructor(name, std, note) {
//     // this -> Person class
//     this.name = name;
//     this.standard = std;
//     this.note = note;
//   }

//   canWalk() {
//     console.log("yes I can walk", this.name);
//   }
// }

// // const

// const utkarshObj = new Person("ut", 99, "jhgkhfkhfhjgfjhgf");

// const VarunObj = new Person("varun", 100);
// console.log(utkarshObj, "utkarshObj person");
// console.log(VarunObj, "varun obj person");

// -------- Constructor Functions ..........

// function Person(name, standard, notes) {
//   // this -> means Person Function. // Context..
//   this.namessssssss = name;
//   this.standard = standard;
//   this.note = notes;

//   this.canWalk = function () {
//     console.log(`Hey you can walk`);
//   };
// }

// const utkarshObj = new Person("utkarsh", 99, "jhgkhfkhfhjgfjhgf");
// // const varunObj = new Person("varun", 100, "jhgkhvarun notesfkhfhjgfjhgf");

// console.log("utkarshObj", utkarshObj);
// console.log("varun obj", varunObj);

//  ------------ FEAR OF THIS KEYWORD ----------------

// callSite

// function baz() {

// }

// const bazCopy = baz; // is this a call site ?  NO

// baz() // call site of Baz ?  YES...

// THIS -> COntext -> IS DETERMINED BY CALL SITE..

//---------- Rule 1 -> Default Binding .....

// function foo() {
//   // this -> context -> window object...
//   console.log(this); // window Obje
//   console.log(this.a);
// }

// var a = 12;

// foo(); // Default Window object
// call site ? yes
// have I given any Extra Information AT CALL SITE ? NO

//  Rule 2 ->>>>>> Implicit Binding

// example 1

// var obj = {
//   a: 11000,
//   foo: foo,
// };

// function foo() {
//   // context this = obj
//   console.log("hello");
//   console.log(this.a);
// }

// obj.foo(); // is this call site ? Yes
// have i given any EXTRA information to FOOS() ? Yes Obj

// Pitfall for rule 2

// example 2

// var obj = {
//   a: 11000,
//   foo: foo,
// };

// function foo() {
//   // context this = window
//   console.log(this); // window
//   console.log("hello");
//   console.log(this.a); // undefined.
// }

// const fooCopy = obj.foo; // is this a call site ? NO

// fooCopy(); // window

// Is this call site ? YES
// have i given any extra info ? NO.

// foo();
// fooCopy();

//  example 3

// var obj2 = {
//   a: 11000,
//   foo: foo,
// };

// var obj1 = {
//   a: 22,
//   obj2: obj2,
// };

// function foo() {
//   // context -> this -> Obj2
//   console.log("hello");
//   console.log(this.a);
// }

// console.log(obj1.a); // 22
// console.log(obj1.obj2.a); // 11000

// obj1.obj2.foo();
// is this a call site ? Yes
// Have i Give any etra Info to this Call site ? Yes Obj2 and not Obj1

//  ---------- Rule 3 -> Explicit Binding ......

// 1. Call

// var obj = {
//   a: 12,
//   b: 100000,
// };

// function foo(param1, param2, param3) {
//   // context -> this-> obj
//   console.log(this.a, this.b, param1, param2, param3);
// }

// foo.call(obj, { name: "utkarsh" }, 20, 30);
// foo(10, 20, 30); // defaut // window
// is this call site ? yes.
// have i given any extra info ? no.
// have i given any instruction ? Yes.

// foo(10, 20, 30) // foo.call means foo()

// 2. apply

// foo.apply(obj, [1, 2, 3, 4]);
// foo(); // foo.call means foo()

// 3. Bind

// let bar = foo.bind(obj, 100, 200, 300);
//asdkahdakshdakhds
// askdhaskdhsa

// bar();

// ------ bind practical Example

// const timer = {
//   currentTime: 0,
//   dumbFunction: function () {
//     console.log("hello");
//   },
//   showTime: function () {
//     console.log(this.currentTime, "current time");
//   },
//   addTen: function (param1) {
//     //context -> this -> timer
//     console.log(this, "addTen default", param1);
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// const addTenFunctionCopy = timer.addTen.bind(timer, 999999);

// // addTenFunctionCopy() // call site funciton call

// const functionHello = function () {
//   console.log("hellosssss");
// };

// setTimeout(addTenFunctionCopy, 5000); //? ??

// Browser file
// function setTimeout(fn, delay) {
//   // weird shit ..  wait for delay (5 s)

//   fn(); //  is this a call site ? yes
//   //  have i given any extra infoprmation: ? No
//   // Default binding /// Windows objec
// }

//  Rule no 4 ------------ new Keyword -------------

// class car {

// }

// function Car(model, color) {
//   this.model = model;
//   this.color = color;

//   this.start = function () {
//     console.log(this.model, "car start modee");
//   };
// }

// const ferrari = new Car("V1", "red"); // is thiss a call site ? yes
//  yes in a way you have given some information, i.e, new keyword.

// new keyword creates a black OBJect {} which is the Context of Class and Constructor function.

// RULE PRECEDENCE - ----------> Increasing power

// default binding << implicit <<< Explicit <<<<<<< new.

// function foo(something) {
//   // context -> obj2
//   console.log(this.a);
// }

// var obj1 = {
//   a: 22,
//   foo: foo,
// };

// var obj2 = {
//   a: 99,
// };
// obj1.foo(); // 22
// obj1.foo.call(obj2); // 99
// is this call site ? yes
// is this having extra info // ? yes
// are you giving instructions? yes

// Activity ---------

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };

  this.printFriendList = function () {
    console.log(this.friendList);
  };

  this.findMutualsWith = function (userObj) {
    // contesxt -> this -> utkarshuser
    // nitin ? userObj -> nitinUser
    const { friendList: friendListNitin } = userObj;

    // where are the friends of utkarsh?
    // how can i get utkarshuser here ?

    const utkarshuser = this;
    const { friendList: friendListUtkarsh } = utkarshuser;

    console.log(friendListNitin, friendListUtkarsh);

    const filteredAns = friendListNitin.filter((value) =>
      friendListUtkarsh.includes(value)
    );
    return filteredAns;
  };
}

const utkarshuser = new User("utkarsh thakur");
utkarshuser.addFriend("animesh");
utkarshuser.addFriend("anamika");
utkarshuser.addFriend("ayushi");
utkarshuser.addFriend("rishabh");

const nitinUser = new User("nitin kumar");
nitinUser.addFriend("varun");
nitinUser.addFriend("kishan");
nitinUser.addFriend("rishabh");
nitinUser.addFriend("ayushi");

console.log(utkarshuser);
console.log(nitinUser);
console.log(utkarshuser.findMutualsWith(nitinUser), "final answer"); // call site ? yes
