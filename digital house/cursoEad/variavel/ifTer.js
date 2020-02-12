let dia = "domingo"

let resultado = dia == "domingo" ? "vou para praia " : "fico em casa ";

console.log(resultado)


switch (dia ){
    case  "segunda" :
        console.log("dia de trabalho")
        break;
    case "terça":
        console.log("dia de curso")
        break;
        default : console.log ("nao vou fazer nada ")
        
}

// Vamos criar uma função e atribuí-la a uma variável!

// Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte 
// um for que conte de 0 até um número. A função deverá retornar a quantidade
// de números impares que foram encontrados até chegar ao número.


// erro A função deve retornar os números impares

function naoPareDeContarImparesAte(numero){
    // Escreva aqui o seu código
    let cont = 0;
    let impar = []; 

    for (let i = 0 ; numero >= i ; i++ ){

             if( i %2 != 0  ){
                 
                 impar[cont] = i
                 cont ++
             } 

        console.log(impar)
    }
    
    return cont 
}
 naoPareDeContarImparesAte(5)