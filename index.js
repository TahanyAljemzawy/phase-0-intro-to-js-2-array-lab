// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function resetCats() {
  cats = [];
  return cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat(name) {
  return cats.push(name);
}
destructivelyAppendCat("Ralph");
// resetCats();

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}
destructivelyPrependCat("Bob");
// resetCats();

function destructivelyRemoveLastCat() {
  return cats.pop();
}
destructivelyRemoveLastCat();
// resetCats();

function destructivelyRemoveFirstCat() {
  return cats.shift();
}
destructivelyRemoveFirstCat();
// resetCats();

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
