// 2.1
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);


// 2.2
const divConP = document.createElement('div');
const pDentro = document.createElement('p');

divConP.appendChild(pDentro);
document.body.appendChild(divConP);


// 2.3
const div6P = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  div6P.appendChild(p);
}

document.body.appendChild(div6P);


// 2.4
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);


// 2.5
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';


// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);


// 2.7
const elementosEliminar = document.querySelectorAll('.fn-remove-me');

elementosEliminar.forEach(elemento => {
  elemento.remove();
});


// 2.8
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div');
divs[0].after(pMedio);


// 2.9
const divInsertHere = document.querySelectorAll('div.fn-insert-here');

divInsertHere.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});