function exe5() {
    let logica = [] 
    let linguagem = []
    let iguais = []

    for (let i = 0; i < 5; i++) {
        logica.push(Number(prompt(`Informe o nº da matrícula do ${i+1}º aluno de lógica de programação:`)))
    }

    for (let j = 0; j < 5; j++) {
        linguagem.push(Number(prompt(`Informe o nº da matrícula do ${j+1}º aluno de linguagem de programação:`)))

        for(let n = 0 ; n <5 ; n++){

            if(logica[n] == linguagem[j]){
                iguais.push(linguagem[j])
            }
        }
    }

    if(iguais.length == 0 ){
        alert(`Nenhum aluno faz os dois cursos!`)
    }
    else{
        console.log(`Alunos que cursam ambos os cursos: ${iguais}`)
    }
}