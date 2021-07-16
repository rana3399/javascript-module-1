var bYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function checkAdult(bYear){
    bYear.forEach(year => {
        var age = 2021 - year;
        console.log(age); 
        
    });
                                             
}
console.log(checkAdult(bYear));

function whoCanDrive(){
    if(age > 16){
        console.log("You can drive")
    }
}


// console.log("These are the birth years of people who can drive: " )





