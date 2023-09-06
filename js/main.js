function jugar(eleccionUsuario) {
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

    var img = event.currentTarget.querySelector('img');
    img.classList.add('rotarClick');

    setTimeout(function () {
        img.classList.remove('rotarClick');
    }, 2000);
}