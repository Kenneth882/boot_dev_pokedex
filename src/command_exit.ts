import { exit } from 'node:process';


export function commandExit(){
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0)
    
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    // can add more commands here
    help: {
        name: "help",
        description: "Display available commands",
        callback: (commands: Record<string, CLICommand>) => {
            console.log("Usage:");
            for (const commandName in commands) {
                const command = commands[commandName];
                console.log(`- ${command.name}: ${command.description}`);
            }
        }
    }
  };
}
