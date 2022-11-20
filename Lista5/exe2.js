function exe2() {
    let vetor = []
    dados(vetor)
    medias(vetor)
    maiorSal_percentualMulheres(vetor)
}


function dados(vetor) {

    for (let i = 0; i < 10; i++) {

        let objHabitante = {
            sexo: prompt(`Digite 'F' se for do sexo femnino e 'M' para masculino:`).toUpperCase(),
            salario: Number(prompt(`Informe o salário:`)),
            n_filhos: Number(prompt(`Informe o número de filhos:`)),
            idade: Number(prompt(`Informe a idade:`))
        }
        vetor.push(objHabitante)
    }
    console.log(vetor)
}


function medias(vetor) {
    let soma_sal = 0
    let media_sal = 0
    let soma_filhos = 0
    let media_filhos = 0
    let cont = 0

    for (let i = 0; i < 10; i++) {
        soma_sal += vetor[i].salario
        soma_filhos += vetor[i].n_filhos
        cont++
    }
    media_sal = soma_sal / cont
    media_filhos = soma_filhos / cont

    console.log(`Média salarial dos habitantes: ${media_sal}`)
    console.log(`Média do número de filhos dos habitantes: ${media_filhos}`)
}

function maiorSal_percentualMulheres(vetor) {
    let maior_sal = vetor[0].salario
    let qtde_mulheres = 0
    let cont = 0
    let percentual = 0
    for (let i = 0; i < 10; i++) {

        if (maior_sal < vetor[i].salario) {
            maior_sal = vetor[i].salario
        }

        if (vetor[i].sexo == 'F') {
            qtde_mulheres++

            if (vetor[i].salario > 1000) {
                cont++
            }

        }
    }
    percentual = ((cont / qtde_mulheres) * 100).toFixed(2)


    console.log(`Maior salário: ${maior_sal}`)
    console.log(`Percentual de Mulheres com salário superior a R$1000: ${percentual}%`)
}