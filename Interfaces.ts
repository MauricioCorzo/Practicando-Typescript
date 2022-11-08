//INTERFACES Y OBJETOS

interface Persona {
    readonly nombre: string; //Sirve solo para lectura. No se puede modificar, FUnciona para type y class tmb
    apellido: string;
    edad: number;
    hobbies: Hobby[]; // array de objetos de la interfase hobby
    opcional?: string; //Puede ir o no
}

interface Hobby {
    nombre: string;
}
// Ok
const mauricio: Persona = {
    nombre: 'Mauricio',
    apellido: 'Corzo',
    edad: 27,
    hobbies: [{ nombre: 'leer' }, { nombre: 'videojuegos' }],
    opcional: 'Esto es opcional',
};

interface Estudiante extends Persona {
    estaActivo: boolean;
    saluda(): string;
}

const eliana: Estudiante = {
    nombre: 'Eliana',
    apellido: 'Almeira',
    edad: 31,
    estaActivo: true,
    saluda: (): string => {
        return `Hola ${eliana.nombre}`;
    },
    hobbies: [{ nombre: 'salir a comer' }],
};

const gabi = {
    nombre: 'Gabi',
    apellido: 'Almeira',
    edad: 36,
    estaActivo: false,
    hobbies: [{ nombre: 'Trabajar' }],
    comePoco: true,
};
const gabriela: Persona = gabi;

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

interface Identity<T, U> {
    value: T;
    message: U;
}

const returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!',
};
const returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25,
};

type prueba2 = { [key: string]: number };

const obj: prueba2 = {
    uno: 1,
    dos: 2,
};

type User = { name: object; age: number; role: 'admin' | 'free' };

type keys = keyof User; // Solo acepta "name" , "age" o "role"

const hollaa: keys = 'age';

type ValueOf<Obj> = Obj[keyof Obj]; // se puede reutilizar donde sea

type valores = ValueOf<User>;

// type valores = User[keyof User] // Se puese hacer tmb type ValueOf<Obj> = Obj[keyof Obj] .... type valores = ValueOf<User>

const holaa2: valores = 'free'; // Este si acepta los values de las keys de user
