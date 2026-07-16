const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let ticking = false;

const tolerance = 10;

function updateNavbar() {
  const currentScrollY = window.scrollY;
  const scrollDistance = Math.abs(currentScrollY - lastScrollY);
  const isSidebarOpen = header?.classList.contains('active');

  if (isSidebarOpen) {
    navbar?.classList.remove('hidden');
  } else if (scrollDistance > tolerance) {
    if (currentScrollY > lastScrollY && currentScrollY > (navbar?.offsetHeight || 0)) {
      navbar?.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) {
      navbar?.classList.remove('hidden');
    }
  }

  if (currentScrollY <= 0) {
    navbar?.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}, { passive: true });