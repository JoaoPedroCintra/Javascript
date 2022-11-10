function exe4() {
    let matriz_notas = []
    let alunos = []
    nome(alunos)
    console.log(alunos)
    Notas(matriz_notas, alunos)
    console.log(matriz_notas)
    mostrarNotas(matriz_notas, alunos)
    media(matriz_notas, alunos)
}

function nome(aluno) {
    for (i = 0; i < 5; i++) {
        aluno.push(prompt(`Digite o nome do ${i + 1}º aluno: `))
    }
}

function Notas(matriz, aluno) {
    for (let i = 0; i < 5; i++) {
        matriz[i] = []
        alert(`Informe as notas do ${aluno[i]}:`)
        for (let j = 0; j < 3; j++) {
            matriz[i][j] =  Number(prompt(`Nota ${j + 1}: `)) //(Math.random() * 10).toFixed()      
        }
    }
}


function mostrarNotas(matriz, aluno) {
    let msg
    for (let i = 0; i < 5; i++) {
        msg = `${aluno[i]} - `
        for (let j = 0; j < 3; j++) {
            msg += `Nota ${j + 1}: ${matriz[i][j]}\n`
        }
        console.log(msg)
    }
}


function media(matriz, aluno) {
    let media = []
    let media_classe = 0
    let soma_notas
    let qtd_notas
    let qtd_alunos = 0

    for (let i = 0; i < 5; i++) {
        soma_notas = 0
        qtd_notas = 0
        qtd_alunos++
        for (let j = 0; j < 3; j++) {
            soma_notas += matriz[i][j]
            qtd_notas++
        }
        media[i] = soma_notas / qtd_notas
        media_classe += media[i]
        console.log(`Média do ${aluno[i]} = ${media[i]}`)

        if (media[i] < 3) {
            console.log(`Reprovado.`)
        }
        else if (media[i] < 6) {
            console.log(`Exame.`)
        }
        else {
            console.log(`Aprovado.`)
        }
    }

    media_classe = (media_classe / qtd_alunos).toFixed(2)
    console.log(`Média da classe = ${media_classe}`)

}