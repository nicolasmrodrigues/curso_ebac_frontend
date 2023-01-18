$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const TarefaParaAdicionar = $('input');
        if (!TarefaParaAdicionar.val() == '') {
            const novaTarefa = $(`<li>${TarefaParaAdicionar.val()}</li>`);
            $(novaTarefa).appendTo('ul')
            TarefaParaAdicionar.val('')
        }
        $('li').click(function() {
            $(this).css("text-decoration", "line-through");
        })
    })
})