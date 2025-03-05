//ARQUIVO SEM O SALVAMENTO DO localStorage.getIte("lista")

$(document).ready(function() {
    // Função para salvar a lista no localStorage
    function salvarLista() {
        let listaItens = [];
        $('#lista li').each(function() {
            listaItens.push($(this).text().replace(' X', '')); // Salva apenas o texto sem o botão
        });
        localStorage.setItem('lista', JSON.stringify(listaItens)); // Salva a lista como uma string JSON
    }

    // Carregar a lista armazenada do localStorage
    function carregarLista() {
        let listaSalva = localStorage.getItem('lista');
        if (listaSalva) {
            listaSalva = JSON.parse(listaSalva); // Converte a string JSON de volta para um array
            listaSalva.forEach(function(item) {
                let novoItem = $("<li></li>").text(item + ' ').append('<button class="remove">X</button>');
                $("#lista").append(novoItem);
            });
        }
    }

    // Chama a função para carregar a lista salva ao abrir a página
    carregarLista();

    // Evento para adicionar item à lista
    $('#botao-cadastrar').click(function(e) {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário

        let item = $("#tarefa").val().trim(); // Captura o valor e remove espaços em branco extras

        if (item !== "") { // Verifica se o item não está vazio
            let novoItem = $("<li></li>").text(item + ' ').append('<button class="remove">X</button>');
            $("#lista").append(novoItem);

            // Salva a lista novamente após adicionar um item
            salvarLista();

            $("#tarefa").val(""); // Limpa o campo de texto
        } else {
            alert("Digite um item antes de cadastrar!"); // Exibe um alerta se o campo estiver vazio
        }
    });

    // Evento para remover item da lista
    $(document).on("click", ".remove", function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
            salvarLista(); // Salva a lista novamente após remoção
        });
    });

    // Evento para marcar e desmarcar tarefa
    $(document).on("click", "li", function() {
        $(this).toggleClass("riscado");
        salvarLista(); // Salva a lista novamente após marcar/desmarcar
    });
});
