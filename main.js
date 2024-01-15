//EMPIEZA FUNCION PARA VERIFICAR ROL
alert(
	"Para poder ingresar al contenido de la pagina porfavor utilizar el rol de 'profesor' o 'tutor', en caso contrario no se visualizara nada."
);

//Primero se empieza obteniendo el valor de la variable nombre, con un prompt que te pregunte cual es tu rol
let nombre = prompt("¿Cual es su rol?");
//Luego se ejecuta una funcion en la cual se checkea que si el usuario es "profesor" o "tutor" se le de acceso a la pagina, y en el caso contrario se le de una advertencia que no tiene acceso a la pagina.
function checkearNombre() {
	if (nombre == "profesor" || nombre == "tutor") {
		alert("Bienvenido a la pagina de divisas");
	} else {
		alert("Usted no tiene acceso al contenido de la pagina");
		checkearNombre();
	}
}

checkearNombre();

//EMPIEZA FUNCION CONVERSION

function convertir() {
	let valore = parseInt(document.getElementById("valor").value);
	let resultado = 0;
	let dolar = 1025;
	let euro = 1119.4;
	//Primero en la parte superior se declararon las variables necesarias para poder realizar la conversion, la variable valore, viene dada por lo ingresado por el usuario en el input type number con el id "valor"
	if (document.getElementById("uno").checked) {
		resultado = valore / dolar;
		alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
		//Hasta aqui si el usuario selecciona el input type radio con id uno el codigo ejecuta la funcion de dividir el valore por el valor del dolar dado en la variable, dando asi el cambio en la variable resultado, luego con el metodo toFixed(2) se le indica que devuelva un numero con no mas de dos decimales.
	} else if (document.getElementById("dos").checked) {
		resultado = valore / euro;
		alert("El cambio de Pesos a Euros es: $" + resultado.toFixed(2));
		//Aqui se realiza el mismo procedimiento que antes simplemente que se cambia a la variable euro.
	} else {
		alert("Tienes que completar el formulario");
		//Aqui al final se le instruye al codigo que en caso el usuario no haber seleccionado ninguna opcion o no haber ingresado un valor se le informe que tiene que completar el formulario.
	}
}

//PAGINA JUGADORES FUTBOL

const jugadores = [
	{
		nombre: "Leonel Messi",
		edad: 36,
		nacionalidad: "Argentina",
		club: "Inter Miami CF",
	},
	{
		nombre: "Cristiano Ronaldo",
		edad: 38,
		nacionalidad: "Portugal",
		club: "Al-Nassr",
	},
	{
		nombre: "Neymar Júnior",
		edad: 31,
		nacionalidad: "Brasil",
		club: "Al-Hilal FC",
	},
	{
		nombre: "Sergio Agüero",
		edad: 35,
		nacionalidad: "Argentina",
		club: "Manchester City FC",
	},
	{
		nombre: "Kylian Mbappé",
		edad: 25,
		nacionalidad: "Francia",
		club: "Paris Saint-Germain FC",
	},
];
// En el array se crearon 5 objetos, desde el 0 al 4, con atributos de nombre, edad, nacionalidad, y club.
let botonFutbol = document.getElementById("botonFutbol");

botonFutbol.addEventListener("click", futbol);
function futbol() {
	let seleccion = prompt(
		"Desea buscar un jugador para ver sus atributos? si o no"
	);
	// con este prompt se busca que el usuario responda si quiere buscar jugadores por si o por no.
	while (seleccion != "si" && seleccion != "no") {
		alert("Porfavor escriba si o no, en minusculas.");
		seleccion = prompt(
			"Desea buscar un jugador para ver sus atributos? si o no"
		);
	}
	// si el usuario escribe algo que no sea si o no, se le abre de vuelta un prompt pidiendole que escriba si o no.
	if (seleccion == "si") {
		alert("a continuacion nuestra lista de jugadores");
		let todosLosJugadores = jugadores.map(
			(jugador) =>
				jugador.nombre +
				", " +
				jugador.edad +
				", " +
				jugador.nacionalidad +
				", " +
				jugador.club
		);
		alert(todosLosJugadores.join(" - "));
	}
	// En este bucle if, si el jugador pone que si, se le muestra toda la lista de los jugadores, separando los atributos por una coma, y luego separando cada objeto con el metodo join con un espacio y un guion medio
	else if (seleccion == "no") {
		alert("Gracias por visitar la pagina, hasta la proxima");
	}
	// si el usuario escribe que no se lo saluda.
	while (seleccion !== "no" && seleccion == "si") {
		let seleccionJugador = prompt(
			"Ingrese el nombre completo del jugador que desea ver",
			"EJ : Leonel Messi o Neymar Junior"
		);
		// aqui si el usuario escribe algo distinto a no y igual a si se le da la opcion de escribiendo el nombre completo del jugador ver sus atributos
		if (seleccionJugador == "Leonel Messi") {
			alert(
				jugadores[0].nombre +
					" " +
					jugadores[0].edad +
					" " +
					jugadores[0].nacionalidad +
					" " +
					jugadores[0].club
			);
		}
		//Codigo que se ejecuta si el usuario elige Leonel Messi
		else if (seleccionJugador == "Cristiano Ronaldo") {
			alert(
				jugadores[1].nombre +
					" " +
					jugadores[1].edad +
					" " +
					jugadores[1].nacionalidad +
					" " +
					jugadores[1].club
			);
		}
		//Codigo que se ejecuta si el usuario elige Cristiano Ronaldo
		else if (seleccionJugador == "Neymar Junior") {
			alert(
				jugadores[2].nombre +
					" " +
					jugadores[2].edad +
					" " +
					jugadores[2].nacionalidad +
					" " +
					jugadores[2].club
			);
		}
		//Codigo que se ejecuta si el usuario elige Neymar Junior
		else if (seleccionJugador == "Sergio Aguero") {
			alert(
				jugadores[3].nombre +
					" " +
					jugadores[3].edad +
					" " +
					jugadores[3].nacionalidad +
					" " +
					jugadores[3].club
			);
		}
		//Codigo que se ejecuta si el usuario elige Sergio Aguero
		else if (seleccionJugador == "Kylian Mbappe") {
			alert(
				jugadores[4].nombre +
					" " +
					jugadores[4].edad +
					" " +
					jugadores[4].nacionalidad +
					" " +
					jugadores[4].club
			);
		}
		//Codigo que se ejecuta si el usuario elige Kylian Mbappe
		else {
			alert("no se encontro el jugador");
			break;
		}
		//Codigo que se ejecuta si el usuario no elige correctamente ninguno de los jugadores
	}
}
