"use strict"

const referencia = {
    retornarIndicador(inputTarget) {
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        const indicadores = document.querySelectorAll(".ficha__col-de-indicadores span");
        const indicadorOutput = document.querySelector(".reference-row__output--indicador");

        let inputIndex;
        for (let i in inputTargetAndSiblings) {
            if(inputTarget === inputTargetAndSiblings[i]) inputIndex = i;
        }
        
        let indicador = indicadores[inputIndex].textContent;
        indicadorOutput.value = `${indicador}`;
    },

    retornarFaixaEtariaEsexo(inputTarget) {
        const faixaEtariaOutput = document.querySelector(".reference-row__output--idade");
        const sexoOutput = document.querySelector(".reference-row__output--sexo");

        let faixaEtaria = inputTarget.parentElement.dataset.faixaetaria;
        let sexo = inputTarget.parentElement.dataset.sexo;

        faixaEtariaOutput.value = faixaEtaria;
        sexoOutput.value = sexo;
    },

    retornarVazio() {
        const outputs = document.querySelectorAll(".reference-row__output");
        for (const o of outputs) o.value = "";
    }
}

function events() {
    const inputsCelulares = document.querySelectorAll("[data-totalgeral]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarIndicador(inputCelular);
            referencia.retornarFaixaEtariaEsexo(inputCelular);
        });
    });

    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}

window.onload = events;