// const fetchPokemon = () => {    // Funcion que hace la peticion a la API
//     const pokeNameInput = document.getElementById("pokeName");  //Obtenemos el input del nombre del pokemon
//     let pokeName = pokeNameInput.value; //Asignamos el valor del input a la variable pokeName
//     pokeName = pokeName.toLowerCase();  //Convertimos el nombre del pokemon a minusculas
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;    /*Creamos la url de la API con el 
//                                                                         nombre del pokemon */
    
//     fetch(url).then((res) => {
//         /* Ve y busca la url, cuando la encuentre, ejecuta la funcion que esta dentro de then, ese
//             then (Promesa) es basicamente un callback, es decir, una funcion que se ejecuta cuando 
//             otra funcion termina de ejecutarse */
//         if (res.status != "200") {  /*Si el status de la respuesta no es 200, es decir, 
//                                         si no se encontro el pokemon */
//             console.log(res);
//             pokeImage("Pokemon_Sad.gif")
//         }
//         else {
//             return res.json();  //Si se encontro el pokemon, regresa la respuesta en formato json
//         }
//     }).then((data) => {
//         if (data) {
//             console.log(data);
//             let pokeImg = data.sprites.front_default;
//             pokeImage(pokeImg);
//             console.log(pokeImg);
//         }
//     });
// }

/* Ya que esos thens son basicamente promesas y se van a tardar en buscar la info, entonces vamos a
    hacer que la funcion fetchPokemon sea asincrona, para que no se bloquee el codigo y se pueda
    seguir ejecutandose mientras se ejecuta la funcion fetchPokemon, y para ello hacemos lo sig: */

const fetchPokemon = async() => {    // Funcion que hace la peticion a la API
    const pokeNameInput = document.getElementById("pokeName");  //Obtenemos el input del nombre del pokemon
    let pokeName = pokeNameInput.value; //Asignamos el valor del input a la variable pokeName
    pokeName = pokeName.toLowerCase();  //Convertimos el nombre del pokemon a minusculas
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;    /*Creamos la url de la API con el 
                                                                        nombre del pokemon */
        
    let data = await fetch(url).then((res) => { //Await nos regresa respuesta y es: then(data)
        /* Ve y busca la url, cuando la encuentre, ejecuta la funcion que esta dentro de then, ese
            then (Promesa) es basicamente un callback, es decir, una funcion que se ejecuta cuando 
            otra funcion termina de ejecutarse */

        if (res.status != "200") {  /*Si el status de la respuesta no es 200, es decir, 
                                        si no se encontro el pokemon */
            console.log(res);
            pokeImage("Pokemon_Sad.gif")
        }
        else {
            return res.json();  //Si se encontro el pokemon, regresa la respuesta en formato json
        }

    // Quitamos then(data) porque ya no lo necesitamos
    })

    if (data) {
        console.log(data);  //Imprimimos la data en consola
        let pokeImg = data.sprites.front_default;   //Obtenemos la url de la imagen del pokemon
        let pokeInfo = data.abilities;  //Obtenemos la info de las habilidades del pokemon
        pokeImage(pokeImg); //Llamamos a la funcion pokeImage y le pasamos la url de la imagen
        pokeData(pokeInfo); //Llamamos a la funcion pokeInfo y le pasamos la info de las habilidades
        console.log(pokeImg);   //Imprimimos la url de la imagen en consola
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");   //Obtenemos el elemento img
    pokePhoto.src = url;    //Le asignamos la url de la imagen
}

//Agregamos esto para la info de la pokedex
const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");

    const abilitiesName = abilities.map((item) => item.ability.name);
    //.map() nos regresa un arreglo con los nombres de las habilidades

    // console.log("abilities full", abilities);
    // console.log("abilities name", abilitiesName);

    pokeAbilities.innerHTML = abilitiesName.join(", "); 
    //Le asignamos el arreglo de habilidades al elemento
}