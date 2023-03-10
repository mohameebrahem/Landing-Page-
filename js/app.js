let localColors = localStorage.getItem('color-option');
const colorsLi = document.querySelectorAll('.colors-list li');
let intervalId;
let backgroundOption = true;
if (localColors !== null) {
  document.documentElement.style.setProperty('--main-color', localColors);

  colorsLi.forEach((el) => {
    el.classList.remove('active');
    if (el.dataset.color === localColors) {
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

const backgroundBtns = document.querySelectorAll('.random-backgrounds span');
function randomnbackgrounds() {
  if (backgroundOption == true) {
    intervalId = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imagesArray.length);

      landingPage.style.backgroundImage = `url("images/${imagesArray[randomNumber]}")`;
    }, 1000);
  }
}
backgroundBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.querySelectorAll('span').forEach((span) => {
      span.classList.remove('active');
    });
    e.target.classList.add('active');

    if (e.target.classList.contains('yes')) {
      backgroundOption = true;
      randomnbackgrounds();
      localStorage.setItem('background-option', true);
    } else {
      clearInterval(intervalId);
      backgroundOption == false;
      intervalId = null;
      localStorage.setItem('background-option', false);
    }
  });
});

let localBackground = localStorage.getItem('background-option');
if (localBackground) {
  if (localBackground == 'true') {
    backgroundOption = true;
  } else if (localBackground == 'false') {
    backgroundOption = false;
  }
  backgroundBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  if (localBackground == 'true') {
    document.querySelector('.yes').classList.add('active');
  } else if (localBackground == 'false') {
    document.querySelector('.no').classList.add('active');
  }
}
randomnbackgrounds();
