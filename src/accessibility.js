document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'portfolio-background-mode';
    const btnOn = document.getElementById('acces-mode');
    const btnOff = document.querySelector('.button.off');
    const body = document.body;

    const applyBackgroundMode = (enabled) => {
        body.classList.toggle('accessibility-mode', enabled);
        body.classList.toggle('background', !enabled);

        if (btnOn) {
            btnOn.setAttribute('aria-pressed', String(enabled));
        }

        if (btnOff) {
            btnOff.setAttribute('aria-pressed', String(!enabled));
        }

        try {
            localStorage.setItem(STORAGE_KEY, String(enabled));
        } catch (error) {
            console.warn('Impossible de sauvegarder la préférence du background :', error);
        }
    };

    const savedMode = localStorage.getItem(STORAGE_KEY);
    const initialEnabled = savedMode === null
        ? body.classList.contains('accessibility-mode')
        : savedMode === 'true';

    applyBackgroundMode(initialEnabled);

    if (btnOn) {
        btnOn.addEventListener('click', () => applyBackgroundMode(true));
    }

    if (btnOff) {
        btnOff.addEventListener('click', () => applyBackgroundMode(false));
    }
});