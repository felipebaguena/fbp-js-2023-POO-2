class Fighter {

    constructor(nombre,altura,peso,ataque,defensa,suerte){
        this.vida = 100,
        this.nombre = nombre,
        this.altura = altura,
        this.peso = peso,
        this.ataque = ataque,
        this.defensa = defensa,
        this.suerte = suerte
    }

    golpear(){

    }

    defenderse(){

    }


}

let fighter1 = new Fighter("Alvaro",1.63,63,70,50,6);
let fighter2 = new Fighter("Paula",1.73,65,80,40,8);
let fighter3 = new Fighter("Mario",1.70,88,70,90,10);

//Diccionario JS

let fighters = {
    "luchador1" : fighter1,
    "luchador2" : fighter2,
    "luchador3" : fighter3,
}