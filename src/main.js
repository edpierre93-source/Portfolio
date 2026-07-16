const body = document.querySelector('body')
const header = document.querySelector('header')
const sidebarOpen = document.querySelector('.sidebar-open')
const sidebarClose = document.querySelector('.sidebar-close')
const sidebar = document.querySelector('.nav-links')
const loader = document.querySelector('#loader')
const appWrapper = document.querySelector('#app-wrapper')

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

const finishLoading = () => {
    loader?.classList.add('is-hidden')
    appWrapper?.classList.add('is-ready')
}

if (document.readyState === 'complete') {
    window.setTimeout(finishLoading, 250)
} else {
    window.addEventListener('load', () => {
        window.setTimeout(finishLoading, 250)
    }, { once: true })
}