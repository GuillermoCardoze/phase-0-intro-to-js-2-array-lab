
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

   function destructivelyRemoveLastCat(Ralph){
    cats.pop(Ralph);
   }

   function destructivelyRemoveFirstCat(Bob){
    cats.shift(Bob);
   }

   function appendCat(Broom) {

    const newCatsArray = [...cats];
  

    newCatsArray.push(Broom);
  
   
    return newCatsArray;
  }

  function prependCat(Arnold) {
    const newCatsArray = [...cats];
    newCatsArray.unshift(Arnold);
    return newCatsArray;
  }

  function removeLastCat() {
    
    const newCatsArray = [...cats];
  
  
    newCatsArray.pop();
  
  
    return newCatsArray;
  }

function  removeFirstCat() {
    const newCatsArray = [...cats];
    newCatsArray.shift();
    return newCatsArray;
}