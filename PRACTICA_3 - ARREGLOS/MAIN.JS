var elementos = [];
var colores = ["red", "green", "blue", "yellow"];

var animales = {
    perro: "Firulais",
    gato: "Micho",
    raton: "rata"
};

console.log(animales["gato"]);

var humano ={
    "informacion": {
        "nombre": "Emmanuel Santoyo",
        "edad": 19,
        "Carrera":"Ing Software",
        "Estado Civil": "Soltero"
    },
    "musica":{
        "generos":{
            "Banda":{
                "canciones":{
                    "Uno": "Pideme",
                    "Dos": "Tú",
                    "Tres": "Y tú",
                    "Cuatro": "Botella tras botella",
                    "Artista":{
                        "Uno": "Grupo firme",
                        "Dos": "Carin León",
                        "Tres": "Carolina Ross",
                        "Cuatro":"Cristian Nodal y la Arrolladora"
                    }
                }
            },
            "Random":{
                "canciones":{
                    "uno":"Bichota",
                    "dos": "Children",
                    "tres": "Que hay de malo",
                    "cuatro": "Un monton de estrellas",
                    "Artista":{
                        "Uno": "Becky G",
                        "Dos": "Robert Miles",
                        "Tres": "Farruko",
                        "Cuatro":"Polo Montañez"
                    }
                }
            }
        }
    },
    "Cosas que odio":{
        "uno": "Las artes",
        "como:":{
            "uno": "dibuja",
            "dos": "pintar",
            "tres": "Teatro",
            "cuatro": "cualquier cosa de diseño"
        },
        "dos": "Leer",
        "tres": "Comida",
        "como:":{
            "uno": "Atun",
            "dos": "Setas o champiñones",
            "tres": "consome",
            "cuatro":"pescado"
        }
    },
    "Mascotas":{
        "uno": "Perros",
        "nombres":{
            "uno": "Timmy",
            "dos": "puppy"
        },
        "dos": "peces"
    }

};

console.log(humano);

function saludar(){
    //let texto = document.getElementById("oki").value;
    let pass = document.getElementById("jaja").value;
    console.log(pass);
    alert(pass);
}


function saludarConClase(){
    let elemento = document.getElementById("jojo").value;
    alert(elemento);
}