document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Por favor, introduce un email válido.');
        return;
    }
    const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
    modal.show();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}