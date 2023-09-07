var juegoHabilitado = true;
var puntuacionUsuario = 0;
var puntuacionMaquina = 0;

function jugar(eleccionUsuario) {
    if (!juegoHabilitado) {
        alert("Espera unos segundos antes de jugar nuevamente.");
        return;
    }

    if (!validarEleccion(eleccionUsuario)) {
        alert("La elección del usuario no es válida.");
        return;
    }

    juegoHabilitado = false;

    setTimeout(function () {
        juegoHabilitado = true;
    }, 2000);

    var opciones = ["piedra", "papel", "tijera"];
    var eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    var resultado = "";

    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate. Ambos eligieron " + eleccionUsuario + ".";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado = "Ganaste. La computadora eligió " + eleccionComputadora + ".";
        puntuacionUsuario++;
    } else {
        resultado = "Perdiste. La computadora eligió " + eleccionComputadora + ".";
        puntuacionMaquina++;
    }

    document.getElementById("resultado").innerHTML = resultado;

    var eleccionMaquinaImg = document.getElementById("eleccionMaquina-img");
    eleccionMaquinaImg.src = "./img/" + eleccionComputadora + ".png";
    eleccionMaquinaImg.classList.add('rotarClick');

    var img = event.currentTarget.querySelector('img');
    img.classList.add('rotarClick');

    setTimeout(function () {
        img.classList.remove('rotarClick');
        eleccionMaquinaImg.classList.remove('rotarClick');

        actualizarPuntuaciones();
    }, 2000);
}

function validarEleccion(eleccion) {
    var opcionesValidas = ["piedra", "papel", "tijera"];
    return opcionesValidas.includes(eleccion);
}

function actualizarPuntuaciones() {
    document.getElementById("puntuacion-usuario").textContent = puntuacionUsuario;
    document.getElementById("puntuacion-maquina").textContent = puntuacionMaquina;
}