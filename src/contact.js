const form = document.querySelector('#contact-form')
const feedback = document.querySelector('#contact-feedback')

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const submitBtn = form.querySelector('button[type="submit"]')
        submitBtn.disabled = true
        feedback.textContent = 'Envoi en cours...'
        feedback.classList.remove('error', 'success')

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })

            if (response.ok) {
                feedback.textContent = 'Message envoyé avec succès, merci !'
                feedback.classList.add('success')
                form.reset()
            } else {
                const data = await response.json().catch(() => null)
                const errorMsg = data?.errors?.map((err) => err.message).join(', ')
                feedback.textContent = errorMsg || 'Une erreur est survenue, réessayez plus tard.'
                feedback.classList.add('error')
            }
        } catch {
            feedback.textContent = 'Une erreur réseau est survenue, réessayez plus tard.'
            feedback.classList.add('error')
        } finally {
            submitBtn.disabled = false
        }
    })
}