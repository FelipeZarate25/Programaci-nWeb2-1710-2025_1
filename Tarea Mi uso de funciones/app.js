// Generar un número aleatorio entre 1 y 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let vidas = 3;

// Función para obtener el nombre del usuario
function obtenerNombre() {
    let nombre = prompt("¡Holaaa! ¿Cómo te llamas?");
    console.log("Nombre del usuario: " + nombre);
    return nombre;
}

// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje) {
    alert(mensaje);
    console.log(mensaje);
}

// Función para pedir al usuario que adivine el número
function pedirNumero() {
    let numero = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    console.log("Elegiste el " + numero);
    return numero;
}

// Función para jugar el juego
function jugarJuego() {
    let nombreUsuario = obtenerNombre();
    mostrarMensaje(nombreUsuario + ", ¡Bienvenido! Tienes " + vidas + " intentos para adivinar el número que estoy pensando.");

    while (vidas > 0) {
        let numeroUsuario = pedirNumero();

        if (numeroUsuario === numeroAleatorio) {
            mostrarMensaje("¡Genial, " + nombreUsuario + "! Adivinaste el número.");
            break;
        } else {
            vidas--;
            if (vidas > 0) {
                let pista = numeroUsuario > numeroAleatorio ? "El número es menor " : "El número es mayor ";
                mostrarMensaje(pista + "Te quedan " + vidas + " intentos.");
            } else {
                mostrarMensaje("Lástima, " + nombreUsuario + ", suerte para la otra, el número era " + numeroAleatorio + ".");
            }
        }
    }
}

// Llamada a la función para iniciar el juego
jugarJuego();
