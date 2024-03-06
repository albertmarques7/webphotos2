$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('.btn-excluir').click(function() {
        const liCorrespondente = $(this).closest('li');
        liCorrespondente.remove();
    });

    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        
        // Adicionando a imagem ao novo item
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        // Adicionando o novo item à lista
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            <button type="button" class="btn-excluir">x</button>
        </div>
    `).appendTo(novoItem);
        
        $('ul').append(novoItem);
        $(novoItem).fadeIn(3000); /*3 seg */
        $('#endereco-imagem-nova').val('');
        $('.btn-excluir').click(function() {
            const liCorrespondente = $(this).closest('li');
            liCorrespondente.remove();
        });
    });
});