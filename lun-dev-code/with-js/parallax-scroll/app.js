let listBg = document.querySelectorAll('.banner .bg');
let titleBanner = document.querySelector('.banner h1');
let listTab = document.querySelectorAll('.tab');

window.addEventListener('scroll', (e) => {
  // scrollY if the web scrollbar position (pixel)
  let top = this.scrollY;

  /* 
  index is the order of class bg(0,1,2 ...)
  when scrolling the web, the class bg scroll down,
  the bigger the index, the faster the movement
  */
  listBg.forEach((bg, i) => {
    if (i != 0 && i != 8) {
      bg.style.transform = `translateY(${(top * i) / 2}px)`;
    } else if (i == 0) {
      bg.style.transform = `translateY(${top / 3}px)`;
    }
  });

  titleBanner.style.transform = `translateY(${(top * 4) / 2}px)`;

  /* 
  parallax scroll in tab
  when tab's position is less than 500px
  from scrollbar position add active class to animation and vice versa
   */
  listTab.forEach((tab) =>
    tab.offsetTop - top < 550
      ? tab.classList.add('active')
      : tab.classList.remove('active')
  );
});
