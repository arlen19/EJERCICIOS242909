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