
let player1;
let player2;

const chooseFighter = (luchadorEscogido) => {

    if(!player1){
        //Si player1 es undefined...aun no se ha escogido a nadie para el player1....

        player1 = fighters[luchadorEscogido];
        document.getElementById(luchadorEscogido).onclick = null;
        //Fighters es el diccionario, luchadorEscogido es el argumento que hemos recibido
        //en esta funcion, ese argumento es un string que COINCIDE con la nomenclatura de indices en el diccionario

        console.log(player1);
    } else {

        player2 = fighters[luchadorEscogido];
        console.log(player2);
        document.getElementById(luchadorEscogido).onclick = null;

        //Ahora que tengo a los dos players...deshabilito los div que tienen las imágenes
        //para que nadie escoja a nadie más.

        let characters = Array.from(document.getElementsByClassName("avatar"));

        characters.map(
            (personaje) => {
                if(personaje.onclick !== null){
                    personaje.onclick = null;
                };
            }
        )

        //Después de deshabilitar la posibilidad de seleccionar más personajes, muestro
        //un mensaje de quien va a enfrentarse

        document.getElementById("mensaje").innerHTML = `Se van a enfrentar ${player1.nombre} contra ${player2.nombre}`;
    }

}