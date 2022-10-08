export {};
// Interfaces de la que extiende las clases

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
};


interface Estudiante extends Persona {
    estaActivo: boolean,
    saluda(): string
}

// Clases
class Humano {
	private static numeroDeInstancias = 0; 
	nombre: string; // por defecto, son publicas
	private edad: number; // Solo lo puede leer el padre desde adentro con una funcion como en este ejemplo. En JS se usa # y se lo tengo que poner al this.#edad
	protected email: string; // En JS se usa _ y se lo tengo que poner al this._email
	constructor(nombre:string, edad:number, email: string){
		this.nombre = nombre,
		this.edad = edad;
		this.email = email;
		Humano.numeroDeInstancias++; // Cada vez que se cree una instancia de Humano se aumenta el numero gracias a la propiedad static
	}
	// Este metodo tambien lo puedo poner privado, por defecto es public
	// Function getter. Nos permite acceder a algo privado p protected
	getEdad(){
		return `La edad es ${this.edad}`;
	}

	public static getNumeroDeInstancias(): number {
		return Humano.numeroDeInstancias;
	}
}

class Hombre extends Humano {
	isActive: boolean;
	constructor(nombre:string, edad:number, email: string, isActive: boolean){
		super(nombre,edad,email);
		this.isActive = isActive;
	}
	getEmail(){
		return `El email es ${this.email}`; // Se puede hacer porque protected solo lo puden leer la clase padre y sus hijos
	}

	// Setter, cambia el valor de una propiedad
	setEmail(arg: string): string{
		this.email = arg;
		return `El nuevo email es ${this.email}`;
	}
	//NOTA: si les pusiera al setter set y al getter get no pueden ser llamadas como funciones sino como 
	//propiedades de un objeto. El set no retorna nada y seria gino.setEmail = "nuevoemail.com"
}

const gino = new Hombre("Gino" , 7 , "gino@gino.com", true);
const mauri = new Hombre("Mauricio", 27, "mauri@mauri.com", true);

console.log(Humano.getNumeroDeInstancias()); // Lo llamo con la clase, no con la instancia mauri o gino


console.log(gino.getEmail());
// console.log(gino.edad) // No se puede
console.log(gino.getEdad()); // SI se puede, si tuviera private solo se puede acceder desde la class Humano
console.log(gino.setEmail("gino2@gino2.com"));
console.log(gino.getEmail());


// Esta clase tiene que tener las propiedades de la interface Persona. Si quiero tener mas de una interfaz se le agrega
// poniendole una "," (coma)
class MezclarInterfaces implements Persona, Estudiante {
	nombre: string;
	apellido: string;
	edad: number;
	hobbies: Hobby[];
	estaActivo: boolean;

	constructor(nombre: string, apellido: string, edad: number, hobbies: Hobby[], estaActivo: boolean){
		this.nombre = nombre,
		this.apellido = apellido,
		this.edad = edad,
		this.hobbies = hobbies,
		this.estaActivo = estaActivo;
	}

	saluda(): string {
		return `Hola ${this.nombre} ${this.apellido}`;
	}
}

const mezclaDeInterfaces = new MezclarInterfaces("Mauricio", "Corzo", 27, [{nombre: "Leer LIbros"}], true);

console.log(mezclaDeInterfaces);

// Clases generica con una Interfaz generia y sus tipos

interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<T, U> implements ProcessIdentity<T, U> {
	value: T;
	message: U;
	constructor(val: T, msg: U) {
		this.value = val;
		this.message = msg;
	}
	process(): T {
		console.log(this.message);
		return this.value;
	}
}

const processor = new processIdentity<number, string>(100, "Hello");
processor.process();           // Displays 'Hello'
// processor.value = "100";       // Type check error


// Lo mismo pero sin una Interfaz
class processIdentity2<T, U> {
	private _value: T;
	private _message: U;
	constructor(value: T, message: U) {
		this._value = value;
		this._message = message;
	}
	getIdentity() : T {
		console.log(this._message);
		return this._value;
	}
}
const processor2 = new processIdentity<number, string>(100, "Hello");
//processor.getIdentity();      // Displays 'Hello'


/*En este ejemplo hay una clase base denominada Car y dos subclases, 
ElectricCar y Truck. La función accelerate acepta una instancia genérica de Car y, después, la devuelve.
Al indicar a la función accelerate que T debe extender Car, TypeScript sabe a qué funciones y propiedades se puede llamar dentro de la función. 
El genérico también devuelve el tipo específico del objeto "Car" (ElectricCar o Truck) 
que se pasa a la función, en lugar de un objeto Car no específico.*/

class Car {
	make = "Generic Car";
	doors = 4;
}
class ElectricCar extends Car {
	make = "Electric Car";
	doors = 4;
}
class Truck extends Car {
	make = "Truck";
	doors = 2;
}
function accelerate<T extends Car> (car: T): T {
	console.log(`All ${car.doors} doors are closed.`); // Infiere las propiedades, solo muestra doors o make
	console.log(`The ${car.make} is now accelerating!`);
	return car;
}

const myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar); 
//"All 4 doors are closed."
//"The Electric Car is now accelerating!"


const myTruck = new Truck;
accelerate(myTruck);
// "All 2 doors are closed."
// "The Truck is now accelerating!"


//Ejemplo de clase con tipo generico
class DataStore<T> {
	private _data: Array<T> = new Array(10);
     
     
	addOrUpdate(index: number, item: T) {
		if(index >=0 && index <10) {
			this._data[index] = item;
		}
	}
	getData(index: number){
		return this._data[index];
	}
}

const empIDs = new DataStore<number>();  // Aca se le indica cual es el tipo de T, en este caso number
empIDs.addOrUpdate(0, 50);
empIDs.addOrUpdate(1, 65);
empIDs.addOrUpdate(2, 89);                  
console.log(empIDs.getData(0));  // Retorna 50


type Pets = {
    name: string;
    breed: string;
    age: number
}
const pets = new DataStore<Pets>();// Aca se le indica cual es el tipo de T, en este caso de type Pets

pets.addOrUpdate(0, { name: "Rex", breed: "Golden Retriever", age: 5});
pets.addOrUpdate(1, { name: "Sparky", breed: "Jack Russell Terrier", age: 3});
console.log(pets.getData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }