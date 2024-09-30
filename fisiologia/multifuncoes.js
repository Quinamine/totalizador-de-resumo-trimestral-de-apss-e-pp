"use strict"
var keyPrefix = "trtapss";
function desfoqueDoFundo(accao) {
    const desfoque = document.querySelector(".desfoque");
    accao === "desfocar" ? 
    desfoque.classList.add("on") :
    desfoque.classList.remove("on");
}
function alertarSobre(msg) {
    const dialogBoxDefault = document.querySelector(".dialog-box-default--small");
    const dialogBoxDefault__console = dialogBoxDefault.querySelector(".dialog-box-default__p--js-console");
    dialogBoxDefault__console.textContent = msg;
    clearInterval(btnAutoCloseLoop);
    let time = 15;
    const btn__outputTime = document.querySelector(".dialog-box-default__output-autoclose-loop");
    btn__outputTime.textContent = `(${time--}s)`;
    btnAutoCloseLoop = setInterval(() => {
        btn__outputTime.textContent = `(${time--}s)`;
        if(time < 0) {
            dialogBoxDefault.classList.remove("--open");
            clearInterval(btnAutoCloseLoop);
        }
    }, 1000);
    dialogBoxDefault.classList.add("--open");
}
function destacarCelulasComConteudoOmisso() {
    const celulas = document.querySelectorAll("[data-totalgeral], [readonly]");
    let celulasSaturadas = 0;
    for(const c of celulas) {
        c.classList.remove("input--bg-color-danger");
        if(c.value.length > 7) {
            c.classList.add("input--bg-color-danger");
            celulasSaturadas++;
        }
    }
    if(celulasSaturadas > 0) {
        setTimeout(() => {
            const motivoDeSaturacao =  document.querySelector(".artigo__details--motivo-de-celulas-vermelhas");
            menu.abrirArtigo("ajuda");
            motivoDeSaturacao.setAttribute("open", "");
            motivoDeSaturacao.scrollIntoView();
        }, 2500);
    }  
}
function removerDestaqueDeRedCells() {
    const celulas = document.querySelectorAll("[data-totalgeral], [readonly]");
    for (const c of celulas) c.classList.remove("input--bg-color-danger");
}
const aqd = {
    mostrarAviso() {
        if(!sessionStorage.getItem(`${keyPrefix}-aviso-aqd`)) {
            const avisoDeAQD = document.querySelector(".dialog-box-default--sobre-aqd");
            setTimeout(() => avisoDeAQD.classList.add("--open"), 3000);
        }
    },
    salvarCiencia() {
        sessionStorage.setItem(`${keyPrefix}-aviso-aqd`, `user:aware`);
    }
}
function actualizarAnoDeCopyright() {
    const tempo = new Date();
    let anoActual = tempo.getFullYear();
    if(anoActual < 2024) anoActual = 2024;
    const currentYearOutput = document.querySelector(".footer__current-year");
    currentYearOutput.textContent = anoActual;
}
function formatarNumeros() {
    const numeros = document.querySelectorAll(".number-format");
    for (const n of numeros) {
        n.textContent = Number(n.textContent).toLocaleString();
    }
}
function animarCaixaDeDialogo(event) {
    const dialogBox = document.querySelector(".dialog-box-esvaziar-ficha");
    if(dialogBox.matches(".--open")) {
        event === "mousedown" ? dialogBox.classList.add("--mexer") 
        : dialogBox.classList.remove("--mexer");
    }
}
function fecharTopoPropaganda() {
    const topoPropaganda = document.querySelector(".topo-propaganda");
    const body = document.querySelector("#body");
    topoPropaganda.classList.add("topo-propaganda--off");
    body.classList.remove("body-com-topo-propaganda")
}
let btnAutoCloseLoop;
window.addEventListener("load", () => {
    const readonlyInputs = document.querySelectorAll("[readonly]");
    readonlyInputs.forEach ( inputTarget => inputTarget.addEventListener("click", () => {
        const readonlyInputsMsg = "Os totais estão inacessíveis para assegurar que não sejam modificados.";
        alertarSobre(readonlyInputsMsg);
    }));
    const inputsCelulares = document.querySelectorAll("[data-totalgeral]");
    inputsCelulares.forEach (inputCelular => inputCelular.addEventListener("input", destacarCelulasComConteudoOmisso));
    destacarCelulasComConteudoOmisso();
    // Retornar mensagem de N/A se clicado nas células trancadas
    const celulasNaoAplicaveis = document.querySelectorAll(".input--bg-color-dark");  
    celulasNaoAplicaveis.forEach( celula => {
        celula.addEventListener("click", () => {
            const msg = `O indicador não é aplicável para ${celula.dataset.faixaetaria}.`;
            alertarSobre(msg);
        });
    })
    aqd.mostrarAviso();
    const dialogBoxAQD__btn = document.querySelector(".dialog-box-default__btn--aqd");
    dialogBoxAQD__btn.addEventListener("click", aqd.salvarCiencia);
    actualizarAnoDeCopyright()
    formatarNumeros();
    // Animar Caixa de diálogo "Esvaziar ficha"
    const desfoque = document.querySelector(".desfoque");
    desfoque.addEventListener("mousedown", event => animarCaixaDeDialogo(event.type));
    desfoque.addEventListener("mouseup", event => animarCaixaDeDialogo(event.type));
    // Fechar Topo Propaganda 
    const btnXDetopoProgaganda = document.querySelector(".topo-propaganda__btn");
    btnXDetopoProgaganda.addEventListener("click", fecharTopoPropaganda);
    // Focar campo de observacoes
    const inputObs = document.querySelector(".obs__input");
    const labelObs = document.querySelector(".obs__label");
    labelObs.addEventListener("click", () => {
        labelObs.parentElement.classList.add("--focus");
        inputObs.focus();
    });
    inputObs.addEventListener("focus", () => inputObs.parentElement.classList.add("--focus"));
    inputObs.addEventListener("focusout", () => inputObs.parentElement.classList.remove("--focus"));
});
