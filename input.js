function main() {
    const readline = require("readline-sync"); // require is used to take user input also readline_sync
    
    let name = readline.question("Enter your name: ");
    
    console.log("Hello " + name);
}

main();

//we have to insall (npm install readline-sync) in terminal for this