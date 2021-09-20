var turno = "O";
var turnos = 0;

function cambioTurno(id) {
    document.getElementById(id).innerHTML = turno; 
    document.getElementById(id).disabled = true;
    if(turnos > 3){
        comprobar(id, turno);
        turno = (turno == "O") ? "X" : "O";
        document.getElementById('turno').innerHTML = "Turno: " + turno;
        turnos++;
    }
}