var messyArray = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];


function checkArray(messyArray){
    messyArray.map(element => {
        var onlyString = typeof(element) == "string";
        console.log(onlyString);
    })

}



console.log(checkArray(messyArray));

//   function isString(messyArray){
//     if(typeof messyArray == 'string'){
//         console.log("its  a  STRING");
//     }else{
//         console.log('NOT  A STRING');
//     }


//   }

    

