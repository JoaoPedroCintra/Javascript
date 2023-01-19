function exe6() {
    let vetor_contas = []
    let vetor_cliente = []
    let num
    do {
        num = Number(prompt(`Digite 1 para cadastrar uma nova conta;\n2 para acessar a sua conta;\n3 para sair do programa.`))

        if (num == 1) {
            conta(vetor_contas, vetor_cliente)
        }

        else if (num == 2) {
            dados()
        }

    } while (num != 3)

    console.log(vetor_contas)
}

function conta(vetor_contas, vetor) {

    let objConta = {
        nro_conta: Number(prompt(`Informe o número da conta do cliente:`)),
        nro_cliente: Number(prompt(`Informe o nro do cliente:`)),
        saldo: Math.random() * 10000
    }
    vetor_contas.push(objConta)
    vetor.push(objConta.nro_cliente)

    for (let i = 0; i < vetor.length; i++) {
        if (vetor_contas[vetor_contas.length - 1].nro_cliente == vetor[i]) {
            alert(`Este número de cliente já está cadastrado`)
        }
        else {
            alert(`Cadastrado com sucesso`)
        }
    }

}


function dados() {
    let objCliente = {
        nro_cliente: Number(prompt(`Informe o número do cliente:`)),
        nome: (prompt(`Informe o nome:`)),
        telefone: Number(prompt(`Informe o telefone:`)),
        endereço: prompt(`Informe o endereço`)
    }
}