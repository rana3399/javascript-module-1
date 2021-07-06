

let userAge = 29;
let userName = "Sam";
let currentYear = new Date();
let datetoyear = currentYear.getFullYear();

 console.log(datetoyear);
// console.log(currentYear);

// 

function birthday(){
    var userBirthday = datetoyear - userAge;
    return userBirthday;

}
console.log(`${userName} was born in the year of ${birthday()}`);

