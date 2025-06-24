function getFormFieldsValues(form) {
    return {
        floatingInputTextNombre : form.floatingInputTextNombre.value,
        floatingInputTextEmail : form.floatingInputTextEmail.value,
        floatingInputTextAsunto : form.floatingInputTextAsunto.value,
        floatingTextareaMensaje : form.floatingTextareaMensaje.value
    };
}

function getErrorsFormFields(formFieldsValues) {
    const errors = [];

    if (formFieldsValues.floatingInputTextNombre == '') errors.push('Nombre');
    if (formFieldsValues.floatingInputTextEmail == '') errors.push('Email');
    if (formFieldsValues.floatingInputTextAsunto == '') errors.push('Asunto');
    if (formFieldsValues.floatingTextareaMensaje == '') errors.push('Mensaje');

    return errors;
}

function submitForm(form) {
    const fieldsValues = getFormFieldsValues(form);
    const errors = getErrorsFormFields(fieldsValues);

    const alertSuccess = document.getElementById("alert-success");
    const alertDanger = document.getElementById("alert-danger");
    const buttomSubmit = document.getElementById("buttom-submit");

    if (errors.length > 0) {
        alertSuccess.style.setProperty('display', 'none', 'important');
        alertDanger.style.setProperty('display', 'flex', 'important');

        const customErrorLabel = document.getElementById('customErrorLabel');
        customErrorLabel.innerHTML = `Por favor, completa los siguientes campos: ${errors.join(', ')}`;
    } else {
        alertSuccess.style.setProperty('display', 'flex', 'important');
        alertDanger.style.setProperty('display', 'none', 'important');

        const customSuccessLabel = document.getElementById('customSuccessLabel');
        customSuccessLabel.innerHTML = `Gracias por contactarnos, ${fieldsValues.floatingInputTextNombre}. Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.`;

        setTimeout(() => {
            form.reset();
        }, 500);
    }

    buttomSubmit.disabled = true;
    setTimeout(() => {
        alertSuccess.style.setProperty('display', 'none', 'important');
        alertDanger.style.setProperty('display', 'none', 'important');
        buttomSubmit.disabled = false;
    }, 3500);

    return false;
}