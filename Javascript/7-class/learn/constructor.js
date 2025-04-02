class Human {

	waterType;
	skinType;

	constructor( skinType ) {
		this.skinType = skinType;
		this.waterType = 'Filter Water'
	}

    drinkWater( waterType ){
		this.waterType = waterType;
	}
	
	getWaterType(){
		console.log(this.waterType)
	}
}

var rameshBhai = new Human();
// rameshBhai.drinkWater('Filter Water');
rameshBhai.drinkWater('Simple Water');
rameshBhai.getWaterType();