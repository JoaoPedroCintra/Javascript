function exe10(){
    let vetor = []
    let vetor2 = []
    let resultante = []
    let pares_v1 = []
    let soma = 0

    for(let i=0; i<10; i++){
        vetor.push(Number(prompt(`Digite o ${i+1}º valor inteiro: `)))

        if(vetor[i]%2 == 0){
            pares_v1.push(vetor[i])
        }
    }
    
    console.log(`Vetor1: ${vetor}`)
    console.log(`Pares_v1: ${pares_v1}`)
    


    for (let i=0; i<5; i++){
        vetor2.push(Number(prompt(`Digite o ${i+1}º valor inteiro: `)))
        soma += vetor2[i]
    }
    console.log(`Vetor2: ${vetor2}`)


    if(pares_v1.length == 0 ){
        alert(`Não existem números pares!`)
    }
    else{
        for(let i=0; i<5; i++){
            resultante[i] = soma + pares_v1[i]
        }
    }

    console.log(`Soma: ${soma}`)
    console.log(`Resultante: ${resultante}`)

}