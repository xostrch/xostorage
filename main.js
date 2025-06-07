function howItWorks() {
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');

  slide1.classList.add('slide-out-right');
  slide1.classList.remove('active');

  slide2.style.display = 'flex';
  slide2.classList.add('slide-in-left');

  setTimeout(() => {
    slide2.classList.remove('slide-in-left');
    slide2.classList.add('active');
  }, 50);

  setTimeout(() => {
    slide1.style.display = 'none';
  }, 800);
}


const container = document.getElementById('reviews-container');
const track = container.querySelector('.reviews-track');


track.innerHTML += track.innerHTML;

let scrollPos = 0;
let isScrolling = false;

function step() {
  if (isScrolling) {
    scrollPos += 2;

    if (scrollPos >= track.scrollWidth / 2) {
      scrollPos = 0;
    }

    container.scrollLeft = scrollPos;
  }
  requestAnimationFrame(step);
}

step();

container.addEventListener('mouseenter', () => {
  isScrolling = true;
});

container.addEventListener('mouseleave', () => {
  isScrolling = false;
});


