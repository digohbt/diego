let pessoa = {
    nome:"diego",
    altura: 1.9 
}


const {nome, altura} =  pessoa 
console.log (nome,altura)

let lista = [ "pao ", 'leite', 'acucar']
const [lis1,list2,list3 ] = lista 
console.log(lis1,list2,list3)

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
'
let [,  Bariloche , , China  ,] = destinosIncriveis'
console.log(Bariloche,China)