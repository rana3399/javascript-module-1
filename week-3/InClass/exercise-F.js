
var bYear = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function driveOrNot (bYear){
    bYear.forEach(year => 2021 - year);
    

}
var t = driveOrNot(bYear);

if (t > 16){
    console.log(`Born in ${byear} can drive`);
}

else {
    console.log(`cant drive`);
}



// console.log(`Born in ${byear} can drive`);