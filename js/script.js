const botaocriar = document.getElementById("botaocriar");
const botaoapagar =document.getElementById("botaoapagar");
const retorno = document.getElementById("retorno");

botaocriar.addEventListener("click", () => {
    retorno.textContent = "hoje e um otimo dia para aprender js!";

});

// botaoapagar.addeEventlistener("click", function(){
//    ...
// });

botaoapagar.addEventListener("click", () => {
    retorno.textContent = "";
});
