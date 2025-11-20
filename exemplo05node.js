//Importar o módulo nativo "readline" do Node JS//
const readline = require('readline')

//Criar uma interface de leitura//
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
console.log("----SOMA----");
console.log("Digite dois números para realizar a soma");

rl.question("Digite o primeiro número: ",
     (numero1_str) => {
    const numero1 = parseInte(numero1_str)

rl.question("Digite o segundo número: ",
    (numero2_str) => {
    const numero2 = parseInte(numero2_str)
    const soma = numero1 + numero2;
    
    console.log("----------------------")
    console.log(`A soma dos numeros digitados é: ${soma}`);
    rl.close();
    })
})

