const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// Ejemplos findArrayIndex
console.log(findArrayIndex(mainCharacters, "Rey"));      // 4
console.log(findArrayIndex(mainCharacters, "Leia"));     // 1
console.log(findArrayIndex(mainCharacters, "Yoda"));     // -1 (no existe)

// Ejemplos removeItem
console.log(removeItem([...mainCharacters], "Han Solo")); // array sin Han Solo
console.log(removeItem([...mainCharacters], "Anakin"));   // array sin Anakin
console.log(removeItem([...mainCharacters], "Yoda"));     // array sin cambios (no existe)
