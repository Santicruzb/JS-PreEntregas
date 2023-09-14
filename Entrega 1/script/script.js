
if (
	confirm(
		"¡Bienvenido a mi morada!\n\nPara poder entrar vas a tener que pasar 1 desafio.\n Estoy pensando en un número del 1 al 100.\nTu objetivo es adivinar ese número para que puedas pasar.\nPuedes ingresar tu suposición y te diré si es mayor o menor.\n\n Buena suerte.",
	)
) {
	// El juego comienza
	const numeroAleatorio = 13;
	let intentos = 0;
	let adivinanza = true;
	console.log(numeroAleatorio);
	// Bucle while para permitir múltiples intentos
	while (adivinanza) {
		// Solicitar al usuario que ingrese un número
		const numeroUsuario = prompt("Adivina el número (entre 1 y 100):");
		intentos++;
		if (isNaN(numeroUsuario)) {
			alert("Por favor, ingresa un número válido.");
		} else {
			// Convertir la entrada del usuario a un número entero
			const numeroElegido = parseInt(numeroUsuario);
			// Comprobar si el número es igual al número aleatorio
			if (numeroElegido === numeroAleatorio) {
				adivinanza = false;
				alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
			} else if (numeroElegido < numeroAleatorio) {
				alert("El número es mayor. Intenta nuevamente.");
			} else {
				alert("El número es menor. Intenta nuevamente.");
			}
		}
	}
} else {
	// El usuario canceló
	alert("¡Gracias por visitar! Si deseas jugar más tarde, simplemente actualiza la página.");
}













