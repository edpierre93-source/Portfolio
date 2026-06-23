const body = document.querySelector('body')
const header = document.querySelector('header')
const sidebarOpen = document.querySelector(".sidebar-open")
const sidebarClose = document.querySelector('.sidebar-close')
const sidebar = document.querySelector('.nav-links')

sidebar.addEventListener('click', (e) => {
    e.stopPropagation()
})

sidebarOpen.addEventListener('click', (e) => {
    e.stopPropagation()
    header.classList.add('active')
})

if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        header.classList.remove('active')
    })
}
    
// 3. Fermer la sidebar si on clique n'importe où en dehors du menu
body.addEventListener('click', (e) => {
    let clickedElm = e.target

    // On vérifie si l'élément cliqué n'est PAS le menu et n'est PAS à l'intérieur du menu
    // On utilise .closest() pour s'assurer qu'on ne clique pas sur un sous-élément du menu
    if (!clickedElm.closest(".menu") && !clickedElm.closest(".sidebar-open")) {
        header.classList.remove("active")
    }
})