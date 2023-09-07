var juegoHabilitado = true;

function jugar(eleccionUsuario) {
    if (!juegoHabilitado) {
        alert("No está permitido jugar hasta dentro de 3 segundos.");
        return;
    }

    juegoHabilitado = false;

    setTimeout(function () {
        juegoHabilitado = true;
    }, 3000);

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
    } else {
        resultado = "Perdiste. La computadora eligió " + eleccionComputadora + ".";
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
    }, 2000);
}