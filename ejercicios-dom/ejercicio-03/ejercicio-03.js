// 3.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);


// 3.2

const removeElement = document.querySelector('.fn-remove-me');
removeElement.remove();


// 3.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrint = document.querySelector('[data-function="printHere"]');

const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

divPrint.appendChild(ulCars);


// 3.4

const countriesData = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countriesData.forEach(country => {

  const div = document.createElement('div');

  const h4 = document.createElement('h4');
  h4.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
});


// 3.5

const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';

btnRemoveLast.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div');
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove();
  }
});

document.body.appendChild(btnRemoveLast);


// 3.6

const countryDivs = document.querySelectorAll('body > div:not([data-function])');

countryDivs.forEach(div => {
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar este';

  btn.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(btn);
});