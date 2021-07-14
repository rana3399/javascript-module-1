var classStudent =  ["amir", "suman"];
var anotherClass =  ["maria", "joanna"];

var concatAll = classStudent.concat(anotherClass);

console.log(concatAll.sort());

function returnString(name, arryName){
    var x = name + arryName;
    return x.join(" ");


}

console.log(returnString(concatAll));