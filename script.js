console.log("Bienvenido a EcuaTours");

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Desplazamiento suave para enlaces de ancla (#)
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

                // Cierra el menú móvil si está abierto
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // 2. Validación y envío de formulario por WhatsApp
    const contactoForm = document.querySelector('.formulario-contacto form');

    if (contactoForm) {
        contactoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = contactoForm.querySelector('input[type="text"]').value.trim();
            const email = contactoForm.querySelector('input[type="email"]').value.trim();
            const mensaje = contactoForm.querySelector('textarea').value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Número telefónico de destino en Ecuador
            const numeroTelefono = '593999999999'; // Reemplazar por el número real
            const textoWhatsApp = `Hola Ecuatours, mi nombre es ${encodeURIComponent(nombre)} (${encodeURIComponent(email)}). Consulta: ${encodeURIComponent(mensaje)}`;
            
            const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${textoWhatsApp}`;

            window.open(urlWhatsApp, '_blank');
            contactoForm.reset();
        });
    }

});