const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`) // esse metodo basicamente faz o mesmo que o for, apenas retonar o que esta dentro do array, não maniula.
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = { //transforma a array alunos que so possui strings em um array de objetos.
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2)

const paula = aluno2.find(function(item) {
    return item.nome == 'Paula' //find é uma função de busca, de procurar, para de fato procurar algum objeto dentro do array e se tem esse objeto.
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'; // essa função retorna em qual posição o objeto esta e se tem esse objeto.
})

console.log(indiceDaPaulapaula)

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    item.curso === 'Frontend' //metodo de verificação, ele busca na array se todos os objetod percentem ao curso, e dependendo do valor retorna true ou false.
})

alunos2.some(function(item) {
    return item.curso === 'Backend' // o metodo some tem a mesma funcionaldade do EVERY, com uma diferença, se existir apenas um item diferente pelo meos ele retorna true. 
})

alunos2.filter(function(item) {
    return item.curso === 'Frontend'; // esse metodo filtra e retorna os objetos que fazem parte do curso Frontend por exemplo. muito util.
})

// outra forma de escrever o codigo

function filtraAlunosFront(aluno) {
    return aluno.curso === 'Frontend';
}

const alunosDeFront = alunos2.filter(filtraAlunosFront)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual; // esse metodo reduz todos os valores em um so, basicamente soma, acumula, passando o zero como parametro do indice.
    return acumular;
}, 0)

// forma antiga de esctrever o codigo

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
