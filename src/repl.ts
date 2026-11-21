import { readFile } from "node:fs/promises";
import { createInterface } from "node:readline";
import { getCommands } from "./command_exit.js";


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
             const first = input[0]
             if(first==getCommands().exit.name[0]){
                getCommands().exit.callback(getCommands());
             }
             else{
                console.log(`Unknown command: ${cleanedInput[0]}`);
             }


            rl.prompt();
        }
     } )
 
}