$(document).ready(function() {
    $('#botao-cadastrar').click(function(e) {

        e.preventDefault();

        let item = $("#tarefa").val().trim(); // captura o valor e remove os espcos em brancos

        if (item !== "") { // Evita adicionar itens vazios

            // $("<li>" + item + "</li>").appendTo("#lista"); // adiciona a lista
            let novoItem = $("<li></li>").html(item + '<button class="remove">X</button>');
            $("#lista").append(novoItem);


            $("#tarefa").val(""); //limpa o valor digitado

        } else {
            alert("Digite um item antes de cadastrar!")
        }
    })


    $(document).on("click", ".remove", function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    $(document).on("click", "li", function() {
        $(this).toggleClass("riscado");
    });

});
