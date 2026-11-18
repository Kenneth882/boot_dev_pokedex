import { readFile } from "node:fs/promises";
import { createInterface } from "node:readline";
export function cleanInput(input: string): string[] {
    const res = input.trim().split(/\s+/)
    for (let word in res){
        res[word]=res[word].toLowerCase()
    }
    return res
}

export function startREPL(){
    
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt:'> '
        
});
    rl.prompt();   
    rl.on("line",(input:string)=>{
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length===0) {
            rl.prompt();
            return;
        }
        else{
            console.log(`Your command was: ${cleanedInput[0]}`);
            rl.prompt();
        }
     } )
 
}