//--[CONDICIONAL]-----------------------------------------------------------------------------

// Exemplo 1
/*
const lista_de_compras = ["Pera", "Manga", "Abacate", "Suco", "Uva", "Papel Higiênico", "Arroz", "Frango"]

if(lista_de_compras.length > 6){
    alert("Chama teu primo pra te ajudar!");
} else{
    alert("Posso ir sozinho")
}
*/

// Exemplo 2
/*
const valor = prompt("Insira um número e eu direi se ele é maior do que 8");

 if(valor>8){
    alert(valor + " é maior que 8!");
} else{
    alert(valor + " não é maior que 8!");
} */

// Exemplo 3
// alert(valor > 8 ? valor + " é maior que 8!" : valor + "não é maior que 8!");


//--[LAÇO DE REPETIÇÃO]-----------------------------------------------------------------------------

// Exemplo 1
/*
let x = 2;

while(x <= 10000){
    console.log(x);
    x *= 2;
}

console.log("Acabou!");
*/

// Exemplo 2
/*
for(let x = 2; x <= 10000; x *= 2) {
    console.log(x);
}
*/

// Exemplo 3

//const lista_compras = ["Pneu", "Óleo", "Cheirinho", "Lubrificante", "Roda Cromada"]

/*
for(let i = 0; i < lista_compras.length; i++) {
    const compra = lista_compras[i];
    console.log(compra);
}
*/

// Exemplo 3.b

/*
for(const item of lista_compras){
    console.log("Meu item atual é: " +item)
}
*/


//--[FILTRO]-----------------------------------------------------------------------------
/*
const array = [10, 30, 50, 70, 90, 110, 130];

console.log(array.filter(element => element > 80));
*/


//--[FUNÇÃO]-----------------------------------------------------------------------------
/*
function somar(x, y){
    return x + y;
}

const soma = somar(15, 20);

console.log(soma);
*/


//--[ARROW FUNCTION]-----------------------------------------------------------------------------

// 1
/*
const somar = (x, y) => x + y;

const soma = somar(2, 3);

console.log(soma);
*/

// Exemplo 2
/*
const dobrar = x => 2 * x;

const valor = dobrar(7);

console.log(valor);
*/


//--[FILTER]-----------------------------------------------------------------------------
/*
const array = [10, 20, 30, 40, 50, 83, 12, 84, 15];

const new_array = array.filter(x => x % 10 === 0);

console.log(new_array);
*/


//--[MAP]-----------------------------------------------------------------------------

// Exemplo 1
/*
const array = [1, 2, 3, 4, 5, 6, 7];

const new_array = array.map(x => x ** 2);

console.log(new_array);
*/

// Exemplo 2
/*
const array = [[1, 2], [3, 4], [5, 6], [7, 8]]; // lista

const new_array = array.map(x => x[0]);

console.log(new_array);
*/

// Exemplo 3
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const new_array = array
    .map(x => x ** 2)
    .map(x => x + 5)
    .filter(x => x < 100)
    .map(x => x ** 3)
    .filter(x => x < 1000);

console.log(new_array);
*/


//--[SPLIT]-----------------------------------------------------------------------------
/*
const string = "12,15,29,42,10,5";

const nova_string = string
    .split(',')
    .map(x => x ** 2)
    .join(', ');

console.log(nova_string);
*/
