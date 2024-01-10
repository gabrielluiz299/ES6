// function somar() {
//     let soma = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         soma += argument[i]; arguments nos retorna todos os argumentos passados na função, tendo a capacidade de receber infinitos argumentos.
//     }
// }

// console.log(soma(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual; // rest usado como argumento de função
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

// Spread
const numeros = [1,2,3,4]
console.log(...numeros) // spread concatena arrays e objetos

const timesDeSp = ['santos', 'palmeiras'];
const timesDoRj = ['flamengo', 'bangu'];

// const timesDeFutebol = timesDeSp.concat(timesDoRj); essa é uma maneiras de unir arrays, ou atraves do spread
const timesDeFutebol = [...timesDeSp, ...timesDoRj]

console.log(timesDeFutebol)

const carrosDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carrosDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// desestruração
const {motor: motorDoCarroDaAna} = carroDaAna;

console.log(motorDoCarroDaAna);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)