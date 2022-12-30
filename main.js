const form = document.getElementById('form-numbers');
const validationMessage = document.getElementById('validation-message')
let validForm = false;

function validatesForm (x, y) {
    if (x < y) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numberA = parseInt(document.getElementById('numberA-input').value);
    const numberB = parseInt(document.getElementById('numberB-input').value);
    validForm = validatesForm(numberA, numberB)
    if (validForm) {
        validationMessage.style.backgroundColor = '#27ae60';
        validationMessage.style.display = 'block';
        validationMessage.innerHTML = 'Formulário válido'
    } else {
       validationMessage.style.display = 'block';
       validationMessage.style.backgroundColor = 'red';
       validationMessage.innerHTML = 'Formulário inválido';
    }
})