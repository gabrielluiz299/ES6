"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial)); // esse metodo basicamente faz o mesmo que o for, apenas retonar o que esta dentro do array, não maniula.
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    //transforma a array alunos que so possui strings em um array de objetos.
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var paula = aluno2.find(function (item) {
  return item.nome == 'Paula'; //find é uma função de busca, de procurar, para de fato procurar algum objeto dentro do array e se tem esse objeto.
});
console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // essa função retorna em qual posição o objeto esta e se tem esse objeto.
});
console.log(indiceDaPaulapaula);
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  item.curso === 'Frontend'; //metodo de verificação, ele busca na array se todos os objetod percentem ao curso, e dependendo do valor retorna true ou false.
});
alunos2.some(function (item) {
  return item.curso === 'Backend'; // o metodo some tem a mesma funcionaldade do EVERY, com uma diferença, se existir apenas um item diferente pelo meos ele retorna true. 
});
alunos2.filter(function (item) {
  return item.curso === 'Frontend'; // esse metodo filtra e retorna os objetos que fazem parte do curso Frontend por exemplo. muito util.
});

// outra forma de escrever o codigo

function filtraAlunosFront(aluno) {
  return aluno.curso === 'Frontend';
}
var alunosDeFront = alunos2.filter(filtraAlunosFront);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual; // esse metodo reduz todos os valores em um so, basicamente soma, acumula, passando o zero como parametro do indice.
  return acumular;
}, 0);

// forma antiga de esctrever o codigo

var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}