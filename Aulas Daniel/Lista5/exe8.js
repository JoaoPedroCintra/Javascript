function principal() {
    let vetor = []
    for (let i = 0; i < 5; i++) {
        let objEstado = {
            nome: prompt(`Informe nome do estado`),
            veiculos: Number(prompt(`Informe nro de veículos`)),
            acidentes: Number(prompt(`Informe nro de acidentes`)),
            cidades: Number(prompt(`Informe qtde cidades do estado`)),
            indice: 0, // campos calculados
            percentualVeiculos: 0, // campos calculados
            mediaAcidentes: 0 // campos calculados
        }
        vetor.push(objEstado)
    }
    // calcula o índice de acidentes
    for (let i = 0; i < 5; i++) {
        vetor[i].indice = (vetor[i].acidentes / vetor[i].veiculos) * 100
    }
    // calcular maior e menor índice
    let maiorIndice = vetor[0].indice
    let menorIndice = vetor[0].indice
    let nomeMaiorIndice = vetor[0].nome
    let nomeMenorIndice = vetor[0].nome
    for (let i = 1; i < 5; i++) {
        if (vetor[i].indice > maiorIndice) {
            maiorIndice = vetor[i].indice
            nomeMaiorIndice = vetor[i].nome
        }
        if (vetor[i].indice < menorIndice) {
            menorIndice = vetor[i].indice
            nomeMenorIndice = vetor[i].nome
        }
    }
    // calcular percentual de veiculos
    // cacula média de acidentes por estado
    let somaVeiculos = 0
    for (let i = 0; i < 5; i++) {
        somaVeiculos = somaVeiculos + vetor[i].veiculos
    }
    for (let i = 0; i < 5; i++) {
        vetor[i].percentualVeiculos = (vetor[i].veiculos / somaVeiculos) * 100
        vetor[i].mediaAcidentes = vetor[i].acidentes / vetor[i].cidades
    }
    console.log(vetor)
    console.log(`Maior índice ${maiorIndice} do estado ${nomeMaiorIndice}`)
    console.log(`Menor índice ${menorIndice} do estado ${nomeMenorIndice}`)

}