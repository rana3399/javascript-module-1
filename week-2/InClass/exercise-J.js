function secondMatchesAmy(array) {

  var ary = ["Ahmed", "Suman","Amy", "Diego"];
  
  if (ary[2] == "Amy" && array == "Amy") {

  return "Second index matched!";
}

else{
  return "Second index not matched";
}

}

console.log(secondMatchesAmy("Amy"));
