function main() {
  const modal = document.getElementById('robot-modal');
  const modalImg = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('.flip-card-inner').forEach(inner => {
    inner.addEventListener('click', (e) => {
      e.stopPropagation();

      const img = inner.querySelector('.robot-img');
      const name = inner.querySelector('.flip-card-back p');

      modalImg.src = img.src;
      modalName.textContent = name.textContent;
      modal.classList.remove('hidden');

      // trap focus inside modal
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Optional: Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
}

main();
