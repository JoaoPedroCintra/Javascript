function exe5() {
    let matriz = []
    let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    leitura(matriz,meses)
    total_Mes_Ano(matriz,meses)
    totalSemanas(matriz)
    

}


function leitura(matriz,meses) {
    for( let i=0; i<12; i++){
        matriz[i] = []
       
        for (let j = 0; j < 4; j++) {
        matriz[i][j] = Math.floor(Math.random() * 11)          // prompt(`Digite os valores das vendas realizadas no mês de ${meses[i]} na ${j+1}ª semana:`)
        }
    }
    console.log(matriz)
}

function total_Mes_Ano(matriz,meses) {
    let total_mes = []
    let soma = 0
    let total_ano = 0
    for( let i=0; i<12; i++){
        soma = 0
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j]
        }
        total_mes[i] = soma
        console.log(`Total vendido no mês de ${meses[i]} = ${total_mes[i]}`)
    }
    for( let i=0; i<12; i++){
        total_ano += total_mes[i]
    }
    console.log(`Total vendido no Ano: ${total_ano}`)
}

function totalSemanas(matriz) {
    let s1 = 0, s2 = 0,s3 = 0,s4 = 0
    
    for( let i=0; i<12; i++){
        for (let j = 0; j < 4; j++) {
            if(j == 0){
                s1+= matriz[i][j]
            }
            else if(j == 1){
                s2+= matriz[i][j]
            }
            else if(j == 2){
                s3+= matriz[i][j]
            }
            else if(j == 3){
                s4+= matriz[i][j]
            }
        }
    }

    console.log(`O total vendido na 1ª semana: ${s1}`) 
    console.log(`O total vendido na 2ª semana: ${s2}`)  
    console.log(`O total vendido na 3ª semana: ${s3}`)          
    console.log(`O total vendido na 4ª semana: ${s4}`)
      
}
