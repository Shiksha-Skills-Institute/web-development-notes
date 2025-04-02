class Human {
	waterType;

	waterTypes = ['Filter Water', 'Simple Water', 'Mineral Water'];

	searchWaterTypes( waterType ){
		//Loop
		//Compare
		//Match
	}
   	drinkWater( waterType ){
		this.waterType = waterType;
	}
	getWaterType(){
		console.log(this.waterType);
	}
}

var rameshBhai = new Human();
// rameshBhai.drinkWater('Filter Water');
rameshBhai.drinkWater('Simple Water');
rameshBhai.getWaterType();