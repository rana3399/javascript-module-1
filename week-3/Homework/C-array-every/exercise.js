/*
   This program should check if the array `group` contains only students

   USE EVERY AND INCLUDES METHOD
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];


var studentsWhoAreInGroup = group.every(groupStudent => students.includes(groupStudent));

if(studentsWhoAreInGroup == true){
   console.log("Group contains all the students");
}else{
   console.log("Does Not contain all the students");
}



// function studentsWhoAreInGroup(students) {
//    var onlyGroupPeople =  group.every(groupStudent => students.includes(groupStudent));

//    if(onlyGroupPeople == true){
//       console.log("yes.....treeeeeeeeeeeeeeeeeeee");
//    }else{
//       console.log('this is false');
//    }
   
// }


// console.log(studentsWhoAreInGroup(students));
