console.log("Bienvenido a EcuaTours");

document.addEventListener('DOMContentLoaded', () => {
    // Desplazamiento suave para enlaces con ancla (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Cierra el menú desplegable en celular al hacer clic
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
// Validación y envío de formulario por WhatsApp
const contactoForm = document.querySelector('.formulario-contacto form');

if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = contactoForm.querySelector('input[type="text"]').value.trim();
        const email = contactoForm.querySelector('input[type="email"]').value.trim();
        const mensaje = contactoForm.querySelector('textarea').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear enlace de WhatsApp con el mensaje del cliente
        const numeroTelefono = '593999999999'; // Tu número de Ecuador
        const textoWhatsApp = `Hola Ecuatours, mi nombre es ${encodeURIComponent(nombre)} (${encodeURIComponent(email)}). Quisiera consultar: ${encodeURIComponent(mensaje)}`;
        
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${textoWhatsApp}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(urlWhatsApp, '_blank');
        contactoForm.reset();
    });
}