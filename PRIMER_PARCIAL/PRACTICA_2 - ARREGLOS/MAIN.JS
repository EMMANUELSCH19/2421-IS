var elemento1 = [1,2,3,4,5,6,78,9,70];
var elemento2 = [];

console.log(elemento1);
console.log(elemento2);

console.log("-------------------------------");
for (var i = 0; i < elemento1.length; i++){
    elemento2.push(elemento1[i]);
}

console.log("Arreglo 1");
console.log(elemento1);
console.log("Arreglo 2");
console.log(elemento2);


var elemento1 = [1,2,3,4,5,6,78,9,70];
var elemento2 = [10,5,4,8,7,8,10,2,1];

console.log(elemento1);
console.log(elemento2);

console.log("-------------------------------");
for (var i = 0; i < elemento1.length; i++) {
  for(var j = 0; j < elemento2.length; j++){
      if(elemento1[i] == elemento2[j]){
          console.log("Numeros repetidos en la posicion: [" + i + "," + j + "]" + " {" + elemento1[i] + "," + elemento2[j] + "}");
      }
  }
}

var palabra = "Hola Mundo";
var contenedor = [];

console.log("-------------------------------");
for(var i = 0; i< palabra.length;i++){
    contenedor.push(palabra[i]);
}

console.log(palabra);
console.log(contenedor);