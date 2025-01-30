"use strict"
const autoTxt = "Votos de Festas Felizes e um Próspero Ano Novo!";
let txtIndex = 0;
let txtLength = autoTxt.length;
const output = document.querySelector(".topo-propaganda__paragrafo");
function autoDigitacao() {
    if(txtIndex < txtLength) {
        output.textContent += autoTxt[txtIndex];
        txtIndex++;
        setTimeout(autoDigitacao, 150);
    }
}
let variavelDeSetTime = setTimeout(autoDigitacao, 150);
window.addEventListener("load", () => {
    const tempo = new Date();
    let mesIndex = tempo.getMonth();
    if(mesIndex !== 11) {
        document.querySelector(".topo-propaganda--festas-felizes").hidden = true;
        clearInterval(variavelDeSetTime);
    }
});