function exe2() {
    let matriz = []
    criandoMatriz(matriz)
    console.log(matriz)
    Calcular(matriz)

}

function criandoMatriz(matriz) {
    for(let i=0;i<2;i++){
        matriz[i] = [] 
        alert(`Informe os valores da matriz`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe o ${j+1} valor:`))
        }
    }
}

function Calcular(matriz) {
    let vetor = []
    let pares =[]

    for (let i = 0; i < 2; i++) {
        for(let j=0;j<4;j++){
            if( matriz[i][j]>=12 && matriz[i][j]<= 20){
                vetor.push( matriz[i][j])

            }
            if (matriz[i][j] % 2 == 0) {
                pares.push(matriz[i][j])
            }
        }
        console.log(`Números entre 12 e 20 na linha ${i}: ${vetor}`) 
    }
    console.log(`Pares da matriz: ${pares}`)
}