function rollDice(faces) {
  const randomNumber = Math.random();
  const diceResult = Math.floor(randomNumber * faces) + 1;
  return diceResult;
}

console.log(rollDice(6));   // número aleatorio entre 1 y 6
console.log(rollDice(20));  // número aleatorio entre 1 y 20
console.log(rollDice(4));   // número aleatorio entre 1 y 4