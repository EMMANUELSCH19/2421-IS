<!DOCTYPE html> 
<html lang="es-MX"> 
<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>primer formulario con php</title> 
</head> 
<body> 
    <center> 
    <form action="prueba.php" method="get"> 
        <label for="nombre">Ingresa palabra:</label> 
        <input type="text" name="nombre" id="nombre"> 
        <br> 
        <br>
        <!-- <label for="apellido">Apellido:</label> 
        <input type="text" name="apellido" id="apellido"> 
        <br> 
        <br> -->
        <!-- <label for="edad">Edad:</label> 
        <input type="number" name="edad" id="edad"> 
        <br> 
        <br> -->
        <label for="sexo">Tipo:</label> 
        <select name="tipo" id="sexo"> 
            <option value="hombre">Mayusculas</option> 
            <option value="mujer">Minusculas</option> 
        </select> 
        <br> 
        <br>
        <!-- <label for="pais">Pais:</label> 
        <select name="pais" id="pais"> 
            <option value="argentina">Argentina</option> 
            <option value="brasil">Brasil</option> 
            <option value="chile">Chile</option> 
            <option value="colombia">Colombia</option> 
            <option value="peru">Peru</option> 
            <option value="mexico">Mexico</option> 
        </select>  -->
        <input type="submit" value="Enviar"> 
    </form> 
    </center> 
</body> 
</html>