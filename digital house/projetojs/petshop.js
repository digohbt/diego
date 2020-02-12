let json = `[{"nome":"Bob","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"xuxu","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"Xorão","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]}]`
 let JsonString1 = []
 let resultado = [] = JSON.parse(json)
 console.log(resultado)

// JsonString1  = JSON.parse(json)
// function jsonString(a) {
//     for(let i = 0; i<a.length ; i++ ){
//         resultado[i] = String((jsonString1[i])
//     }
// }

// resultado=jsonString(jsonString1)
// console.log("resultado",resultado)




const NOME_SISTEMA = "******* PETSHOP do Vinão  *******"

console.log(NOME_SISTEMA)
let listaPets = [{
        nome: "Bob",
        idade: 5,
        raca: "Cachorro",
        dono: "Vinicius",
        sexo: "Macho",
        peso: 3.5,
        vacinado: true,
        servicos: ["Banho", "Vacina"]
    },

    {
        nome: "Bob",
        idade: 5,
        raca: "Cachorro",
        dono: "Vinicius",
        sexo: "Macho",
        peso: 3.5,
        vacinado: true,
        servicos: ["Banho", "Vacina"]
    }

]

const  cadastrarPet = (nome, idade, raca, dono, sexo, peso, vacinado, servicos) => {
    let pet = {
        nome,
        idade,
        raca,
        dono,
        sexo,
        peso,
        vacinado,
        servicos,
    }


    listaPets.push(pet)
    console.log("O Pet: " + nome + " foi adicionado com sucesso!");
}

// cadastrarPet(JsonString)



const  visualizarPets = () => {

    for (let i = 0; i < listaPets.length; i++) {
        console.log("------------------");
        console.log("Nome do pet:", listaPets[i].nome);
        console.log("Raça do pet:", listaPets[i].raca);
        console.log("Dono do pet:", listaPets[i].dono);
        // console.log(listaPets[i].vacinado?"O pet já está vacinado!":"O pet precisa de vacina!");

        const  darVacina =(pet)=> {
          if (pet.vacinado) {
              console.log("Esse pet não precisa de vacina");
          } else {
              pet.vacinado = true;
              console.log("Pet vacinado com sucesso!")
          }
      }
        
        darVacina(listaPets[i])

    }


}

visualizarPets();
JsonString1 = [...listaPets, ...resultado]
console.log(JsonString1)

visualizarPets();
console.log("-----------------------------------------");



