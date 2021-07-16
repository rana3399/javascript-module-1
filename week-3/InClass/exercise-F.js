var birthYearofPeople = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function checkAdult(bYear){
    bYear.forEach(year => {
        var age = 2021 - year;
        console.log(age); 

        if(age > 16){
        console.log(`Born in ${year} can drive`);
    }else{
        console.log(`Born in ${year} can drive in ${17} years`);
    }
        
    });
    
}

console.log(checkAdult(birthYearofPeople));