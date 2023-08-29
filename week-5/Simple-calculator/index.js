

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Chose an operation that you want to perform (+, -, /, *): ', (operation) => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            if(operation === '+'){
                const result = parseFloat(num1) + parseFloat(num2);
                console.log(`The result is ${result}`);
                rl.close();
            }
            else if(operation === '-'){
                const result = parseFloat(num1) - parseFloat(num2);
                console.log(`The result is ${result}`);
                rl.close();
            }
            else if(operation === '*'){
                const result = parseFloat(num1) * parseFloat(num2);
                console.log(`The result is ${result}`);
                rl.close();
            }
            else if(operation === '/'){
                const result = parseFloat(num1) / parseFloat(num2);
                console.log(`The result is ${result}`);
                rl.close();
            }
            else {
                console.log('invalid operation');
                rl.close();
            }
        });
    });
});