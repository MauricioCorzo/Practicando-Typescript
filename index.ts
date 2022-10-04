// npm init -y
// npm i typescript ts-node
// npx tsc --init crea el tsconfig para hacer mas o menos fuerte typescript
// cambiar en package.json el script para correr nodemon
import categorias from "./categorias"
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

interface Hobby2 {
    nombre: string
}

// Arrays y Tuplas
// Array
let arrayNumbers: number[] = [10,20,30]
let arrayNumbers2: Array<number> = [10,20,30]
let arrayStrings: string[] = ["Mauricio", "Eliana", "Gino"]
let arrayDeTodo: any[] = ["mauricio", true, 24, {apellido: "Corzo"}]
let arrayDeHobbys2: Hobby2[] = [{nombre: "Leer"} , {nombre: "Jugar Videojuegos"}]

// Array + any
let arrayDinamico: any[] = [false, "Mauricio" , [1,2,3]]
// console.log(arrayDinamico)

// Tupla se debe respetar el mismo length y los datos correspondiente en sus posiciones correspondientes
let person: [string,number] = ["Mauricio" , 27]
// let personaError: [string,number] = ["Mauricio",27,true]
// let personaError2: [string,number] = [27, "Mauricio"]


// Objetos
interface Persona {
    readonly nombre: string, //Sirve solo para lectura. No se puede modificar, FUnciona para type y class tmb
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
    saluda(): string
}

const eliana : Estudiante = {
    nombre: "Eliana",
    apellido: "Almeira",
    edad: 31,
    estaActivo: true,
    saluda: (): string => { return `Hola ${eliana.nombre}` },
    hobbies: [{nombre: "salir a comer"}]
}

const gabi = {
    nombre: "Gabi",
    apellido: "Almeira",
    edad: 36,
    estaActivo: false,
    hobbies: [{nombre: "Trabajar"}],
    comePoco: true
}
const gabriela: Persona = gabi

// console.log(gabriela.comePoco) // solo lee las propiedades que coinciden con la interface Persona
// eliana.saluda()

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
    private edad: number // Solo lo puede leer el padre desde adentro con una funcion como en este ejemplo. En JS se usa # y se lo tengo que poner al this.#edad
    protected email: string // En JS se usa _ y se lo tengo que poner al this._email
    constructor(nombre:string, edad:number, email: string){
        this.nombre = nombre,
        this.edad = edad
        this.email = email
    }
    // Este metodo tambien lo puedo poner privado, por defecto es public
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
    getEmail(){
        return `El email es ${this.email}` // Se puede hacer porque protected solo lo puden leer la clase padre y sus hijos
    }
}

let gino = new Hombre("Gino" , 7 , "gino@gino.com", true)

console.log(gino.getEmail())
// console.log(gino.edad) // No se puede
console.log(gino.getEdad()) // SI se puede, si tuviera private solo se puede acceder desde la class Humano


// Esta clase tiene que tener las propiedades de la interface Persona. Si quiero tener mas de una se le agrega
// poniendole una "," (coma)
class MezclarInterfaces implements Persona, Estudiante {
    nombre: string
    apellido: string
    edad: number
    hobbies: Hobby[]
    estaActivo: boolean;

    constructor(nombre: string, apellido: string, edad: number, hobbies: Hobby[], estaActivo: boolean){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.hobbies = hobbies
        this.estaActivo = estaActivo
    }

    saluda(): string {
        return `Hola ${this.nombre} ${this.apellido}`
    }
}

const mezclaDeInterfaces = new MezclarInterfaces("Mauricio", "Corzo", 27, [{nombre: "Leer LIbros"}], true)

console.log(mezclaDeInterfaces)


// Funciones
// le puedo decir que tipado retorna
function suma ( a:number, b:number ): number {
    return a + b
}

// Void son las que no retornan un valor o retornan undefined
function consolog(): void {
    console.log("La tipo void no tienen return, si pongo return me tira error")
}

// Never son las que tira un ERROR
function tiraError(msg: string): never {
    throw new Error(msg)
}

// Se le puede tmb pasar un parametro opcional
function saludar(nombre: string, apellido: string, edad?: number): string{
    return `Hola ${nombre} ${apellido} tienes ${edad ? edad : "X"} años`
}

console.log(saludar("Mauricio", "Corzo"))

// -- Narrowing
function suma2 ( a:number | string, b:number | string): number {
    if(typeof a == "string"){
        // EN ESTA PARTE TYPESCRIPT YA SABE QUE "A" VA A SER UN STRING Y TENEMOS SUS METODOS
        a = parseInt(a)
        // EN ESTA PARTE TYPESCRIPT YA SABE QUE "A" VA A SER UN NUMERO Y TENEMOS SUS METODOS
    }
    if(typeof b == "string"){
        b = parseInt(b)
    }
    return a + b
}

 function suma5(a: number, b:string): string;
 function suma5(a: string, b:string): string;
 function suma5(a: string, b:number): string;
 function suma5(a: number, b:number): number;
 function suma5(a:any , b:any) {
    return a + b;  
 }

 let resultado = suma5("2" , "2")

// --Generic Functions
function firstElement(arr: any[]){
    return arr[0]
}
let array = [1,2,3,4]
let elemento = firstElement(array) // La variable elemento es any, pierdo el tipado

function firstElement2<Type>(arr: Type[]): Type {
    return arr[0]
}
let array2 = [ 1 , 2 , 3 , 4 ]
let elemento2 = firstElement2(array2) // La variable elemento es NUMBER, porque lee lo que tiene adentro del arreglo esto es gracias al "Type"

function unirObjetos <U extends object , V extends object> (obj1: U, obj2: V): U & V{
    return { ...obj1, ...obj2 }
}
// const prueba = unirObjetos({name:"Mauricio"}, {age: 27})
// type test1 = Expect<Equal<typeof prueba, { name: string } & { age: number }>>

unirObjetos({nombre: "Mauricio"}, {edad: 27}) //Esto esta ok pq le decimos que si o si recibimos un objeto
// unirObjetos({nombre: "Mauricio"} , 27) // Esto tira Error


interface prueba {
    nombre: string
    edad: number
    duracion: number
    activo: boolean
}


const loco : any = {
    nombre: "Mauricio",
    edad: 22,
    duracion: 3,
    activo: "false"
}

const comprobacion = (objeto: any ): boolean | prueba => {
    if(!(typeof objeto.nombre == "string")) return false
    if(!(typeof objeto.edad == "number")) return false
    if(!(typeof objeto.duracion == "number")) return false
    if(!(typeof objeto.activo == "boolean")) return false
    return objeto
}

console.log(comprobacion(loco))

type prueba2 = { [key:string]: number }

const obj: prueba2 = {
    uno: 1,
    dos: 2
}

type User = {name:object, age:number, role: "admin" | "free"}

type keys = keyof User // Solo acepta "name" , "age" o "role"

const hollaa:keys = "age"

type ValueOf<Obj> = Obj[keyof Obj] // se puede reutilizar donde sea

type valores = ValueOf<User>

// type valores = User[keyof User] // Se puese hacer tmb type ValueOf<Obj> = Obj[keyof Obj] .... type valores = ValueOf<User> 

const holaa2 : valores = "free" // Este si acepta los values de las keys de user

