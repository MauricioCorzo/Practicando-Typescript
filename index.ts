// npm init -y
// npm i typescript ts-node
// npx tsc --init crea el tsconfig para hacer mas o menos fuerte typescript
// cambiar en package.json el script para correr nodemon
// npm init -D @eslint/config
// "@typescript-eslint/no-unused-vars": "off"
import categorias from "./categorias";
const numero  = 29;

enum Fases {
    Primera,
    Segunda,
    Tercera
}

// const nullExample:null  = null; // Solo puede tomar valor "null".
const numberExample: number = null; // Pero el valor null se le puede asignar a cualquier variable con la configuracion en tsconfig en false

// El mismo ejemplo aplica para undefined
// const undefinedExample: undefined = undefined;
const stringExample: string = undefined;

// Ejemplo con unknown
const unkValue : unknown = "Franco"; // La declaro
// let str : string = unkValue // Error, no se le puede asignar unknown a una variable
const str2 : string = unkValue as string; // Se puede pero mala practica

// Ejemplo con any
const anyValue : any = "Franco";
const str: string = anyValue; // Todo Ok se puede
// console.log(str.charAt(0))

// No Implict Any (archivo de tsconfig)
const funcionCualquiera = (arg1: string , arg2: boolean) => {  // si no le pongo el tipo de argumento me tira Error
	console.log(arg1),
	console.log(arg2);
};
// funcionCualquiera(1, 2) // Error
funcionCualquiera("Mauricio" , true); // OK
// funcionCualquiera(true, "Mauricio") // Error