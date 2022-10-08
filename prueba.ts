import axios, { AxiosResponse } from "axios";

export interface HotelesFetch {
	hotels: Hotels
  }
  
export interface Hotels {
	name: Name
	address: Address
	"distance_from_downtown (km)": DistanceFromDowntownKm
	"avg_price_per_night (€)": AvgPricePerNight
	review_score: ReviewScore
	hotel_rating: HotelRating
	hotel_summary: HotelSummary
	hotel_photos: HotelPhotos
	origin: Origin
  }
export interface HotelsOrdenados {
	name?: string
	address?: string
	"distance_from_downtown (km)"?: number
	"avg_price_per_night (€)"?: number
	review_score?: number
	hotel_rating?: number
	hotel_summary?: string
	hotel_photos?: string
	origin?: string
  }

export interface Name {
	[key:string]: string
  }
  
export interface Address {
	[key:string]: string
  }
  
export interface DistanceFromDowntownKm {
	[key:string]: number
  }
  
export interface AvgPricePerNight {
	[key:string]: number
  }
  
export interface ReviewScore {
	[key:string]: number
  }
  
export interface HotelRating {
	[key:string]: number
  }
  
export interface HotelSummary {
	[key:string]: string
  }
  
export interface HotelPhotos {
	[key:string]: string
  }
  
export interface Origin {
	[key: string]: string
  }

// const objetoPRueba: HotelesFetch = {
// 	hotels: {
// 		name: {
// 			0: "Hotel Loco",
// 			1: "Holel Loco 2",
// 			"3": "Hotel Loco 3"
// 		},
// 		address: {
// 			0: "Locura1"
// 		},
// 		"distance_from_downtown (km)": {
// 			0: 121221414
// 		}
// 	}
// };

  


const getData = async () => {
	try {
		const  {data} : AxiosResponse<HotelesFetch> = await axios.get("https://59jwubnb4d.execute-api.us-east-1.amazonaws.com/Prod/hotels");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const infoDeHoteles: HotelsOrdenados[] = [];

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
		const obj: {[key: string]: string | number} =  {};
		for(const categoria in hotels){
			obj[categoria] = hotels[categoria as keyof Hotels][i];
		}
		//infoDeHoteles[i] = {...obj};
		infoDeHoteles[i] = obj; 
	} 
	console.log(infoDeHoteles[0]);
};

juntarInfo();










