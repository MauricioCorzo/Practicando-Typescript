// Arrays y Tuplas
// Array

interface Hobby2 {
    nombre: string
}


const arrayNumbers: number[] = [10,20,30];
const arrayNumbers2: Array<number> = [10,20,30];
const arrayNumbers3: (number | string)[] = [10,20,30, "Hola"];
const arrayStrings: string[] = ["Mauricio", "Eliana", "Gino"];
const arrayDeTodo: any[] = ["mauricio", true, 24, {apellido: "Corzo"}];
const arrayDeHobbys2: Hobby2[] = [{nombre: "Leer"} , {nombre: "Jugar Videojuegos"}];

// Array + any
const arrayDinamico: any[] = [false, "Mauricio" , [1,2,3]];
// console.log(arrayDinamico)

// Tupla se debe respetar el mismo length y los datos correspondiente en sus posiciones correspondientes
const person: [string,number] = ["Mauricio" , 27];
// let personaError: [string,number] = ["Mauricio",27,true]
// let personaError2: [string,number] = [27, "Mauricio"]

// Podemos leer todos los valores de una tupla

type Tupla = ["mauricio", "corzo", 27, true, [1,2,3]]

type TuplaValues = Tupla[number]

const valoresDeTupla : TuplaValues = [1,2,3]; // SOLO PUEDE TENER "mauricio" | "corzo" | 27 | true | [1,2,3]

//Podemos concatenar Tuplas

type Tupla2 = ["Esto se" , "concatena con:" , ...Tupla]
// O

type Tupla3 = [...Tupla, ...Tupla2]


// Podemos tambien poner valores opcionales

type TuplaOpcional = [boolean, string, number?]

const tuplaOpcional: TuplaOpcional = [false, "Gino"]; // Etso esta OK


type BooleanRecord = { [k: string]: boolean };


//TUPLAS CON VALORES QUE EMPIECEN O TERMINEN CON ALGUN VALOR ESPECIFICO

type NumeroDeTelefono = [0 | 1,...number[]]
const numeroDeTelefono:NumeroDeTelefono = [0 ,2,34,3525]; // SI O SI EMPIEZA CON 0 o con 1
const numeroDeTelefono2:NumeroDeTelefono = [1 ,2,34,3525]; // SI O SI EMPIEZA CON 0 o con 1


