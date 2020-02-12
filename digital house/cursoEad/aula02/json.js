let carro = {
    marca:"fiat",
    ano:97,
    Modelo:"palio",
    combustivel:"gasolina",

}

let dadosConvertidosTextoJson = JSON.stringify(carro)
 console.log(dadosConvertidosTextoJson)
let  convertidosTiposDadosJson = dadosConvertidosTextoJson 
let resultado = JSON.parse(convertidosTiposDadosJson)

console.log(resultado)