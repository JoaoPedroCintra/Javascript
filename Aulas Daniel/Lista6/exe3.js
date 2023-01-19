function exe3() {
    let vetor = []
    leitura(vetor)
    console.log(vetor)
    maiorElemento(vetor)
    menorElemento(vetor)
}

function leitura(matriz) {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = (Math.random() * 100).toFixed(0)
        }
    }
}

function maiorElemento(matriz) {
    let maior = 0
    let posicao
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (maior < matriz[i][j] || (i == 0 && j == 0)) {
                maior = matriz[i][j]
                posicao = `Linha: ${i} e Coluna: ${j}`
            }
        }
    }
    console.log(`O maior elemento é: ${maior}`)
    console.log(`Posição: ${posicao}`)
}

function menorElemento(matriz) {         // O menor está errado!!!!!!!!!!
    let menor = 0
    let posicao
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (menor > matriz[i][j] || (i == 0 && j == 0)) {
                menor = matriz[i][j]
                posicao = `Linha: ${i} e Coluna: ${j}`
            }
        }
    }
    console.log(`O menor elemento é: ${menor}`)
    console.log(`Posição: ${posicao}`)
}