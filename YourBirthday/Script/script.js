let currentIndex = 0;

function updateSlide() {
    const galleryContainer = document.querySelector('.gallery-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ensure index stays within bounds
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    // Shift the container to show the current slide
    const translateX = -currentIndex * 100;
    galleryContainer.style.transform = `translateX(${translateX}%)`;
}

function previousSlide() {
    currentIndex--;
    updateSlide();
}

function nextSlide() {
    currentIndex++;
    updateSlide();
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class
});
