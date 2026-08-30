(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  const close = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
  };

  toggle.addEventListener('click', () => {
    const opening = !document.body.classList.contains('menu-open');
    if (!opening) return close();
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
  });

  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 860) close();
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
})();

