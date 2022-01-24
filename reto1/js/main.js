

/* Haz una clase llamada Persona que siga las siguientes condiciones:

• Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.

• Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
(0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
constante para ello.

• Instancia al menos tres objetos. */


const H = "hombre";
const M = "mujer";

class Persona {
    nombre;
    edad;
    dni;
    sexo;
    peso;
    altura;

    constructor (dni) {
        this.dni = dni;
        this.nombre = '';
        this.edad = 0;
        this.sexo = H;
        this.altura = 0;
        this.peso = 0;        
    }
}

let persona1 = new Persona('1234567N');
let persona2 = new Persona('7654321N');
let persona3 = new Persona('4325674O');