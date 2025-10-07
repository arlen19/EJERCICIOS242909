function evaluar(){
    nombre=document.getElementById("cajaNombre").value;
    genero=document.getElementById("cajaGenero").value;
    edad=parseInt(document.getElementById("cajaEdad").value);

    if(genero=="masculino"){
       alert("El formulario de la persona "+nombre+" es de genero masculino");
        }
    else{
        alert("La edad de la persona con genero femenino es "+edad);
    }
    if(edad<11){
        leyenda="es un niño";
    }    
    else{
        leyenda="es un adolescente, adulta o adulto mayor";
        }
    document.getElementById("area").value="Persona:"+nombre+"Genero:"+genero+"Edad:"+edad+"Etapa de vida:"+leyenda;

    }        

var btnEvaluar=document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluar);

function evaluar(){
    alumno=document.getElementById("cajaAlu").value;
    calificacion=document.getElementById("cajaCali").value;

    if(calificacion>="7"){
       alert("El alumno "+alumno+" aprobado"+calificacion);
        }
    else{
        alert("El alumno "+alumno+"reprobado "+calificacion);
    }
    
    document.getElementById("area1").value="ALUMNO:"+alumno+"CALIFICACIÓN:"+calificacion;

    }        

var btnCali=document.getElementById("btnCali");
btnCali.addEventListener("click", evaluar);