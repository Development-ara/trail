let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index - 1);
}


showSlide(currentSlideIndex);


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const navRight = document.querySelector('.nav-right');
  navLinks.classList.toggle('active');
  navRight.classList.toggle('active');
}
