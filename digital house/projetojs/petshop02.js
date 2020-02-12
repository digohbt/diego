let nomepetshop = "-----PetShop--PetVida"
let pet
let listaPet = [
    {
         nome:"bob" ,
         idade:5,
         dono: "diego ",
         sexo:"macho",
         peso:3.5,
         vacinado:true, 
         servicos : ["banho ", "vacina"] ,
            
        },
      
        {
         nome:"bob" ,
         idade:5,
         dono: "diego ",
         sexo:"macho",
         peso:3.5,
         vacinado:true, 
         servicos : ["banho ", "vacina"] 
            
        },]

        function cadastrarPet(nome,idade,dono,sexo,peso,vacinado,servicos ){
             pet = {
                nome:nome,
                idade:idade,
                dono:dono,
                sexo:sexo,
                peso:peso,
                vacinado:vacinado,
                servicos:servicos
            }
             listaPet.push(pet)
             console.log("O Pet: " + pet.nome + " foi adicionado com sucesso!");

        }
        
            function vacinarPet(pet){
       
            if(pet.vacinado == false ){
                pet.vacinado = true 
                console.log("---pet vacinado")
            }
        }


        cadastrarPet('belinha',2,'diego','femia',9,false,['banho','tosa']) 
        vacinarPet(pet)
        listaPet.push(pet) 



        
        function visualizarPet ( listaPet){
            
            console.log(nomepetshop)
            for(let i =0 ; i< listaPet.length; i++){
                console.log('---------------------')
                console.log('---------------------')
                console.log(listaPet[i])
            }

        }
        
visualizarPet(listaPet)


