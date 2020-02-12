// // let ouve = "oi "

// // for (let i = 0 ; 4 >= i  ;  i++  ) {
// //     console.log(ouve);

// // }

// function papagaio (ouve){

// for (let i = 0 ; 4  >=  i  ;  i++  ) {
//     console.log(ouve);

// }
// }
// papagaio("oi")


// function naoPareDeContarImparesAte(numero){
//     // Escreva aqui o seu código
//     let par = 0;
//     let impar = 0;

//     for (let i = 1 ; numero >= i ; i++ ){

//         if( i % 2 == 0 ){
//             par = par +1 
//         } else {
//             impar = impar +1
//         }

        
//     }
//     console.log(impar)
//     return impar 
// }

// naoPareDeContarImparesAte(5)




// function naoPareDeContarImparesAte(numero){
//     // Escreva aqui o seu código
//     let cont = 0;
//     let impar = []; 

//     for (let i = 0 ; numero >= i ; i++ ){

//              if( i %2 != 0  ){
                 
//                  impar [cont ] = i
//                  cont ++
//              } 

        
//     }
//     console.log(impar)
//     return impar 


// }

// naoPareDeContarImparesAte(5)

function tabelaDeMultiplicacao(numero) {
    //Escreva seu código aqui
let contador = 1 
    while(contador <= 10 ){
       console.log(numero +" * "+contador +"="+ numero*contador   )
       contador++
    }
}
tabelaDeMultiplicacao(5)