<?php

// echo $_GET['nombre'];

// $nombre = $_GET['nombre'];
// $apellido = $_GET['apellido'];
// $sexo = $_GET['sexo'];
// $edad = $_GET['edad'];

// if(isset($_GET['pais')){
//     echo "Hola $nombre $apellido, tu sexo es $sexo y  tienes $edad años. <br>";
//     $pais = $_GET['pais'];
// };


// if(isset($_GET['palabra'])){
//     $palabra = $_GET['palabra'];
//     if(isset($_GET['tipo'])){
//         $tipo = $_GET['tipo'];
//     }

//     if($tipo == 0){
//         $palabra = strtolower($palabra);
//         echo "La palabra es $palabra";
//     }else{
//         $palabra = strtoupper($palabra);
//         echo"La palabra es: $palabra";
//     }
// }

include_once('Humano.php');

$persona = new Humano();
$persona->nombre = "Emmanuel";
$persona->apellido = "Santoyo";
$persona->altura = "1.70";
$persona->peso = "88";
// var_dump($persona);

// $persona->saludar();

// Humano::caminar();

?>