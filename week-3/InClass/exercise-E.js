var birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function checkAge(year){
    
 year.forEach(anyYear => {
     var actualAge =  2021 - anyYear;
     console.log(actualAge);
     
 })


}

console.log(checkAge(birthYear)); 
