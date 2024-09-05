console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeCompra = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    };
    contador+=1;
};

console.log("Destino Existe:", destinoExiste);

if(podeCompra && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe! Tivemos um erro.");
};

//Mais comum
for(let i = 0; i < 3; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    };
    contador+=1;
}
