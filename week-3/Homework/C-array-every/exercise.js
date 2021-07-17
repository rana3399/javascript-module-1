/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];


// var groupIsOnlyStudents = students.every(x => x == ["Dany"]);      // complete this statement

function groupIsOnlyStudents(student){
   var groupIsOnly = student.every((s) => {
    s == "Dany";
    return groupIsOnly;
  })
}

console.log(groupIsOnlyStudents(students));

// if (groupIsOnlyStudents) {
//   console.log("The group contains only students");
// } else {
//   console.log("The group does not contain only students");
// }

/* EXPECTED RESULT */

// The group does not contain only students
