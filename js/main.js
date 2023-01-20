$(document).ready(function () {
    $('form').on('submit', function(e){
        e.preventDefault();
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
                
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert('Formulário preenchido com sucesso');
            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#cpf').val('');
            $('#endereco').val('');
            $('#cep').val('');
        },
        invalidHandler: function(evento, validador) {
            const numeroDeCamposInvalidos = validador.numberOfInvalids();
            alert(`Existem ${numeroDeCamposInvalidos} campos inválidos`)
        }
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Ex: 416.155.890-23'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Ex: (21) 96546-2330'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'Ex: 88805-143'
    })
});