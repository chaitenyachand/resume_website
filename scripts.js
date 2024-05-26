const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo(sections[index]);
  });
});

function smoothScrollTo(element, duration = 500) {
  const start = window.pageYOffset;
  const to = element.offsetTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
