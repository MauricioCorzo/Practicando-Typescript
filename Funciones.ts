// FUNCIONES


// le puedo decir que tipado retorna
function suma ( a:number, b:number ): number {
	return a + b;
}

// Void son las que no retornan un valor o retornan undefined
function consolog(): void {
	console.log("La tipo void no tienen return, si pongo return me tira error");
}

// Never son las que tira un ERROR
function tiraError(msg: string): never {
	throw new Error(msg);
}

// Se le puede tmb pasar un parametro opcional
function saludar(nombre: string, apellido: string, edad?: number): string{
	return `Hola ${nombre} ${apellido} tienes ${edad ? edad : "X"} años`;
}

console.log(saludar("Mauricio", "Corzo"));

// -- Narrowing
function suma2 ( a:number | string, b:number | string): number {
	if(typeof a == "string"){
		// EN ESTA PARTE TYPESCRIPT YA SABE QUE "A" VA A SER UN STRING Y TENEMOS SUS METODOS
		a = parseInt(a);
		// EN ESTA PARTE TYPESCRIPT YA SABE QUE "A" VA A SER UN NUMERO Y TENEMOS SUS METODOS
	}
	if(typeof b == "string"){
		b = parseInt(b);
	}
	return a + b;
}

 function suma5(a: number, b:string): string;
 function suma5(a: string, b:string): string;
 function suma5(a: string, b:number): string;
 function suma5(a: number, b:number): number;
function suma5(a:any , b:any) {
	return a + b;  
}

const resultado = suma5("2" , "2");

// --Generic Functions
function firstElement(arr: any[]){
	return arr[0];
}
const array = [1,2,3,4];
const elemento = firstElement(array); // La variable elemento es any, pierdo el tipado

function firstElement2<Type>(arr: Type[]): Type {
	return arr[0];
}
const array2 = [ 1 , 2 , 3 , 4 ];
const elemento2 = firstElement2(array2); // La variable elemento es NUMBER, porque lee lo que tiene adentro del arreglo esto es gracias al "Type"

function unirObjetos <U extends object , V extends object> (obj1: U, obj2: V): U & V{
	return { ...obj1, ...obj2 };
}
// const prueba = unirObjetos({name:"Mauricio"}, {age: 27})
// type test1 = Expect<Equal<typeof prueba, { name: string } & { age: number }>>

unirObjetos({nombre: "Mauricio"}, {edad: 27}); //Esto esta ok pq le decimos que si o si recibimos un objeto
// unirObjetos({nombre: "Mauricio"} , 27) // Esto tira Error
