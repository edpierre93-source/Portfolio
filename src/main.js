const body = document.querySelector('body')
const header = document.querySelector('header')
const sidebarOpen = document.querySelector('.sidebar-open')
const sidebarClose = document.querySelector('.sidebar-close')
const sidebar = document.querySelector('.nav-links')

if (sidebar && sidebarOpen) {
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    sidebarOpen.addEventListener('click', (e) => {
        e.stopPropagation()
        header?.classList.add('active')
    })
}

if (sidebarClose && header) {
    sidebarClose.addEventListener('click', () => {
        header.classList.remove('active')
    })
}

if (body && header) {
    body.addEventListener('click', (e) => {
        const clickedElm = e.target

        if (clickedElm instanceof Element && !clickedElm.closest('.menu') && !clickedElm.closest('.sidebar-open')) {
            header.classList.remove('active')
        }
    })
}