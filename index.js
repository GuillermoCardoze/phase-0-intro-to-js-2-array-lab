
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
  cats.push(name)
  return cats;
}
function destructivelyPrependCat(name){
  cats.unshift(name)
  return cats;
}
function destructivelyRemoveLastCat(name){
  cats.pop()
  return cats;
}
function destructivelyRemoveFirstCat(name){
  cats.shift()
  return cats;
}
function appendCat(name){
  let Broom = [...cats, name];
  return Broom;
}
function prependCat(name){
  let Arnold = [name,...cats];
  return Arnold;
}
function removeLastCat(name){
  const newCatArray = [...cats]
  newCatArray.pop()
  return newCatArray;
}
function removeFirstCat(name){
  const newCatArray = [...cats]
  newCatArray.shift()
  return newCatArray;
}