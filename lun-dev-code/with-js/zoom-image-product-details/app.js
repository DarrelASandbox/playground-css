let imageZoom = document.getElementById('imageZoom');
imageZoom.addEventListener('mousemove', (e) => {
  imageZoom.style.setProperty('--display', 'block');
  let pointer = {
    x: (e.offsetX * 100) / imageZoom.offsetWidth,
    y: (e.offsetY * 100) / imageZoom.offsetHeight,
  };

  console.log(pointer);
  imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
  imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
});

imageZoom.addEventListener('mouseout', (e) =>
  imageZoom.style.setProperty('--display', 'none')
);
