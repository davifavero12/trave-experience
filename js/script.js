const botaocriar = document.getElementById("botaocriar");
const retorno = document.getElementById("retorno");

botaocriar.addEventListener("click", () => {
    retorno.style.backgroundColor = "#fde68a";
    retorno.style.color = "#b45309";
    retorno.style.fontSize = "28px";
    retorno.style.textAlign = "center";
    retorno.style.padding =  "10px";
    retorno.style.borderradius = "8px";
    retorno.textContent = "ola, meu nome e davi";
});
