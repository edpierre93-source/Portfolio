const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let ticking = false;

// Seuil de tolérance en pixels avant de cacher/montrer la navbar
const tolerance = 10; 

function updateNavbar() {
  const currentScrollY = window.scrollY;
  const scrollDistance = Math.abs(currentScrollY - lastScrollY);

  // 1. On s'assure que le scroll a dépassé le seuil de tolérance
  if (scrollDistance > tolerance) {
    
    // 2. Si on scroll vers le bas ET qu'on a dépassé la hauteur de la navbar
    if (currentScrollY > lastScrollY && currentScrollY > navbar.offsetHeight) {
      navbar.classList.add('hidden');
    } 
    // 3. Si on scroll vers le haut
    else if (currentScrollY < lastScrollY) {
      navbar.classList.remove('hidden');
    }
  }

  // Sécurité : Réafficher la navbar si on est tout en haut de la page
  if (currentScrollY <= 0) {
    navbar.classList.remove('hidden');
  }

  // Mise à jour de la position et libération du verrou
  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  // Le "ticking" évite de surcharger le navigateur à chaque pixel scrollé
  if (!ticking) {
    window.requestAnimationFrame(updateNavbar);
    ticking = true;
  }
});