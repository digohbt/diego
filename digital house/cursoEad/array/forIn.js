const carro = {
    nome: 'FIAT ',
    modelo: '222',
}

 for( let prop in carro )[
     console.log (carro[prop])
 ]

 let series = [ "frends ",'dr house ', 'breask']

 for( let valor of series) {
     console.log(valor)
 }

 let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja" }

for( let prop in bart  ){

 bart[prop] = "" 
 console.log(prop)
}



// console.log(bart.mae, bart.pai, bart.bobbie, bart.corCamiseta)


let frase = "Essa semana vou no colearning";
for( let i of frase ){
    console.log(i)
}