const botaocriar = document.getElementById("botaocriar");
const botaoapagar = document.getElementById("boaaoapagar");
const retorno = document.getElementById("retorno");

const frases = [
    "voce esta arrasando! 🚀",
    "hora de acordar! 💻",
    "cafe, codigo e criatividade! ☕",
    "javascript e magita! 🌟"
];

const cores = ["#fde68a", "#bfdbfe", "#bbf7d0", "#fbcfe8"];

botaoapagar.addEventListener("click", () => {
    retorno.textContent = frases [i];
    retorno.style.backgroundColor = cores[i];
    retorno.style.fontSize = "24px";
    retorno.style.padding = "15px";
    retorno.style.borderRadius = "10px";
    retorno.style.textAlign = "center";
});
