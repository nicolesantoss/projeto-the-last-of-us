/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao"); //buscar todos os elementos que tenham alguma característica, nesse caso, uma classe.
const imagens = document.querySelectorAll(".imagem") //fazer referência à lista de imagens

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    //- passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado(); //selecionar o codigo, botaoDireito, refatorar..., escrever o que o código faz.

    //- passo 4 - marcar o botão clicado como se estivesse selecionada
    selecionarBotaoCarrossel(botao);

    //- passo 5 - esconder a imagem ativa de fundo
    esconderImagemAtiva();

    //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice); 


  })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa"); //[] => acessar uma posição/elemento dentro de uma lista
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

