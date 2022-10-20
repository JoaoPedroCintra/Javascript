function exe6(){
    let vendas = []
    let comissao = []
    let vendedor = []
    let total_vendas = 0


    for(let i =0; i<5;i++){
        vendas.push(Number(prompt(`Digite o valor total das vendas do vendedor ${i+1}: `)))
        total_vendas += vendas[i] 
        comissao.push(Number(prompt(`Digite o percentual de comissao do vendedor ${i+1}: `)))
        vendedor.push((prompt(`Digite o nome do vendedor ${i+1}: `))).toString
    }

    console.log(vendas)
    console.log(comissao)
    console.log(vendedor)


    let val_comissao = 0
    let maior_comissao = 0
    let menor_comissao = 0
    let posicao_maior = 0
    let posicao_menor = 0
    
    for(let n = 0; n < 5; n++){
        val_comissao = vendas[n] * (comissao[n]/100)

       
        if(maior_comissao < val_comissao || n == 0){
            maior_comissao = val_comissao
            posicao_maior = n
        }

        if(menor_comissao > val_comissao || n == 0){
            menor_comissao = val_comissao
            posicao_menor = n
        }
        console.log(`O ${vendedor[n]} vai receber R$${val_comissao} de comissão.`)
    }


    console.log(`O valor total das vendas de todos os vendedores: ${total_vendas}`)
    console.log(`O maior valor a receber é de R$ ${maior_comissao} e quem irá receber será o ${vendedor[posicao_maior]}`)
    console.log(`O menor valor a receber é de R$ ${menor_comissao} e quem irá receber será o ${vendedor[posicao_menor]}`)
}