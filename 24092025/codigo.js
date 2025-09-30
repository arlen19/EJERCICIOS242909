function concatenarCadena(){
    nombre=document.getElementById("cajaNombre").value;
    paterno=document.getElementById("cajaPaterno").value;
    materno=document.getElementById("cajaMaterno").value;
    nombreCompleto=nombre+" "+paterno+" "+materno;
    document.getElementById("cajaCompleto").value=nombreCompleto;
    document.getElementById("cajaPosicion").value=nombreCompleto.charAt(5);
    document.getElementById("cajaLong").value=nombreCompleto.length;
    document.getElementById("cajaMax").value=nombreCompleto.toUpperCase();
    document.getElementById("cajaMin").value=nombreCompleto.toLowerCase();
}
