// ELEMENTOS DO CARROSSEL E CONEXÃO COM O AVALIACOES.HTML
const imagem = document.querySelector(".imagem-avaliacao img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const indicadores = document.querySelectorAll(".indicador");

console.log("JavaScript conectado!");

// SÓ EXECUTE O CARROSSEL SE ELE EXISTIR NA PÁGINA
if (imagem && setaEsquerda && setaDireita) {
    
//IMPEDE QUE A IMAGEM SEJA ARRASTADA PARA PELO NAVEGADOR
imagem.draggable = false;


// MOSTRANDO AO JAVA AS IMAGENS QUE FARÃO PARTE DO CARROSSEL
const avaliacoes = [
    "imagens/img1.png",
    "imagens/img2.png",
    "imagens/img3.png",
    "imagens/img4.png",
    "imagens/img5.png",
    "imagens/img6.png"
];

// DIZ QUAL IMAGEM ESTÁ SENDO EXIBIDA
let indiceAtual = 0;

// CONTROLE DO TEMPORIZADOR
let temporizador;

// REALIZA A TROCA DA IMAGEM
function mostrarAvaliacao() {
    imagem.style.opacity = 0;

    setTimeout(function() {
        imagem.src = avaliacoes[indiceAtual];
        imagem.style.opacity = 1;
    },200);

    indicadores.forEach(function(indicador, indice) {
        indicador.classList.toggle("ativo", indice === indiceAtual);
    });
}

// FUNÇÃO PARA MOSTRAR A AVALIAÇÃO
mostrarAvaliacao();

// FUNÇÃO PARA INICIAR O CARROSSEL AUTOMÁTICO
function iniciarCarrossel() {
    clearInterval(temporizador);
    temporizador = setInterval(function() {
        indiceAtual = indiceAtual + 1;

        // AO CHEGAR NA ÚLTIMA IMAGEM, VOLTA PARA A PRIMEIRA
        if (indiceAtual >= avaliacoes.length) {
            indiceAtual = 0;
        }

        mostrarAvaliacao();
    }, 5000);
}

// FUNÇÃO PARA PARAR O CARROSSEL 
function pararCarrossel() {
    clearInterval(temporizador);
}

// EXECUÇÃO DA SETA DIREITA
setaDireita.addEventListener("click", function() {
    indiceAtual = indiceAtual + 1;

    // INDICA QUE AO CHEGAR NA ÚLTIMA IMAGEM E EXECUTAR, DEVE-SE RETORNAR PARA O INÍCIO
    if (indiceAtual >= avaliacoes.length) {
        indiceAtual = 0;
    }
    mostrarAvaliacao();

    // RECOMEÇA A CONTAGEM DOS 5 SEGUNDOS DO CARROSSEL
    iniciarCarrossel();
});

// EXECUÇÃO DA SETA ESQUERDA
setaEsquerda.addEventListener("click", function() {
    indiceAtual = indiceAtual - 1;

    // INDICA QUE AO CHEGAR NA PRIMEIRA IMAGEM E EXECUTAR, DEVE-SE RETORNAR PARA O INÍCIO
    if (indiceAtual < 0) {
        indiceAtual = avaliacoes.length - 1;
    }
    mostrarAvaliacao();

    // RECOMEÇA A CONTAGEM DOS 5 SEGUNDOS DO CARROSSEL
    iniciarCarrossel();
});

// INICIA O CARROSSEL AUTOMÁTICAMENTE AO DESCLICAR
iniciarCarrossel();

// PAUSA ENQUANTO O MOUSE ESTIVER PRESSIONANDO A IMAGEM
imagem.addEventListener("mousedown", function() {
    pararCarrossel();
});

// VOLTA A CONTAGEM QUANDO O MOUSE POR SOLTO
document.addEventListener("mouseup", function() {
    iniciarCarrossel();
});

// PAUSA ENQUANTO O DEDO ESTIVER PRESSIONANDO A IMAGEM NA TELA DE CELULAR
imagem.addEventListener("touchstart", function() {
    pararCarrossel();
}, {passive: true});

// VOLTA A CONTAGEM QUANDO O DEDO FOR RETIDADO DA IMAGEM NA TELA DE CELULAR
document.addEventListener("touchend", function() {
    iniciarCarrossel();
});

// MENU MOBILE
const botaoMenu = document.querySelector(".menu-mobile");
const menuNavegacao = document.querySelector("#menu-navegacao");

if (botaoMenu && menuNavegacao) {
botaoMenu.addEventListener("click", function(){
    const menuAberto = menuNavegacao.classList.toggle("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", menuAberto);
});
}

// ANO ATUAL DO RODAPÉ
const anoAtual = document.querySelector("#ano-atual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}
}