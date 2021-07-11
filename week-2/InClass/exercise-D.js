
function checkMyFeelings (input){


    if (typeof input === "happy"){
        return input + "Good job, you're doing great!";
    }
    

    else if (typeof input === "sad"){
        return input + "Every cloud has a silver lining";
    }

    else if (typeof input === "number"){
        return input + "Beep beep boop";
    }
    
    else (typeof input === "number")
        return input + "I'm sorry, I'm still learning about feelings!";
    

}

console.log(checkMyFeelings("45 "));
