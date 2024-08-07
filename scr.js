window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    const imagen = document.querySelector('.product-left img');
    const maxBlur = 10; // máxima cantidad de desenfoque
    const blur = scrollDistance / (window.innerHeight / maxBlur);
    imagen.style.filter = `blur(${blur}px)`;
  });

  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    const productRight = document.querySelector('.product-right');
    const maxScroll = productRight.offsetHeight + productRight.offsetTop;
    const scrollPercent = scrollDistance / maxScroll;
    productRight.style.transform = `translateY(-${scrollPercent * 100}%)`;
  });

  const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let currentItem = 0;

carouselPrev.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }
  updateCarousel();
});

carouselNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem >= carouselItems.length) {
    currentItem = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === currentItem) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Autoplay
setInterval(() => {
  carouselNext.click();
}, 3000);