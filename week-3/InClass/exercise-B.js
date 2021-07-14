var classStudent =  ["amir", "suman"];
var anotherClass =  ["maria", "joanna"];

var concatAll = classStudent.concat(anotherClass);

var x = concatAll.map( name => name.toUpperCase());


console.log(x);

 var q = function (name, arryName){
    var joinName = name.concat(arryName);
    var convertToString = joinName.join("-");
  return convertToString;

 
}

console.log(q(concatAll, 'tina'));

function isTrue(name) {
    return convertToString.includes(name);
  }

