function nextScreen(screenId) {
  const screens = document.querySelectorAll('.card');
  screens.forEach(card => {
    card.classList.add('hidden');
  });

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }
}

const noBtn = document.getElementById('noBtn');

if (noBtn) {
  noBtn.addEventListener('mouseover', moveButton);
  noBtn.addEventListener('touchstart', moveButton);
}

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.position = 'fixed';
  noBtn.style.left = `${Math.max(10, x)}px`;
  noBtn.style.top = `${Math.max(10, y)}px`;
}