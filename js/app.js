let mainColors = localStorage.getItem('color-option');
const colorsLi = document.querySelectorAll('.colors-list li');

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors);

  colorsLi.forEach((el) => {
    el.classList.remove('active');
    if (el.dataset.color === mainColors) {
      el.classList.add('active');
    }
  });
}

const toggleSpin = document.querySelector('.toggle-settings i');
toggleSpin.addEventListener('click', function () {
  this.classList.toggle('fa-spin');
  document.querySelector('.settings-box').classList.toggle('open');
});
colorsLi.forEach((li) => {
  li.addEventListener('click', (e) => {
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color
    );
    localStorage.setItem('color-option', e.target.dataset.color);
    e.target.parentElement.querySelectorAll('.active').forEach((el) => {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
const landingPage = document.querySelector('.landing-page');
let imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imagesArray.length);

  landingPage.style.backgroundImage = `url("images/${imagesArray[randomNumber]}")`;
}, 10000);

const backgroundBtns = document.querySelectorAll('.random-backgrounds span');
backgroundBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.querySelectorAll('span').forEach((span) => {
      span.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
