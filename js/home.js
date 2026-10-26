// Home page: kill-shot banner carousel.
// Carousel Auto-rotation with Manual Controls
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoRotateTimer;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Slides scroll sideways: the new slide comes in from one side while the old one leaves the other.
function showSlide(n, dir) {
    const out = slides[currentSlide];
    const inc = slides[n];
    if (out === inc) return;
    inc.style.transition = 'none';
    inc.style.transform = 'translateX(' + (dir * 100) + '%)';
    void inc.offsetWidth;
    inc.style.transition = '';
    inc.style.transform = '';
    inc.classList.add('active');
    out.style.transform = 'translateX(' + (-dir * 100) + '%)';
    out.classList.remove('active');
}

function nextSlide() {
    const n = (currentSlide + 1) % totalSlides;
    showSlide(n, 1);
    currentSlide = n;
    resetAutoRotate();
}

function prevSlide() {
    const n = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(n, -1);
    currentSlide = n;
    resetAutoRotate();
}

function resetAutoRotate() {
    clearInterval(autoRotateTimer);
    autoRotateTimer = setInterval(nextSlide, 30000);
}

// Auto-rotate every 30 seconds
autoRotateTimer = setInterval(nextSlide, 30000);
