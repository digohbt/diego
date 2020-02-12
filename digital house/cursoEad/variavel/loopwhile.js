// let contador = 0;
// // while (contador <  10  ){
// //     console.log("estou dentro de um loop")
// //     contador ++ 
// // }



// contador= 0;
// do {
//     console.log("estou dentro de um loop")
//     contador ++ 
// }while (contador <  10  )


// // function count(inicio, fim) {
// //     //Escreva seu código aqui
// //     while ( inicio < fim ){
// //         console.log("O número atual é" + inicio +"e é menor que"+fim )
// //         inicio ++
// //     }
// // }
// // count(4 ,8)


// let array = [1, 2, 3, 4, 4, 4,  5]
// function encontar (numero){
// contador = 0;
    
// do {
//         if( array[contador] != 5 ) {
//             console.log(array[contador]);
//         }else {
//             console.log("Encontramos um 5");

//         }
//         contador ++


// } while (array[contador] != 5); 

// }

// encontar(array)



function tabelaDeMultiplicacao(numero) {
    //Escreva seu código aqui
let contador = 1 
    while(contador <= 10 ){
       console.log(numero +" * "+contador +" = "+ numero*contador   )
       contador++
    }
}
tabelaDeMultiplicacao(5)