

function calcular(){
    
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    var opera = document.getElementById("operacion").value;
    
    if(opera==1){
        
        document.getElementById("resultado").value = num1 + num2;
        
    }else{
        document.getElementById("resultado").value = num1 - num2;
        
    }
    
}

function calcular2(){
    
    let edad = parseInt(document.getElementById("edad").value);
    let sentencia = "";
    
    if(edad >= 1 && edad <=5){
        
        document.getElementById("resultado2").value = "Es un bebe";
        
    }else if(edad >=6 && edad <=12){
        
        document.getElementById("resultado2").value = "Es un niño";
    
    }else if(edad >=13 && edad <=17){
        
        document.getElementById("resultado2").value = "Es un adolescente";
    
    }else if(edad >=18 && edad <=30){
        
        document.getElementById("resultado2").value = "Es un adulto joven";
        
    }else if(edad >=31 && edad <=50){
        
        document.getElementById("resultado2").value = "Es un adulto medio";
        
    }else if(edad >=51 && edad <=100){
        
        document.getElementById("resultado2").value = "Es un adulto mayor";
        
    }else if(edad >=101){
        
        document.getElementById("resultado2").value = "Su personaje es chabelo";
        
    }else{
        
        document.getElementById("resultado2").value = "Es un feto";
        
    }
    
}
