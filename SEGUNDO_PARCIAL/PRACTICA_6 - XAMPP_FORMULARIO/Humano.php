<?php

class Humano{
    public $nombre;
    public $sexo;
    public $altura;
    public $peso;

    public function saludar () {
        echo "Hola $this->nombre";
    }

    static function caminar() {
        echo"Llamada desde metodo estatico";
    }

    private function dormir() {
        echo "Humano dormido";
    }
}


?>