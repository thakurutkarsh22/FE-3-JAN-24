// console.log("hello world");

// localStorage.setItem("JAN--2024", "hello jan class");

// const a = 1;
// const b = 2;
// const sum = a + b;

// const obj = {};

// console.log(sum);

//  ------- - - - - - - - -

// Api

const news = "Someone Won gold medal"; // fetch("hindustan.com")

// selecting single element
const headingElement = document.getElementById("heading2");
console.dir(headingElement);
headingElement.innerHTML = news;

const querySelectorElement = document.querySelector("#heading1"); // It will give a single NODE
console.log(querySelectorElement);

// Selecting multiple element

const headingElementBytag = document.getElementsByTagName("h1");
console.log(headingElementBytag);

const headingElementByClassName = document.getElementsByClassName("punjabi");
console.log(headingElementByClassName);

const querySelectorElements = document.querySelectorAll("h1");
console.log(querySelectorElements);

querySelectorElement.textContent = `<u><b>woops!!!</b></u    asadsadsadjgasjdga         asdgasjdgasjd g`;
