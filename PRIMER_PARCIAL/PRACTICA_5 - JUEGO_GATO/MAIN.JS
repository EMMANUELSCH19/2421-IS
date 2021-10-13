function terminar (){
    
    let ganadorO = "Gano el jugador con el simbolo: O, Recarga para volver a jugar";
    let ganadorX = "Gano el jugador con el simbolo: X, Recarga para volver a jugar";
    let O = "O";
    let X = "X";
    
    let cas1 = document.getElementById("c1").value;
    let cas2 = document.getElementById("c2").value;
    let cas3 = document.getElementById("c3").value;
    let cas4 = document.getElementById("c4").value;
    let cas5 = document.getElementById("c5").value;
    let cas6 = document.getElementById("c6").value;
    let cas7 = document.getElementById("c7").value;
    let cas8 = document.getElementById("c8").value;
    let cas9 = document.getElementById("c9").value;
    
    if(cas1==O && cas4==O && cas7==O){
        alert(ganadorO);
    }else{
        if(cas2==O && cas5==O && cas8==O){
            alert(ganadorO);
        }else{
            if(cas3==O && cas6==O && cas9==O){
                alert(ganadorO);
            }else{
                if(cas1==O && cas2==O && cas3==O){
                    alert(ganadorO);
                }else{
                    if(cas4==O && cas5==O && cas6==O){
                        alert(ganadorO);
                    }else{
                        if(cas7==O && cas8==O && cas9==O){
                            alert(ganadorO);
                        }else{
                            if(cas3==O && cas5==O && cas7==O){
                                alert(ganadorO);
                            }else{
                                if(cas1==O && cas5==O && cas9==O){
                                    alert(ganadorO);
                                }else{
                                    if(cas1==X && cas4==X && cas7==X){
                                        alert(ganadorX);
                                    }else{
                                        if(cas2==X && cas5==X && cas8==X){
                                            alert(ganadorX);
                                        }else{
                                            if(cas3==X && cas6==X && cas9==X){
                                                alert(ganadorX);
                                            }else{
                                                if(cas1==X && cas2==X && cas3==X){
                                                    alert(ganadorX);
                                                }else{
                                                    if(cas4==X && cas5==X && cas6==X){
                                                        alert(ganadorX);
                                                    }else{
                                                        if(cas7==X && cas8==X && cas9==X){
                                                            alert(ganadorX);
                                                        }else{
                                                            if(cas3==X && cas5==X && cas7==X){
                                                                alert(ganadorX);
                                                            }else{
                                                                if(cas1==X && cas5==X && cas9==X){
                                                                    alert(ganadorX);
                                                                }else{
                                                                    alert("Gato! Racarga para volver a jugar");
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}

alert("UTILIZA [ O ] Y [ X ] PARA JUGAR");