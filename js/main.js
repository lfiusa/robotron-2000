const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll ("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// controle.forEach((elemento) => {}) Isso itera sobre cada elemento no controle usando a função de ordem superior forEach. Para cada elemento, a função de callback dentro das chaves {} será executada.
// elemento.addEventListener("click", (evento) => {}) Aqui, um evento está sendo adicionado ao elemento atual (representado pela variável elemento). O evento que está sendo ouvido é o de clique ("click"). Quando esse evento ocorrer no elemento, a função de callback será chamada.
// manipulaDados(evento.target.dataset.controle, evento.target.parentNode): Dentro da função de callback do evento de clique, essa linha de código está chamando a função manipulaDados com dois argumentos. O primeiro argumento é o valor da propriedade data-controle do elemento clicado, acessada através de evento.target.dataset.controle. O segundo argumento é o pai do elemento clicado, acessado por evento.target.parentNode.

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatistica.forEach ((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}

// a função atualizaEstatisticas percorre o array estatistica, que contém elementos HTML, e para cada elemento, atualiza seu conteúdo de texto somando o valor correspondente do array pecas com base nos índices peca e elemento.dataset.estatistica. Portanto, essa função é usada para atualizar as estatísticas exibidas nos elementos HTML com base nos valores contidos no array pecas.


