const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const contador = {};

  for (let i = 0; i < list.length; i++) {
    const palabra = list[i];

    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }

  return contador;
}

console.log(repeatCounter(words));