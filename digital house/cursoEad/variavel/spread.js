let frutas = ["laranja ","goiaba", "banana"]
let frutas2 = ["laranja ","goiaba",...frutas, "banana"]

let listadefrutas  =[ ...frutas, ...frutas2]
// console.log(listadefrutas)

let auto = {
    marca:"fiat ",
    ano:97,
    modelo:"palio ",
}

let auto2 ={
    ...frutas,
    ...auto,
    motor:1.6,
    potencia:200,
}

let autos ={
    ...auto2,
    cacina:"sim",
}
console.log(autos)




