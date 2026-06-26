document.addEventListener('DOMContentLoaded', () => {
    const btnOn = document.getElementById('acces-mode'); // Ton bouton <button class="button on">
    const btnOff = document.querySelector('.button.off'); // Ton bouton <button class="button off">
    const body = document.body;

    // Fonction pour activer le mode
    if (btnOn) {
        btnOn.addEventListener('click', () => {
            body.classList.add('accessibility-mode');
            btnOn.setAttribute('aria-pressed', 'true');
        });
    }

    // Fonction pour désactiver le mode
    if (btnOff) {
        btnOff.addEventListener('click', () => {
            body.classList.remove('accessibility-mode');
            body.classList.add('background')
            if (btnOn) btnOn.setAttribute('aria-pressed', 'false');
        });
    }
});