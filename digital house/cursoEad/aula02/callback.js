// const dobro  = function (numero1){
//     return numero1 * 2
// } 

// const triplo = function (numero1){
//     return numero1 * 3 }
    
// //     function aplicar (numero1,callback ){
// //         return callback(numero1)
// // }
// // console.log(aplicar(2, dobro))
// // console.log(aplicar(4, triplo))

// function somar (numero1, numero2 ) { return numero1 + numero2 }
// function subtrair(numero1, numero2) { return numero1 -numero2}
// function multiplicar (numero1, numero2) { return numero1 * numero2}
// function dividir (numero1 , numero2 ){ return numero1 / numero2}

// function calculadora (numero1, numero2 , operacao) { return operacao(numero1,numero2)}
// console.log(calculadora(2,5,somar))
// console.log(calculadora(2,5,subtrair))
// console.log(calculadora(2,5,multiplicar))
// console.log(calculadora(10,5,dividir))

// function adicionarHttp(url) {
//     return // escreva seu código aqui
// }

// function processar(__,__){
//     // escreva seu código aqui
// // }
// function adicionarHttp(url) {
//     let conStr = url
//     console.log(String(conStr))
//     //    let string =   url.replace( "", "http://")
//     // return string 
//      }

//     function processar(parametro, funcao){
//        return adicionarHttp(parametro)
 
// }
// adicionarHttp('diego', 'carlos' )



function adicionarHttp(url) {
    
     return (url.replace("","http://"))
     
}

function processar(array,operacao){
  let array2 = []
  
   for ( let i = 0 ; i < array.legth;  i++)   {
        array2[i] = ( adicionarHttpo(array[i] ))
   } 
   console.log(array2)
      return array2
}
let  array = 'diego'

processar(array, adicionarHttp)
adicionarHttp(array)
