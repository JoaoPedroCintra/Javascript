function principal() {
    let matriz = []
    criandoMatriz(matriz)
    console.log(matriz)
    Calcular(matriz)

}

function criandoMatriz(matriz) {
    for(let i=0;i<3;i++){
        matriz[i] = [] 
        alert(`Informe os valores da matriz`)
        for(let j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Informe o ${j+1} valor:`))
        }
    }
}

function Calcular(matriz) {
    let vetor = []
    let num = 0

    for (let i = 0; i < 3; i++) {
        for(let j=0;j<5;j++){
            if( matriz[i][j]>=15 && matriz[i][j]<= 20){
                vetor.push( matriz[i][j])
                num +=  1
            }
        }
        
    }
    console.log(vetor)
    console.log(num)
}