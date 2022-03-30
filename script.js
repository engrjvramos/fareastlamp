let languages = document.querySelectorAll('.language');

languages.forEach((language) => {
  language.addEventListener('click', () => {
    languages.forEach((el) => el.classList.remove('active'));
    language.classList.add('active');
  });
});

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const indicatorContainer = document.querySelector('.indicators');
const bannerTitle = document.querySelectorAll('.banner-title');

let currentSlide = 0;

const maxSlide = slides.length;

const createIndicators = () => {
  slides.forEach((_, index) => {
    indicatorContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="indicators__indicator" data-slide="${index}"></button>`,
    );
  });
};

const activateIndicator = (s) => {
  document
    .querySelectorAll('.indicators__indicator')
    .forEach((dot) => dot.classList.remove('indicators__indicator--active'));

  document
    .querySelector(`.indicators__indicator[data-slide="${s}"]`)
    .classList.add('indicators__indicator--active');
};

const removeTitle = () => {
  bannerTitle.forEach((title) => {
    title.style.opacity = '0';
  });
};

const showTitle = () => {
  bannerTitle.forEach((title) => {
    title.classList.add('visible');
  });
};

const goToSlide = (s) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - s)}%)`;

    setTimeout(showTitle, 1200);
  });
};

const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  activateIndicator(currentSlide);
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
  activateIndicator(currentSlide);
};

const init = () => {
  goToSlide(0);
  createIndicators();
  activateIndicator(0);
};

init();

indicatorContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('indicators__indicator')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateIndicator(slide);
  }
});
