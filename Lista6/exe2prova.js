function exe2() {
    let matriz = []
    let vetor = []
    dados(vetor)
    criandoMatriz(matriz, vetor)
    media(matriz, vetor)
    menores_notas(matriz, vetor)
    menorMédia(matriz)
}


function dados(vetor) {
    for (let i = 0; i < 4; i++) {                           //NOME DO CARRO
        vetor[i] = prompt(`Digite o nome do carro`)
    }

}

function criandoMatriz(matriz, vetor) {
    for (let i = 0; i < 4; i++) {
        matriz[i] = []
        alert(`Informe as notas dos carros:`)                 
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Informe a ${j + 1} nota do carro ${vetor[i]}:`))       //NOTAS RECEBIDAS
        }
    }
    console.log(matriz)
}


function media(matriz, vetor) {
    let media = []
    let soma_notas
    let qtd_notas
    for (let i = 0; i < 4; i++) {                   
        soma_notas = 0
        qtd_notas = 0
        for (let j = 0; j < 5; j++) {
            soma_notas += matriz[i][j]                  //SOMA DAS NOTAS RECEBIDAS POR CADA CARRO
            qtd_notas++
        }

        media[i] = soma_notas / qtd_notas

        console.log(`Média das notas do ${vetor[i]} = ${media[i]}`)
    }

}

function menores_notas(matriz, vetor) {
    let menor_nota = 0
    let nome_carro = 0

    menor_nota = matriz[0][0]
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 4; i++) {

            if (menor_nota > matriz[i][j]) {
                menor_nota = matriz[i][j]                                   
                nome_carro = i
            }

        }
        console.log(`A menor nota da ${j + 1} avaliação é do carro ${vetor[nome_carro]},  nota = ${menor_nota}`)
    }
}

function menorMédia(matriz) {
    let media = []
    let menor_media
    let soma_avaliacao
    let qtd_avaliados
    let avaliacao = 0

    for (let j = 0; j < 5; j++) {
        menor_nota = 0
        soma_avaliacao = 0
        qtd_avaliados = 0

        for (let i = 0; i < 4; i++) {
            soma_avaliacao += matriz[i][j]     // SOMA DAS NOTAS DE 1 TIPO DE AVALIAÇÃO 
            qtd_avaliados++

        }
        media[j] = soma_avaliacao / qtd_avaliados    // DIVISAO PELA QUANTIDADE DE CARROS AVALIADOS = MÉDIA DE CADA AVALIACAO

    }
    menor_media = media[0]

    for (let j = 0; j < 5; j++) {
        if (media[j] < menor_media) {
            menor_media = media[j]              // CALCULO DA MENOR MÉDIA
            avalicao = j
        }
    }

    console.log(`A menor média foi da avaliação ${avaliacao + 1} e a média foi = ${menor_media} `)
}