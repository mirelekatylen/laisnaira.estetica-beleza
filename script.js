// ELEMENTOS DO CARROSSEL E CONEXÃO COM O AVALIACOES.HTML
const imagem = document.querySelector(".imagem-avaliacao img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const indicadores = document.querySelectorAll(".indicador");

console.log("JavaScript conectado!");

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

// REALIZA A TROCA DA IMAGEM
function mostrarAvaliacao() {
    imagem.src = avaliacoes[indiceAtual];

    indicadores.forEach(function(indicador, indice) {
        indicador.classList.toggle("ativo", indice === indiceAtual);
    });
}

// FUNÇÃO PARA MOSTRAR A AVALIAÇÃO
mostrarAvaliacao();

// EXECUÇÃO DA SETA DIREITA
setaDireita.addEventListener("click", function() {
    indiceAtual = indiceAtual + 1;
    // INDICA QUE AO CHEGAR NA ÚLTIMA IMAGEM E EXECUTAR, DEVE-SE RETORNAR PARA O INICIO
    if (indiceAtual >= avaliacoes.length) {
        indiceAtual = 0;
    }
    mostrarAvaliacao();
});

setaEsquerda.addEventListener("click", function() {
    indiceAtual = indiceAtual - 1;
    if(indiceAtual < 0) {
        indiceAtual = avaliacoes.length - 1;
    }
    mostrarAvaliacao();
});

setInterval(function() {
    indiceAtual = indiceAtual + 1;
    if (indiceAtual >= avaliacoes.length) {
        indiceAtual = 0;
    }
    mostrarAvaliacao();
},5000);
