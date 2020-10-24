export function csv_loader(text, column_separator = ";", line_separator = "\n"){
    return text
        .trim()
        .split(line_separator)
        .map(
            line => line
                .trim()
                .split(column_separator)
                .map(cell => cell.trim())
        )
}