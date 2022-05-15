(function($){
    $(document).ready(function(){
        var input1 = document.getElementById("list1")
        input1.addEventListener("change", function() {
            pegaNome(input1, 1)
        }, false)

        var input2 = document.getElementById("list2")
        input2.addEventListener("change", function() {
            pegaNome(input2, 2)
        }, false)

        var input3 = document.getElementById("list3")
        input3.addEventListener("change", function() {
            pegaNome(input3, 3)
        }, false)

        var input4 = document.getElementById("list4")
        input4.addEventListener("change", function() {
            pegaNome(input4, 4)
        }, false)

        var input5 = document.getElementById("list5")
        input5.addEventListener("change", function() {
            pegaNome(input5, 5)
        }, false)

        var input6 = document.getElementById("list6")
        input6.addEventListener("change", function() {
            pegaNome(input6, 6)
        }, false)
    
        function pegaNome(input, coluna)
        {

            let pokemon = input.value
            if (pokemon == "")
                console.log("Nulo")
            else{
                $.ajax({
                type: "POST",
                url: "/",
                data: {"name": pokemon}
                })
                .done(function(data)
                {
                    let name = data['name']/*Provavelmente não vou usar, mas vou deixar aqui caso precise*/ 
                    let type1 = data['type1']
                    let type2 = data['type2']

                    let fraquezas = []
                    let resistencias = []
                    let imunidades = []
                    let tipos = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]



                    //Pega Fraquezas e Resistências de Pokémon com um único e printa na tabela
                    if (type2 == null)
                    {

                        switch(data['type1'])
                        {
                            case "Normal":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")

                                /*Adicionando imunidades*/
                                imunidades.push("Ghost")
                                break

                            case "Fighting":
                                //Adicionando fraquezas*
                                fraquezas.push("Fairy")
                                fraquezas.push("Flying")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dark")
                                resistencias.push("Rock")

                                //Adicionando imunidades

                                break

                            case "Flying":
                                //Adicionando fraquezas*
                                fraquezas.push("Electric")
                                fraquezas.push("Ice")
                                fraquezas.push("Rock")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Fighting")
                                resistencias.push("Grass")

                                //Adicionando imunidades
                                imunidades.push("Ground")

                                break

                            case "Poison":
                                //Adicionando fraquezas*
                                fraquezas.push("Ground")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Fighting") 
                                resistencias.push("Poison")
                                resistencias.push("Bug")
                                resistencias.push("Grass")
                                resistencias.push("Fairy")

                                //Adicionando imunidades

                                break

                            case "Ground":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ice")
                                 //Adicionando resistencias
                                 resistencias.push("Rock") 
                                 resistencias.push("Poison")
 
                                 //Adicionando imunidades
                                 imunidades.push("Electric")  

                                break

                            case "Rock":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ground")
                                 fraquezas.push("Steel")
                                 fraquezas.push("Fighting")

                                 //Adicionando resistencias
                                 resistencias.push("Fire") 
                                 resistencias.push("Flying")
                                 resistencias.push("Normal")
                                 resistencias.push("Poison")

                                 //Adicionando imunidades

                                break

                            case "Bug":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Fire")
                                 fraquezas.push("Flying")
                                 fraquezas.push("Rock")


                                 //Adicionando resistencias
                                 resistencias.push("Fighting") 
                                 resistencias.push("Grass")
                                 resistencias.push("Ground")
                               
                                break

                            case "Ghost":
                                //Adicionando fraquezas
                                fraquezas.push("Dark")
                                fraquezas.push("Ghost")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Poison")

                                //Adicionando imunidades
                                imunidades.push("Normal")
                                imunidades.push("Fighting")

                                break

                            case "Steel":
                                //Adicionando fraquezas
                                fraquezas.push("Fire")
                                fraquezas.push("Fighting")
                                fraquezas.push("Ground")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dragon")
                                resistencias.push("Fairy")
                                resistencias.push("Flying") 
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Normal") 
                                resistencias.push("Psychic")
                                resistencias.push("Rock")
                                resistencias.push("Steel")

                                //Adicionando imunidades
                                imunidades.push("Poison") 

                                break

                            case "Fire":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")
                                fraquezas.push("Rock")
                                fraquezas.push("Water")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Bug") 
                                resistencias.push("Fairy")
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Water":
                                //Adicionando fraquezas
                                fraquezas.push("Grass")
                                fraquezas.push("Electric")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Water") 
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Grass":
                                //Adicionando fraquezas
                                fraquezas.push("Ice")
                                fraquezas.push("Fire")
                                fraquezas.push("Flying")
                                fraquezas.push("Bug")
                                fraquezas.push("Poison")


                                //Adicionando resistencias
                                resistencias.push("Ground")
                                resistencias.push("Grass") 
                                resistencias.push("Electric")
                                resistencias.push("Water")

                                break

                            case "Electric":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")

                                //Adicionando resistencias")
                                resistencias.push("Flying") 
                                resistencias.push("Electric")
                                resistencias.push("Steel")

                                break

                            case "Psychic":
                                //Adicionando fraquezas
                                fraquezas.push("Ghost")
                                fraquezas.push("Bug")
                                fraquezas.push("Dark")

                                //Adicionando resistencias")
                                resistencias.push("Fighting") 
                                resistencias.push("Psychic")

                                break

                            case "Ice":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")
                                fraquezas.push("Fire")
                                fraquezas.push("Rock")
                                fraquezas.push("Steel")

                                //Adicionando resistencias")
                                resistencias.push("Ice") 

                                break

                            case "Dragon":
                                //Adicionando fraquezas
                                fraquezas.push("Dragon")
                                fraquezas.push("Ice")
                                fraquezas.push("Fairy")

                                //Adicionando resistencias")
                                resistencias.push("Electric")
                                resistencias.push("Water") 
                                resistencias.push("Fire") 
                                resistencias.push("Grass") 

                                break

                            case "Dark":
                                //Adicionando fraquezas
                                fraquezas.push("Fairy")
                                fraquezas.push("Fighting")
                                fraquezas.push("Bug")

                                //Adicionando resistencias")
                                resistencias.push("Ghost")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Psychic")                                
                                
                                break

                            case "Fairy":
                                //Adicionando fraquezas
                                fraquezas.push("Poison")
                                fraquezas.push("Steel")


                                //Adicionando resistencias")
                                resistencias.push("Fighting")
                                resistencias.push("Bug")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Dragon") 

                                break
                        }

                        
                        let filhosTabela = document.getElementById("tbody").children

                        //Reset ao trocar de pokemon
                        for (let contChild = 0; contChild < filhosTabela.length; contChild++)
                        {
    
                            let netosTabela = filhosTabela[contChild].children
                            if (netosTabela[coluna] != "")
                            {
                                netosTabela[coluna].innerHTML = ""
                            }
    
    
                        }


                        for (let contChild = 0; contChild < filhosTabela.length; contChild++)
                        {

                            let netosTabela = filhosTabela[contChild].children
                            if (fraquezas.toString().indexOf(tipos[contChild].toString()) != -1)
                                netosTabela[coluna].innerHTML = "2x"

                            else if (resistencias.toString().indexOf(tipos[contChild].toString()) != -1)
                                netosTabela[coluna].innerHTML = "1/2x"

                            else if (imunidades.toString().indexOf(tipos[contChild].toString()) != -1)
                                netosTabela[coluna].innerHTML = "Imune"

                            else
                                netosTabela[coluna].innerHTML = " "
                        }
                        

                    }
                    //Pega fraquezas e resistências de pokémon com dois tipos e printa na tabela
                    else
                    {
                        switch(data['type1'])
                        {
                            case "Normal":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")

                                /*Adicionando imunidades*/
                                imunidades.push("Ghost")
                                break

                            case "Fighting":
                                //Adicionando fraquezas*
                                fraquezas.push("Fairy")
                                fraquezas.push("Flying")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dark")
                                resistencias.push("Rock")

                                //Adicionando imunidades

                                break

                            case "Flying":
                                //Adicionando fraquezas*
                                fraquezas.push("Electric")
                                fraquezas.push("Ice")
                                fraquezas.push("Rock")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Fighting")
                                resistencias.push("Grass")

                                //Adicionando imunidades
                                imunidades.push("Ground")

                                break

                            case "Poison":
                                //Adicionando fraquezas*
                                fraquezas.push("Ground")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Fighting") 
                                resistencias.push("Poison")
                                resistencias.push("Bug")
                                resistencias.push("Grass")
                                resistencias.push("Fairy")

                                //Adicionando imunidades

                                break

                            case "Ground":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ice")
                                 //Adicionando resistencias
                                 resistencias.push("Rock") 
                                 resistencias.push("Poison")
 
                                 //Adicionando imunidades
                                 imunidades.push("Electric")   

                                break

                            case "Rock":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ground")
                                 fraquezas.push("Steel")
                                 fraquezas.push("Fighting")

                                 //Adicionando resistencias
                                 resistencias.push("Fire") 
                                 resistencias.push("Flying")
                                 resistencias.push("Normal")
                                 resistencias.push("Poison")

                                 //Adicionando imunidades

                                break

                            case "Bug":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Fire")
                                 fraquezas.push("Flying")
                                 fraquezas.push("Rock")


                                 //Adicionando resistencias
                                 resistencias.push("Fighting") 
                                 resistencias.push("Grass")
                                 resistencias.push("Ground")
                               
                                break

                            case "Ghost":
                                //Adicionando fraquezas
                                fraquezas.push("Dark")
                                fraquezas.push("Ghost")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Poison")

                                //Adicionando imunidades
                                imunidades.push("Normal")
                                imunidades.push("Fighting")

                                break

                            case "Steel":
                                //Adicionando fraquezas
                                fraquezas.push("Fire")
                                fraquezas.push("Fighting")
                                fraquezas.push("Ground")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dragon")
                                resistencias.push("Fairy")
                                resistencias.push("Flying") 
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Normal") 
                                resistencias.push("Psychic")
                                resistencias.push("Rock")
                                resistencias.push("Steel")

                                //Adicionando imunidades
                                imunidades.push("Poison") 

                                break

                            case "Fire":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")
                                fraquezas.push("Rock")
                                fraquezas.push("Water")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Bug") 
                                resistencias.push("Fairy")
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Water":
                                //Adicionando fraquezas
                                fraquezas.push("Grass")
                                fraquezas.push("Electric")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Water") 
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Grass":
                                //Adicionando fraquezas
                                fraquezas.push("Ice")
                                fraquezas.push("Fire")
                                fraquezas.push("Flying")
                                fraquezas.push("Bug")
                                fraquezas.push("Poison")


                                //Adicionando resistencias
                                resistencias.push("Ground")
                                resistencias.push("Grass") 
                                resistencias.push("Electric")
                                resistencias.push("Water")

                                break

                            case "Electric":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")

                                //Adicionando resistencias")
                                resistencias.push("Flying") 
                                resistencias.push("Electric")
                                resistencias.push("Steel")

                                break

                            case "Psychic":
                                //Adicionando fraquezas
                                fraquezas.push("Ghost")
                                fraquezas.push("Bug")
                                fraquezas.push("Dark")

                                //Adicionando resistencias")
                                resistencias.push("Fighting") 
                                resistencias.push("Psychic")

                                break

                            case "Ice":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")
                                fraquezas.push("Fire")
                                fraquezas.push("Rock")
                                fraquezas.push("Steel")

                                //Adicionando resistencias")
                                resistencias.push("Ice") 

                                break

                            case "Dragon":
                                //Adicionando fraquezas
                                fraquezas.push("Dragon")
                                fraquezas.push("Ice")
                                fraquezas.push("Fairy")

                                //Adicionando resistencias")
                                resistencias.push("Electric")
                                resistencias.push("Water") 
                                resistencias.push("Fire") 
                                resistencias.push("Grass") 

                                break

                            case "Dark":
                                //Adicionando fraquezas
                                fraquezas.push("Fairy")
                                fraquezas.push("Fighting")
                                fraquezas.push("Bug")

                                //Adicionando resistencias")
                                resistencias.push("Ghost")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Psychic")                                
                                
                                break

                            case "Fairy":
                                //Adicionando fraquezas
                                fraquezas.push("Poison")
                                fraquezas.push("Steel")


                                //Adicionando resistencias")
                                resistencias.push("Fighting")
                                resistencias.push("Bug")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Dragon") 

                                break
                        }

                        switch(data['type2'])
                        {
                            case "Normal":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")

                                /*Adicionando imunidades*/
                                imunidades.push("Ghost")
                                break

                            case "Fighting":
                                //Adicionando fraquezas*
                                fraquezas.push("Fairy")
                                fraquezas.push("Flying")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dark")
                                resistencias.push("Rock")

                                //Adicionando imunidades

                                break

                            case "Flying":
                                //Adicionando fraquezas*
                                fraquezas.push("Electric")
                                fraquezas.push("Ice")
                                fraquezas.push("Rock")

                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Fighting")
                                resistencias.push("Grass")

                                //Adicionando imunidades
                                imunidades.push("Ground")

                                break

                            case "Poison":
                                //Adicionando fraquezas*
                                fraquezas.push("Ground")
                                fraquezas.push("Psychic")

                                //Adicionando resistencias
                                resistencias.push("Fighting") 
                                resistencias.push("Poison")
                                resistencias.push("Bug")
                                resistencias.push("Grass")
                                resistencias.push("Fairy")

                                //Adicionando imunidades

                                break

                            case "Ground":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ice")
                                 //Adicionando resistencias
                                 resistencias.push("Rock") 
                                 resistencias.push("Poison")
 
                                 //Adicionando imunidades
                                 imunidades.push("Electric")  

                                break

                            case "Rock":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Grass")
                                 fraquezas.push("Water")
                                 fraquezas.push("Ground")
                                 fraquezas.push("Steel")
                                 fraquezas.push("Fighting")

                                 //Adicionando resistencias
                                 resistencias.push("Fire") 
                                 resistencias.push("Flying")
                                 resistencias.push("Normal")
                                 resistencias.push("Poison")

                                 //Adicionando imunidades

                                break

                            case "Bug":
                                 //Adicionando fraquezas*
                                 fraquezas.push("Fire")
                                 fraquezas.push("Flying")
                                 fraquezas.push("Rock")


                                 //Adicionando resistencias
                                 resistencias.push("Fighting") 
                                 resistencias.push("Grass")
                                 resistencias.push("Ground")
                               
                                break

                            case "Ghost":
                                //Adicionando fraquezas
                                fraquezas.push("Dark")
                                fraquezas.push("Ghost")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Poison")

                                //Adicionando imunidades
                                imunidades.push("Normal")
                                imunidades.push("Fighting")

                                break

                            case "Steel":
                                //Adicionando fraquezas
                                fraquezas.push("Fire")
                                fraquezas.push("Fighting")
                                fraquezas.push("Ground")


                                //Adicionando resistencias
                                resistencias.push("Bug") 
                                resistencias.push("Dragon")
                                resistencias.push("Fairy")
                                resistencias.push("Flying") 
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Normal") 
                                resistencias.push("Psychic")
                                resistencias.push("Rock")
                                resistencias.push("Steel")

                                //Adicionando imunidades
                                imunidades.push("Poison") 

                                break

                            case "Fire":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")
                                fraquezas.push("Rock")
                                fraquezas.push("Water")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Bug") 
                                resistencias.push("Fairy")
                                resistencias.push("Grass")
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Water":
                                //Adicionando fraquezas
                                fraquezas.push("Grass")
                                fraquezas.push("Electric")


                                //Adicionando resistencias
                                resistencias.push("Fire")
                                resistencias.push("Water") 
                                resistencias.push("Ice")
                                resistencias.push("Steel")

                                break

                            case "Grass":
                                //Adicionando fraquezas
                                fraquezas.push("Ice")
                                fraquezas.push("Fire")
                                fraquezas.push("Flying")
                                fraquezas.push("Bug")
                                fraquezas.push("Poison")


                                //Adicionando resistencias
                                resistencias.push("Ground")
                                resistencias.push("Grass") 
                                resistencias.push("Electric")
                                resistencias.push("Water")

                                break

                            case "Electric":
                                //Adicionando fraquezas
                                fraquezas.push("Ground")

                                //Adicionando resistencias")
                                resistencias.push("Flying") 
                                resistencias.push("Electric")
                                resistencias.push("Steel")

                                break

                            case "Psychic":
                                //Adicionando fraquezas
                                fraquezas.push("Ghost")
                                fraquezas.push("Bug")
                                fraquezas.push("Dark")

                                //Adicionando resistencias")
                                resistencias.push("Fighting") 
                                resistencias.push("Psychic")

                                break

                            case "Ice":
                                //Adicionando fraquezas
                                fraquezas.push("Fighting")
                                fraquezas.push("Fire")
                                fraquezas.push("Rock")
                                fraquezas.push("Steel")

                                //Adicionando resistencias")
                                resistencias.push("Ice") 

                                break

                            case "Dragon":
                                //Adicionando fraquezas
                                fraquezas.push("Dragon")
                                fraquezas.push("Ice")
                                fraquezas.push("Fairy")

                                //Adicionando resistencias")
                                resistencias.push("Electric")
                                resistencias.push("Water") 
                                resistencias.push("Fire") 
                                resistencias.push("Grass") 

                                break

                            case "Dark":
                                //Adicionando fraquezas
                                fraquezas.push("Fairy")
                                fraquezas.push("Fighting")
                                fraquezas.push("Bug")

                                //Adicionando resistencias")
                                resistencias.push("Ghost")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Psychic")                                
                                
                                break

                            case "Fairy":
                                //Adicionando fraquezas
                                fraquezas.push("Poison")
                                fraquezas.push("Steel")


                                //Adicionando resistencias")
                                resistencias.push("Fighting")
                                resistencias.push("Bug")
                                resistencias.push("Dark")

                                //Adicionando imunidades
                                imunidades.push("Dragon") 

                                break                            
                        }


                        let filhosTabela = document.getElementById("tbody").children

                        //Reset ao trocar de pokemon
                        for (let contChild = 0; contChild < filhosTabela.length; contChild++)
                        {
    
                            let netosTabela = filhosTabela[contChild].children
                            if (netosTabela[coluna] != "")
                            {
                                netosTabela[coluna].innerHTML = ""
                            }
    
    
                        }


                        for (let contChild = 0; contChild < filhosTabela.length; contChild++)
                        {

                            let netosTabela = filhosTabela[contChild].children

                            if (fraquezas.toString().indexOf(tipos[contChild].toString()) != -1 && fraquezas.toString().indexOf(tipos[contChild].toString(), fraquezas.toString().indexOf(tipos[contChild].toString())+1) != -1)
                                netosTabela[coluna].innerHTML = "4x"

                            else if (resistencias.toString().indexOf(tipos[contChild].toString()) != -1 && resistencias.toString().indexOf(tipos[contChild].toString(), resistencias.toString().indexOf(tipos[contChild].toString())+1) != -1)
                                netosTabela[coluna].innerHTML = "1/4x"

                            
                            else if (imunidades.toString().indexOf(tipos[contChild].toString()) != -1 || imunidades.toString().indexOf(tipos[contChild].toString(), imunidades.toString().indexOf(tipos[contChild].toString())+1) != -1)
                                netosTabela[coluna].innerHTML = "Imune"

                            else if (fraquezas.toString().indexOf(tipos[contChild].toString()) != -1 && resistencias.toString().indexOf(tipos[contChild].toString()) != -1)
                                netosTabela[coluna].innerHTML = " "

                            else if ((fraquezas.toString().indexOf(tipos[contChild].toString()) != -1 && fraquezas.toString().indexOf(tipos[contChild].toString(), fraquezas.toString().indexOf(tipos[contChild].toString())+1) == -1) || (fraquezas.toString().indexOf(tipos[contChild].toString()) == -1 && fraquezas.toString().indexOf(tipos[contChild].toString(), fraquezas.toString().indexOf(tipos[contChild].toString())+1) != -1))
                                netosTabela[coluna].innerHTML = "2x"

                            else if ((resistencias.toString().indexOf(tipos[contChild].toString()) != -1 && resistencias.toString().indexOf(tipos[contChild].toString(), resistencias.toString().indexOf(tipos[contChild].toString())+1) == -1) || (resistencias.toString().indexOf(tipos[contChild].toString()) == -1 && resistencias.toString().indexOf(tipos[contChild].toString(), resistencias.toString().indexOf(tipos[contChild].toString())+1) != -1))
                                netosTabela[coluna].innerHTML = "1/2x"

                            else
                            netosTabela[coluna].innerHTML = " "
                        }
                        
                    }

                    //Coloca o nome do pokemon escolhido no thread correspondente ao input usado
                    let filhosTabelaHead = document.getElementById("thead").children
                    let netosTabelaHead = filhosTabelaHead[0].children
                    netosTabelaHead[coluna].innerHTML = data['name']


                    let filhosTabela = document.getElementById("tbody").children
                    
                    for (contChild = 0; contChild < filhosTabela.length; contChild++)
                    {
                        let netosTabela = filhosTabela[contChild].children
                        let fraquezasTotal = ""
                        let resistenciasTotal = ""

                        for (contNeto = 1; contNeto < netosTabela.length - 2; contNeto++)
                        {
                            if (netosTabela[contNeto].innerHTML == "1/2x" || netosTabela[contNeto].innerHTML == "1/4x" || netosTabela[contNeto].innerHTML == "Imune")
                                fraquezasTotal++

                            else if (netosTabela[contNeto].innerHTML == "2x" || netosTabela[contNeto].innerHTML == "4x")
                                resistenciasTotal++
                        }
                        netosTabela[8].innerHTML = fraquezasTotal
                        netosTabela[7].innerHTML = resistenciasTotal
                    }

                })
            }
        }
    });
})(jQuery);

