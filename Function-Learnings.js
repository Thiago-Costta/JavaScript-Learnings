//criar uma função que soma dois valores
//a função se chama soma e recebe 2 parâmetros
function soma(a,b){
    let result = a + b
    console.log(`Resultado da soma ${result}`)

}
//chamar a função criada
soma(4,9)


//função que recebe 2 parâmetros e retornar a multiplicação deles
function multiplicacao(a,b){
    let result = a*b
    return result

}
//chama a função e mostra o resultado
console.log(`resultado da multiplicação ${multiplicacao(4,9)}`)

//fução que não recebe parâmetro
function boaNoite(){
    console.log(`Boa Noite !!!`)
    
}
//chama a função e mostra o resultado
boaNoite()

//funções anônimas - função sem nome
// variável passa a ser uma função
let subtracao = function (a,b){
    let result = a - b
    console.log(`Resultado da subtração ${result}`)
}
subtracao(10,2)

//criar uma função durante a chamada de uma outra função
setTimeout(function (){
    console.log("Essa frase foi executada após 5 segundos")
}, 5000)

//arrow function ou função com seta
//não tem necessidade de usar a palavra function, no ligar
//usamos a seta
let divisao  =(a,b)=>{
    let result = a/b
    console.log(`Resultado da divisão ${result}`)
}
divisao(10,2)

//função vai ter uma única linha de código
let boaTarde = () => console.log(`Boa Tarde`)
boaTarde()


// EXERCICIO TESTE
let somaPares = () => {
    let soma = 0
    for(let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            soma = soma + i
        }
    }
    console.log(`Soma dos números pares de 1 á 20: ${soma}`)
}
somaPares()