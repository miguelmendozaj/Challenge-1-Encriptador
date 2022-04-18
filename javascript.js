/*El encriptador tiene como base para funcionar los siguientes condiciones:
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

/* creamos la funcion para encriptar*/
function encriptar(cadena){
    // Declaramos la variable y modificamos para que el texto sea convertido a minúsculas
    var cadena_encriptada = document.getElementById("ingresarTexto").value.toLowerCase();
    // Declaramos una nueva variable para que el texto sea codificado/encripatdo
    var cadena_encriptada_final = cadena_encriptada.replace(/e/igm, "enter");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/i/igm, "imes");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/a/igm, "ai");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/o/igm, "ober");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/u/igm, "ufat");

    // Ocultar imagen del muñeco y el texto
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = cadena_encriptada_final;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


// creamos la funcion para desencriptar
function desencriptar(cadena){
    // Declaramos la variable y modificamos para que el texto sea convertido a minúsculas
    var cadena_encriptada = document.getElementById("ingresarTexto").value.toLowerCase();
    // Declaramos una nueva variable para que el texto sea decodificado/desencripatdo
    var cadena_encriptada_final = cadena_encriptada.replace(/enter/igm, "e");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/imes/igm, "i");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/ai/igm, "a");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/ober/igm, "o");
    var cadena_encriptada_final = cadena_encriptada_final.replace(/ufat/igm, "u");

    // Ocultar imagen del muñeco y el texto
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = cadena_encriptada_final;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


// Creamos función para el botón copiar
function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado con éxito");
}

