const formulario = document.queryselector(#formcadastro);

formulario.addevenlistener("submit", function(event){
    Event.preventdefault

    const nome =document.querySelector("#nome").value;
    const destino =document.querySelector("#destino").value;

    const mensagem = document.querySelector("#mensagem");

    mensagem.textcontent =
        "ola,"+ nome + "! sua proxima aventura sera em" + destino + "!";

        formulario.reset();
})