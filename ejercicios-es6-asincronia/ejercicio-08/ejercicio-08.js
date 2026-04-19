const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });
  })
  .catch(error => console.log(error));

select.addEventListener('change', event => {
  image.src = event.target.value;
});