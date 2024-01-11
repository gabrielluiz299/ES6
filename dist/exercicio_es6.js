"use strict";

var alunos = [{
  nome: 'luis',
  nota: 7
}, {
  nome: 'leticia',
  nota: 5
}, {
  nome: 'flavio',
  nota: 6
}];
function passeiDeAno(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = passeiDeAno(alunos);
console.log(alunosAprovados);