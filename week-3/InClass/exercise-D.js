function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  

    const namesArraySorted = namesArray.sort();
    const magicOutput = yourFunc(namesArraySorted);
  
    return magicOutput;
  }
  
  function upperLetter(namesArray){
      return namesArray.map((name) => name.toUpperCase())
  
  }
  
  var f =  magician(upperLetter);
  console.log(f.sort());