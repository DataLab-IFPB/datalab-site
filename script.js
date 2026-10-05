const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.project-desc').forEach(desc => {
  if (desc.scrollHeight <= desc.clientHeight + 1) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'project-more';
  btn.textContent = 'Ler mais ↓';
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const expanded = desc.classList.toggle('expanded');
    btn.textContent = expanded ? 'Ler menos ↑' : 'Ler mais ↓';
    btn.setAttribute('aria-expanded', String(expanded));
  });
  desc.after(btn);
});
