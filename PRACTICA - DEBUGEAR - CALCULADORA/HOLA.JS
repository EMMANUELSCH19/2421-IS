var num1 = 10;
var num2 = 10;
var operacion = prompt("¿QUE OPERACION DESEAS REALIZAR?");

switch(operacion){
    case "suma":
        alert(suma(num1,num2));
        break;
        
    case "resta":
        alert(resta(num1,num2));
        break;
        
    case "multiplicacion":
        alert(multiplicacion(num1,num2));
        break;
        
    case  "division":
        alert(division(num1,num2));
    break;
        
    default:
        console.log("Error en la operacion");
        break;
}

function suma(numero1, numero2){
    var numero1 = numero1;
    var numero1 = numero2;
    var suma = numero1 + numero2;
    return numero1 + " + " + numero2 + " = " + suma;
}

function resta(numero1, numero2){
    var numero1 = numero1;
    var numero1 = numero2;
    var resta = numero1 - numero2;
    return numero1 + " - " + numero2 + " = " + resta;
}

function multiplicacion(numero1, numero2){
    var numero1 = numero1;
    var numero1 = numero2;
    var multiplicacion = numero1 * numero2;
    return numero1 + " * " + numero2 + " = " + multiplicacion;
}

function division(numero1, numero2){
    var numero1 = numero1;
    var numero1 = numero2;
    var division = numero1 / numero2;
    return numero1 + " / " + numero2 + " = " + division;
}


