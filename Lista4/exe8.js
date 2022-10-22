function exe8(){

    let alunos = []
    let medias = []
    let reprovados = []
    let maior_media = 0
    let aluno_maior_media = ""
    for(let i=0; i<5 ; i++){
        alunos.push(prompt(`Digite o nome do ${i+1}º aluno:`))
        medias.push(Number(prompt(`Digite a média de ${alunos[i]}:`)))
    
        if(medias[i] > maior_media || i == 0){
            maior_media = medias[i]
            aluno_maior_media = alunos[i]
        }

        if(medias[i] < 7){
           reprovados.push(alunos[i])
        }
    }


}