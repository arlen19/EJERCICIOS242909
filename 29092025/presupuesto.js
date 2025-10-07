function mostrarPresupuesto(){
    ppto=parseInt(document.getElementById("cajaPpto").value, 10);
    noMeses=parseInt(document.getElementById("cajaNoMeses").value, 10);

    text="";

    for(i=1; i<noMeses+1 ;i++){
        text=text+"Mes "+i+" Presuspuesto: "+ppto/noMeses+" Presuspuesto Acumulado "+(ppto/noMeses)*i+"\n";
    }

    document.getElementById("area").value=text;
}
btnDistribuirPpto=document.getElementById("distribuir");
btnDistribuirPpto.addEventListener("click", mostrarPresupuesto);

function mostrarMulti(){
  multi=parseInt(document.getElementById("cajaMulti").value, 10);

    text="";

    for (i = 1; i <= 10; i++) {
            text=text+multi+" "+"x"+" "+i+" "+"="+" "+(multi*i)+"\n";
    }
    document.getElementById("area1").value=text;
}
btnMul=document.getElementById("multiplicar");
btnMul.addEventListener("click", mostrarMulti);