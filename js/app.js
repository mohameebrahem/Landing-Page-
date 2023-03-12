let localColors = localStorage.getItem('color-option');
const colorsLi = document.querySelectorAll('.colors-list li');
const allSkills = document.querySelectorAll('.skill-box span');
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
    handleActive(e);
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
    document.querySelector('.random-backgrounds .yes').classList.add('active');
    backgroundOption = true;
    randomnbackgrounds();
  } else if (localBackground == 'false') {
    document.querySelector('.random-backgrounds .no').classList.add('active');
  }
}
backgroundBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
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
    handleActive(e);
  });
});

let ourSkills = document.querySelector('.skills');
window.onscroll = function () {
  let skillsOffsetTop = ourSkills.offsetTop;
  let skillsOffsetOuterHeight = ourSkills.offsetHeight;
  let innerHeight = this.innerHeight;
  let windowScrollTop = this.scrollY;

  if (
    windowScrollTop >
    skillsOffsetTop + skillsOffsetOuterHeight - innerHeight * 1.5
  ) {
    allSkills.forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  } else {
    allSkills.forEach((element) => {
      element.style.width = 0;
    });
  }
};
let ourGallery = document.querySelectorAll('.images-box img');
ourGallery.forEach((img) => {
  img.addEventListener('click', (e) => {
    let overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
    let popupBox = document.createElement('div');
    popupBox.className = 'popup-box';

    if (img.alt != null) {
      let popupHeader = document.createElement('h3');
      popupHeader.textContent = img.alt;
      popupBox.appendChild(popupHeader);
    }

    let popupImage = document.createElement('img');
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    let closeBtn = document.createElement('span');
    closeBtn.textContent = 'x';
    closeBtn.className = 'close-button ';
    popupBox.appendChild(closeBtn);
  });
});
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-button')) {
    document.querySelector('.popup-overlay').remove();
    document.querySelector('.popup-box').remove();
  }
});

const allBullets = document.querySelectorAll('.nav-bullets .bullet');
const allLinks = document.querySelectorAll('.links a');
function scrollToTarget(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
const handleActive = function (e) {
  e.target.parentElement.querySelectorAll('.active').forEach((element) => {
    element.classList.remove('active');
  });
  e.target.classList.add('active');
};
scrollToTarget(allBullets);
scrollToTarget(allLinks);
let bulletsSpanSetting = document.querySelectorAll('.bullets-option span');
let navBullets = document.querySelector('.nav-bullets');
bulletsSpanSetting.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.dataset.display == 'show') {
      navBullets.style.display = 'block';
      localStorage.setItem('bullets-option', 'show');
    } else {
      navBullets.style.display = 'none';
      localStorage.setItem('bullets-option', 'hide');
    }
    handleActive(e);
  });
});
let localBullets = localStorage.getItem('bullets-option');
if (localBullets != null) {
  bulletsSpanSetting.forEach((element) => {
    element.classList.remove('active');
  });
  if (localBullets == 'show') {
    navBullets.style.display = 'block';
    document.querySelector('.bullets-option .yes').classList.add('active');
  } else {
    navBullets.style.display = 'none';

    document.querySelector('.bullets-option .no').classList.add('active');
  }
}
document.querySelector('.reset-option').onclick = function () {
  localStorage.removeItem('background-option');
  localStorage.removeItem('color-option');
  localStorage.removeItem('bullets-option');
  window.location.reload();
};
randomnbackgrounds();

let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.links');
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleBtn.classList.toggle('menu-active');
  tLinks.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (e.target != toggleBtn && e.target != tLinks) {
    if (tLinks.classList.contains('open')) {
      toggleBtn.classList.toggle('menu-active');
      tLinks.classList.toggle('open');
    }
  }
});
tLinks.addEventListener('click', (e) => {
  e.stopPropagation();
});
