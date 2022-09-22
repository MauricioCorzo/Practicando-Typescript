// npm init -y
// npm i typescript ts-node
// tsc --init crea el tsconfig para hacer mas o menos fuerte typescript
// cambiar en package.json el script para correr nodemon

let numero : number = 29;

enum Fases {
    Primera,
    Segunda,
    Tercera
}

let nullExample : null = null // Solo puede tomar valor "null".
let numberExample: number = null // Pero el valor null se le puede asignar a cualquier variable con la configuracion en tsconfig en false

// El mismo ejemplo aplica para undefined
let undefinedExample: undefined = undefined
let stringExample: string = undefined;

// Ejemplo con unknown
let unkValue : unknown = "Franco" // La declaro
// let str : string = unkValue // Error, no se le puede asignar unknown a una variable
let str2 : string = unkValue as string // Se puede pero mala practica

// Ejemplo con any
let anyValue : any = "Franco"
let str: string = anyValue // Todo Ok se puede
// console.log(str.charAt(0))

// No Implict Any (archivo de tsconfig)
const funcionCualquiera = (arg1: string , arg2: boolean) => {  // si no le pongo el tipo de argumento me tira Error
    console.log(arg1),
    console.log(arg2)
}
// funcionCualquiera(1, 2) // Error
funcionCualquiera("Mauricio" , true) // OK
// funcionCualquiera(true, "Mauricio") // Error


// Arrays y Tuplas
// Array
let arrayNumbers: number[] = [10,20,30]
let arrayNumbers2: Array<number> = [10,20,30]
let arrayStrings: string[] = ["Mauricio", "Eliana", "Gino"]

// Array + any
let arrayDinamico: any[] = [false, "Mauricio" , [1,2,3]]
// console.log(arrayDinamico)

// Tupla se debe respetar el mismo length y los datos correspondiente en sus posiciones correspondientes
let person: [string,number] = ["Mauricio" , 27]
// let personaError: [string,number] = ["Mauricio",27,true]
// let personaError2: [string,number] = [27, "Mauricio"]


// Objetos
interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    hobbies: Hobby[], // array de objetos de la interfase hobby
    opcional?: string //Puede ir o no
}

interface Hobby {
    nombre: string
}
// Ok
const mauricio: Persona = {
    nombre: "Mauricio",
    apellido: "Corzo",
    edad: 27,
    hobbies: [{nombre: "leer"} , {nombre: "videojuegos"}],
    opcional: "Esto es opcional"
}

interface Estudiante extends Persona {
    estaActivo: boolean,
    saluda: () => void
}

const eliana : Estudiante = {
    nombre: "Eliana",
    apellido: "Almeira",
    edad: 31,
    estaActivo: true,
    saluda: () => { console.log("Hola") },
    hobbies: [{nombre: "salir a comer"}]
}

// // Error, falta propiedad edad
// const mauricio2: Persona = {
//     nombre: "Mauricio",
//     apellido: "Corzo",
// }

// // Error, falta propiedad apellido
// const mauricio3: Persona = {
//     nombre: "Mauricio",
//     edad: 27,
// }

// Clases
class Humano {
    nombre: string // por defecto, son publicas
    private edad: number // Solo lo puede leer el padre desde adentro con una funcion como en este ejemplo
    protected email: string
    constructor(nombre:string, edad:number, email: string){
        this.nombre = nombre,
        this.edad = edad
        this.email = email
    }
    // Este metodo tambien lo puedo poner privado
    getEdad(){
        return `La edad es ${this.edad}`
    }
}

class Hombre extends Humano {
    isActive: boolean
    constructor(nombre:string, edad:number, email: string, isActive: boolean){
        super(nombre,edad,email)
        this.isActive = isActive
    }
    funcionPrueba(){
        return `El email es ${this.email}` // Se puede hacer porque protected solo lo puden leer la clase padre y sus hijos
    }
}

let gino = new Hombre("Gino" , 7 , "gino@gino.com", true)

console.log(gino.funcionPrueba())
// console.log(gino.edad) // No se puede
console.log(gino.getEdad()) // SI se puede
