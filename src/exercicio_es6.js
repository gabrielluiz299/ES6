const alunos = [
    {nome: 'luis', nota: 7},
    {nome: 'leticia', nota: 5},
    {nome: 'flavio', nota: 6}
]

function passeiDeAno(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6)
}

const alunosAprovados = passeiDeAno(alunos);
console.log(alunosAprovados);
