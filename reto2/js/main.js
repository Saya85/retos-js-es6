

/* Haz una clase llamada Password que siga las siguientes condiciones:

• Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.

• Los constructores serán los siguiente:
Incluye el método que genere una contraseña aleatoria con esa longitud. */

class Password {
    longitud;
    contrasenya;

    constructor() {
        this.longitud = 8;
        this.contrasenya = this.#crearPass();
    }

    #crearPass () {
        let contrasenya = '';
        for (let i = 0; i < this.longitud; i++) {
            contrasenya += Math.floor(Math.random() * (9 - 0)) + 0;
        }
        return contrasenya;
    }
}

let con = new Password();