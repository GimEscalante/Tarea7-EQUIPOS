function show_error(event, el) {
    if (!event.target.value.trim()) {
        el.style.display = 'block'
    }
    else {
        el.style.display = 'none'
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const name = document.querySelector('#validationCustomname')
    const email = document.querySelector('#validationCustomEmail')
    const message = document.querySelector('#validationCustomTextarea')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                return
            }

            form.classList.add('was-validated')
        }, false)
    })

    const invalid_name_container = document.getElementById('invalid_name')
    const invalid_email_container = document.getElementById('invalid_email')
    const invalid_message_container = document.getElementById('invalid_message')

    name.addEventListener('input', event => {
        show_error(event, invalid_name_container)

    })

    email.addEventListener('input', event => {
        show_error(event, invalid_email_container)

    })

    message.addEventListener('input', event => {
        show_error(event, invalid_message_container)

    })
})()

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const modal = new bootstrap.Modal(document.getElementById('exampleModal1'));

    form.addEventListener('submit', function (event) {
        if (form.checkValidity()) {
            // Si el formulario es válido, muestra el modal
            event.preventDefault(); // Evita el envío del formulario
            modal.show();
            // Limpiar los campos del formulario
            form.reset();
            form.classList.remove('was-validated');
        } else {
            // Si el formulario no es válido, previene el envío
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});