let meuMap = new Map();
meuMap.set("nome", "gian"); 
meuMap.set("steck", "html, css, js")

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

meuMap.size // metodo que retorna a quantidade de itens.

meuMap.has("nome") // retorna se existe esse objeto

meuMap.clear() // ele limpa tudo que estiver no map.

for (let chave of meuMap.keys()) {
    console.log(chave); // recupera as chaves dos objetos
}

for (let valor of meuMap.velues()) {
    console.log(valor); // recupera o valor dos objetos
}

for (let entradas of meuMap.entries()) {
    console.log(entrada);
}

meuMap.delete("stack");

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]