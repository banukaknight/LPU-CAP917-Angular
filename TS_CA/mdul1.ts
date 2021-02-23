//class definition
export class Calc{
	//fields (variables)
	v1: number;
	v2: number;

	//constructor
	constructor(x: number, y: number){
		this.v1 = x;
		this.v2 = y;
	}

	//function-declare-sqr
	sqr(){
		console.log(`The square of first value: ${this.v1 * this.v1}`);
	}
	//function-declare-cube
	cube(){
		console.log(`The cube of second value: ${this.v2 * this.v2 * this.v2}`);
	}
}