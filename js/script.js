const formestilo = document.getElementById("formestilo");
const compocor = document.getElementById("campocor");
const campopadding = document.getElementById("campopadding");
const campotamanho = document.getElementById("campotamanho");
const retorno = document.getElementById("retorno");

function aplicarestilo(event){
    event.preventdefault();

    retorno.style.color = campocor.value;
    retorno.style.padding = campopadding.value + "px";
    retorno.style.fontSize = campotamanho.value + "px";
}

formestilo.addEventListener("submit", aplicarestilo);