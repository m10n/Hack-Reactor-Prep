
// Week 1 individual challenges


// 1. Write a function called billTotal that can be used to calculate the total to be paid 
// at a restaurant -- including tip and tax -- given the subtotal (i.e. cost of food and drinks). 
// We can assume that the tip will be 15% and tax will be 9.5%. 
// Make sure that the tip does not include the tax!



function billTotal(subTotal){
return subTotal + (subTotal * .15) + (subTotal * .095);
}

billTotal(100);
//=> 124.5



// 2. Implement the function called animalNoise that accepts two parameters: 
// a type of animal and an emotion that indicates that animal's current emotional state. 
// Based on the combination of animal and emotion, animalNoise should return an appropriate noise 
// (represented as a string). The function should work with at least two different animals and emotions.


function animalNoise(animal, emotion){
  if(animal==="walrus" && emotion==="forlorn"){
    return "Melancholy bellowing";
  } else if(animal==="sea lion" && emotion==="amused"){
    return "Vociferous barking";
  } else if(animal==="shark" && emotion==="hungry"){
    return "Ominous music";
  } else if(animal==="housecat" && emotion==="satisfied"){
    return "Contented purring";
  } else {
    return "Try a different animal or emotion."
  }
}

animalNoise("walrus","forlorn"); //=> 'melancholy bellowing'
animalNoise("ecstatic","otter"); //=> 'try a different animal or emotion'


// 3. The digital sum of a number is the sum of all its digits, 
// e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. 
// Use any of the methods of reptition that we have covered so far to implement this function.

// What should digitalSum of a single-digit number return, e.g. digitalSum(8)?


//using recursion
function digitalSum(n){
  if (n < 10){
    return n;
  }
  return (n % 10) + digitalSum(Math.floor(n / 10));
}

digitalSum(1337); //=> 14   (1+3+3+7=14)
digitalSum(8); //=> 8



//using a while loop
function digitalSum(n){
  var result = 0;
  while(n > 0){
    result = result + (n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}

digitalSum(1337); //=> 14   (1+3+3+7=14)
digitalSum(8); //=> 8











