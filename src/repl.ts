export function cleanInput(input: string): string[] {
    const res = input.trim().split(/\s+/)
    for (let word in res){
        res[word]=res[word].toLowerCase()
    }
    return res
}