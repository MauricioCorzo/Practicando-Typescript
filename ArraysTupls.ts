// Arrays y Tuplas
// Array

interface Hobby2 {
    nombre: string
}


const arrayNumbers: number[] = [10,20,30];
const arrayNumbers2: Array<number> = [10,20,30];
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