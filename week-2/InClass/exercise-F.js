
  function userCheck(userName, userType){
        

        if (userName.length >=5 && userName.length <= 10 && userName.charAt(0) === userName.charAt(0).toUpperCase()) {
        return "Username valid";
    }

    else if (userType == "admin" || userType == "manager"){
        return "Username valid"
    }

    else {
        return "Username invalid";
    }

    }

    console.log(userCheck("jhon", "manager"));