import axios, { AxiosResponse } from "axios";


const getData = async () => {
	try {
		const  {data} : AxiosResponse<any> = await axios.get("https://59jwubnb4d.execute-api.us-east-1.amazonaws.com/Prod/hotels");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const infoDeHoteles: any[] = [];

const juntarInfo = async () => {
	const  { hotels }  = await getData();
	// for(const categoria in hotels){
	// 	for(const index in hotels[categoria]){
	// 		if(infoDeHoteles[parseInt(index)]){
	// 			infoDeHoteles[parseInt(index)][categoria] = hotels[categoria][index];
	// 		} else {
	// 			infoDeHoteles[parseInt(index)] = {[categoria]: hotels[categoria][parseInt(index)]};
	// 		}
	// 	}
	// }
	// console.log(infoDeHoteles);
	// const obj: any = {};
	for(let i = 0; i < 150; i++){  // console.log(Object.keys(hotels.name).length) = 150;
		const obj: any = {};
		for(const categoria in hotels){
			obj[categoria] = hotels[categoria][i];
		}
		//infoDeHoteles[i] = {...obj};
		infoDeHoteles[i] = obj; 
	} 
	console.log(infoDeHoteles[0]);
};

juntarInfo();










