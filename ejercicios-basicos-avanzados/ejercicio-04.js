//1.
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//2.
console.log(aldeanos[3]);

//3.
aldeanos.push("Cervasio");
console.log(aldeanos);

//4.
aldeanos[0] = "Bambina";
console.log(aldeanos);

//5.
aldeanos.reverse();
console.log(aldeanos);

//6.
const indiceNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(indiceNarciso, 1, "Canela");
console.log(aldeanos);

//7.
console.log(aldeanos[aldeanos.length - 1]);