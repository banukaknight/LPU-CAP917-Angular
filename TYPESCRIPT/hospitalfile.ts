export class hospital{
	id: number;
	firstName: string;
	lastName: string;
	MobNo: number

	constructor(var1: number, var2:string, var3: string, var4: number){
	  this.id =var1;
	  this.firstName =var2;
	  this.lastName =var3;
	  this.MobNo =var4;
	}//end constructor

	detail(){
	  console.log(`${this.id}, ${this.firstName}, ${this.lastName}, ${this.MobNo}`);
	}//end detail func
}//end class




const first = new hospital(1, "Aparn", "sharma", 34234234); //creating an obj
var second = new hospital(2, "John", "Wats", 54545454);

export class doctor{
	id: number;
	position: string;

	constructor(var1: number, var2:string){
	  this.id =var1;
	  this.position =var2;
	}//end constructor

	info(){
	  console.log(`${this.id}, ${this.position}`);
	}//end detail func
}//end class