function main() {
  const modal = document.getElementById('robot-modal');
  const modalImg = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalBio = document.getElementById('modal-bio');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('.robot-card').forEach(card => {
    card.addEventListener('click', () => {
      modalImg.src = card.dataset.img;
      modalName.textContent = card.dataset.name;
      modalBio.textContent = card.dataset.bio;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
}

main();
