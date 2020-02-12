// // adicionar array 
// const array = [ 'amarelo', 'azul','lilas','marrom','verde']

// array.push('azul','roxo')
// console.log(array)
// let resposta = array.pop()
// resposta = array.shift()
// console.log(typeof resposta)
// array.unshift('lilas','marrom')
// console.log(array)
// let pessoa = ['Diego', 'Diego','Diego']
// // p
// pessoa.push(34)
// console.log(pessoa)
// // pop retira 
// let retirado = pessoa.pop()
// // unshift coloca informacao começo array 
// pessoa.unshift(22)
// console.log(pessoa)
// // shift retira primeiro indeice do array 
// retirado = pessoa.shift()
// console.log(retirado)

// // indexO verifica se exixte o dado no array 
// resposta = pessoa.lastIndexOf('Diego') 
// console.log(resposta)
// //  join 
// console.log(pessoa.join('-'))

// console.log(pessoa.includes('diego'))
// console.log(pessoa.includes('Diego'))
// array.push('vinho', 'creme','baunilha','florecente',' merda')
// console.log(array)
// console.log(array.indexOf('merda','creme'))
// console.log(array.indexOf('azul'))
// console.log(array.indexOf('marrom'))

// let arrayFrase = [
//     "Não",
//     "fracassei,",
//     "simplesmente",
//     "encontrei",
//     "dez",
//     "mil",
//     "soluções",
//     "equivocadas"
// ]

// let fraseNova = arrayFrase.join(" ")
// console.log(fraseNova)
// let estudantes2 = [
//     {
//       nome: 'Álvaro',
//       media : 9,
//       curso : 'Android',
//     },
//     {
//       nome: 'Daniel',
//       media : 6,
//       curso : 'Full Stack',
//     }
//   ]
//   estudantes2.push({nome: 'João',media: 5,curso: 'iOS'}, {
//     nome: 'Miguel' ,
//     media: 2 ,
//      curso: 'Android'

//   } )
//   console.log(estudantes2)


  let estudantes3 = [
    {
      nome: 'Alvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    },
    {
      nome: 'Alexis',
      media : 3,
      curso : 'iOS',
    }
  ]
  
  estudantes3.unshift( {
    nome: "Mariana", media: 9, curso: "Full Stack"
  } )
  
  estudantes3.unshift( {
    nome: "Francisco",media: 2, curso: "Android"
  })

  console.log(estudantes3)