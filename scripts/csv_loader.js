export default async function csv_loader(path, column_separator = ";", line_separator = "\n") {
    const request = await fetch(path);
    const csv = await request.text();

    const [header, ...body] = csv
        .trim()
        .split(line_separator)
        .map(line => line
                .trim()
                .split(column_separator)
                .map(cell => cell.trim())
            );
    
    const hashmap = {};

    for(const [ibge_id, property] of body) {
        hashmap[ibge_id] = +property;
    }

    return hashmap;
}