function exponential(number) {
  return number * number;
}


function isEven(number) {

  for(i=5; i<=number; i++){
    if(i % 2 == 0){
    
      var exponentialNumber = exponential(i); //all the even numbers are inside i
      console.log("The expo. of " + i + "is " + exponentialNumber);

}

isEven(20);


// --------------------------------------

// var num=20;
// var message = "The exponential of " 
        
//     for(var i=5; i <= num; i++){ 
//         if(i % 2 == 0){

//         // console.log(i)
            
//         console.log(message + i + " is " + (i * i))
        
//         }
//     }