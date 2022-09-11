const ingresaMensaje = document.querySelector(".input-texto");
const mensajeEncriptado = document.querySelector(".mensaje");

//La siguiente funcion va a recibir el texto que el usuario escriba en la caja-1, en donde ese texto luego será encriptado



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonencriptar() {
    const textoEncriptado = encriptar(ingresaMensaje.value)
    mensajeEncriptado.value = textoEncriptado;
    mensajeEncriptado.style.backgroundImage = "none";
    ingresaMensaje.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

//Desencriptar el texto

const mensajeDesencriptado = document.querySelector(".mensaje");

function botondesencriptar() {
    const textoDesencriptado = desencriptar(ingresaMensaje.value)
    mensajeDesencriptado.value = textoDesencriptado;
    mensajeDesencriptado.style.backgroundImage = "none";
    ingresaMensaje.value = "";
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

//Copiar

const mensaje = document.querySelector(".mensaje");

function botoncopiar() {
   mensaje.select();
   navigator.clipboard.writeText(mensaje.value);
   mensaje.value = "";
   alert("Texto copiado");
}

