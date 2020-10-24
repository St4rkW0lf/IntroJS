const arquivo_csv = await Deno.readTextFile('./arquivo.csv');

console.log(arquivo_csv);