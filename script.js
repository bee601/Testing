const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach((element) => {
  element.addEventListener('pointerleave', () => {
    element.style.transform = '';
  });
  element.addEventListener('pointermove', (event) => {
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
