function viewImage(imageSrc) {
  const viewer = document.getElementById('imageViewer');
  const fullImage = document.getElementById('fullImage');

  fullImage.src = imageSrc;
  viewer.style.display = 'flex'; // Show the viewer
}

function closeImageViewer() {
  const viewer = document.getElementById('imageViewer');
  viewer.style.display = 'none'; // Hide the viewer
}

document.querySelector('.hamburger').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Toggle the active class
});