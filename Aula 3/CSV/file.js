/*
import { csv_loader } from './csv_loader.js';

const csv = await Deno.readTextFile('./municipios.csv');

const tabela = csv_loader(csv);

console.log(tabela);
*/

const file = await Deno.readTextFile('./file.json');

const json = JSON.parse(file);

console.log(json[0].interesses[1]);

const Carlos = {
    nome:"Carlos",
    idade: 28,
    brasileiro: true

}

console.log(carlos);

const json_final = JSON.stringify(json, null, 2);

await Deno.writeTextFile('./carlos.json', json_final);