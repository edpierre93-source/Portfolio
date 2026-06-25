const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  // Si le scroll actuel est supérieur au précédent, on descend
  if (window.scrollY > lastScrollY) {
    navbar.classList.add('hidden'); // On cache la barre
  } else {
    navbar.classList.remove('hidden'); // On réaffiche la barre
  }
  
  // On met à jour la position du dernier scroll
  lastScrollY = window.scrollY;
});