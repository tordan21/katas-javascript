const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);

  if (index !== -1) {
    return [true, index];
  } else {
    return false;
  }
}

console.log(nameFinder(names, "Tony"));    // [true, 2]
console.log(nameFinder(names, "Bruce"));   // [true, 7]
console.log(nameFinder(names, "Thor"));    // false