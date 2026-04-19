const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  const elementosUnicos = [];

  for (let i = 0; i < list.length; i++) {
    if (!elementosUnicos.includes(list[i])) {
      elementosUnicos.push(list[i]);
    }
  }

  return elementosUnicos;
}

console.log(removeDuplicates(duplicates));