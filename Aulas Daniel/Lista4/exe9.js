function exe9(){
    let nome_produto = []
    let preco = []
    let codigo = []
    let novo_preco =[]

    for(let i = 0 ; i <3 ; i++){
        nome_produto.push(prompt(`Digite o nome do produto:`))
        preco.push(Number(prompt(`Digite o preço do(a) ${nome_produto[i]}:`)))
        codigo.push(Number(prompt(`Digite o código do(a) ${nome_produto[i]}:`)))
    }
    console.log(`Nomes: ${nome_produto}`)
    console.log(`Preços: ${preco}`)
    console.log(`Códigos: ${codigo}`)

    for(let i = 0 ; i <3 ; i++){

        if(codigo[i]%2 == 0){

           if(preco[i] > 1000){ 
            novo_preco[i] = preco[i] + (0.2 *  preco[i])
            }
            else{
                novo_preco[i] = preco[i] +(0.15 * preco[i])
            }
        }
        else if( preco[i]> 1000){
            novo_preco[i] = preco[i] + (0.1 * preco[i])
        }
        else{
            novo_preco[i] = preco[i]
        }
    }
    console.log(`Novos Preços: ${novo_preco}`)
}
