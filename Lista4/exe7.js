function exe7(){
    let num = []
    let negativos = []
    let positivos = []
    let cont1 = 0
    let soma = 0
    for(let i=0 ; i<10 ; i++){
        num.push(Number(prompt(`Digite o ${i+1} número real: `)))

        if(num[i]>=0){
            positivos[i] = num[i]
            soma+= positivos[i]
        }
        if(num[i]<0 ){ 
            negativos[i]= num[i]
            cont1++
        }
    }

    console.log(`Numeros P: ${positivos}`)
    console.log(`SOMA: ${soma}`)
    console.log(`Numeros N: ${negativos}`)
    console.log(`Quantidade de Nºs negativos ${cont1++}`)
}