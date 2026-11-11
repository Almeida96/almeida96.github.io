const viewer = document.querySelector('.image-viewer');

if (viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('img');
  const caption = viewer.querySelector('figcaption');

  for (const link of document.querySelectorAll('.expand-shot')) {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const preview = link.querySelector('img');
      image.src = link.href;
      image.alt = preview.alt;
      caption.textContent = preview.alt;
      viewer.showModal();
    });
  }

  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
}
