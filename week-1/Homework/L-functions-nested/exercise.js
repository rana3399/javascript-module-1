var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var greeting = "Welcome to Spain ";

console.log(greeting.toUpperCase() + mentor1.toUpperCase());
console.log(greeting + mentor2.toUpperCase());
console.log("Welcome to Barcelona " + mentor3.toUpperCase());
console.log("Welcome to Barcelona " + mentor4.toUpperCase());
console.log("Welcome to Barcelona " + mentor5.toUpperCase());

// ------------------------------------------


// Exercise -1

function percentage(person, totalPeople){
  return (person / totalPeople)* 100;

}


var totalPeople = 19; //14
var mentor = 5; //19
var student = 12;

var preciseResult =  Math.round(percentage(student, totalPeople));
var preciseResultforMentor =  Math.round(percentage(mentor, totalPeople));



console.log("The percentage of the student in the group is : " + preciseResult + "%");
console.log("The percentage of the mentors in the group is : " + preciseResultforMentor + "%");

// -----------------------

// function percentage(totalMentor, totalPeople){
//   return (mentor / totalPeople)* 100;

// }

// var totalPeople = 19; //14
// var mentor = 5; //19

// var preciseResult =  Math.round(percentage(mentor, totalPeople));


// console.log("The percentage of the mentors in the group is : " + preciseResult + "%");


// ------------------------------------




function getAgeInDays(age) {
  return age * 365;
}

var a = getAgeInDays(20);
console.log(a);




// function createCreeting(name, age) {
//   var ageInDays = getAgeInDays(age);
//   var message =
//     "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
//   return message;
// }

