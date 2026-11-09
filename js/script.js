const botaocriar = document.getElementById("botaocriar");
const botaoapagar = document.getElementById("botaoapagar");
const retorno = document.getElementById("retorno");

const frases = [
    "voce esta arrasando! 🚀",
    "hora de codar! 💻",
    "cafe, codigo e criatividade! ☕",
    "javascript e magita! 🌟"
];

const cores = ["#fde68a", "#bfdbfe", "#bbf7d0", "#fbcfe8"];

botaoapagar.addEventListener("click", () => {
    const i = Math.floor(Math.random() * frases.length);
    retorno.textContent = frases [i];
    retorno.style.backgroundColor = cores[i];
    retorno.style.fontSize = "24px";
    retorno.style.padding = "15px";
    retorno.style.borderRadius = "10px";
    retorno.style.textAlign = "center";
});
botaoapagar.addEventListener("click", () => {
    retorno.textContent = "";
    retorno.style.background = "";
    retorno.style.fontSize = "";
    retorno.style.padding = "";
    retorno.style.borderRadius = "";
    retorno.style.textAlign = "";
});
