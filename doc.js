// let count;
// document.write("Starting loop"+"<br/>");
// for(count=0;count<10;count++){
//     document.write("Current count:"+count + "<br/>");

// }
// document.write("Loop stopped")

// for(key in object){
//code block to be executed
// }
// const person={
//     fname:"Sanskar",
//     lname:"Gaur",
//     age:19

// };
// for (let x in person){
//     document.write("person details:" + x + ":" + person[x] + "<br/>");
// }

// var age = 19;
// if (age >= 18) {
//     document.write("You are eligible to vote");
// }
// else {
//     document.write("You are not eligible to vote");
// }

// let grade = 'A';
// document.write("Entering switch statement"+"<br/>");
// switch (grade) {
//     case 'A':document.write("Excellent");
//     break;
//     case 'B':document.write("Good");
//     break;
//     case 'C':document.write("Fair");
//     break;
//     case 'D':document.write("Poor");
//     break;
//     default:document.write("Invalid grade");
// }

// function myFunction() {
//     alert("Button clicked");
// }

// function sayHello(name,age){
//     document.write("Hello "+name+"! You are "+age+" years old.");
// }

// var add2 = (a, b) =>
//     console.log(a + b);
// add2(5, 10);

// var person = {
//     name: "Sanskar",
//     age: 19,
//     isMarried: false,
//     address: {
//         street: "teacher colony",
//         city: "REWA",
//     }
// };
// console.log(person);

var person2 = new Object();
person2.name = "Sanskar";
person2.age = 19;
person2.isMarried = false;
person2.address = {};
person2.address.street = "teacher colony";
person2['address']['city'] = "REWA";
console.log(person2);



