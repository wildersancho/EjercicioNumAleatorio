function asignarRandom() {
    let max = 100;
    let min = 1;
    let numeroRandom = Math.floor(Math.random() * (max - min)) + min;
    console.log(numeroRandom);
    document.getElementById("numeroAleatorio").value = numeroRandom;
    document.getElementById("cantIntentos").value = document.getElementById("cantidadIntentos").value;

}

function numeroRandom1() {
    let numeroRandom = parseInt(document.getElementById("numeroAleatorio").value);
    //numeroRespuestas = parseInt(document.getElementById("numeroRespuestas").value);
    cantIntentos = parseInt(document.getElementById("cantIntentos").value);
    let respuesta = "";
    let intentosAcumulados = "";
    let numero = parseInt(document.getElementById("numero").value)


    if (cantIntentos > 0) {
        if (numero == numeroRandom) {
            respuesta = "Correcto";
            console.log(respuesta);
        } else {
            respuesta = "Incorrecta";
            console.log(respuesta);
            cantIntentos = cantIntentos - 1;
            document.getElementById("cantIntentos").value = cantIntentos;
        }
    } else {
        respuesta = "No tiene más intentos";
        console.log(respuesta);
    }

    document.getElementById("txtResultado").value = respuesta;
}