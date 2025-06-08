// 🎂 Calculate and display age
const birthYear = 2004; 
const currentYear = new Date().getFullYear();
document.getElementById('age').textContent = currentYear - birthYear;

// 📝 Handle guestbook messages
document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this[0].value;
  const message = this[1].value;

  const messageBox = document.createElement('div');
  messageBox.innerHTML = `<strong>${name}</strong>: ${message}`;
  document.getElementById('messages').appendChild(messageBox);

  this.reset();
});

onclick="alert('purchased')"


// Lightbox functionality
const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
