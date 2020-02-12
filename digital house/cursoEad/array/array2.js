// map devolve um array de com a regra de negocip 
let numerospares = [ 2,4,6,8,10]
let resultado = []

function dobro ( numero ){
    return numero *2
}
 const  numeroMaior =  (numero) =>   numero > 6   


resultado = numerospares.map(dobro)
console.log(resultado)
//  filter filta os valores mediante a uma condicao 

resultado = numerospares.filter(numeroMaior) 
console.log(resultado)

// reduce 
let resultadoReduce = numerospares.reduce( function ( primeiro, segundo ) {
     return primeiro + segundo
} , 10 )
console.log(numerospares)
console.log(resultadoReduce)


// foreach
