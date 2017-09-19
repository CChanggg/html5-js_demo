// typescript  javascript超集
// 带来类型的概念
// typescript将为js编程带来静态的类型检查，发生在运行之前
// function greeter(person:string){
//     return `Hello ${person}`
// }
// const name="旅梦开发团"
// console.log(greeter(name))
// let isDone:boolean=false;
// // let createdByNewBoolean:boolean=new Boolean(1);
// let decLiteral:number=6;
// let infinityNumber:number=Infinity;
// let notANumber:number=NaN;
// let myName:string='Xcat Liu';
// let sentence:string=`Hello,my name is ${myName}`;


// function  alertName():void{
//     console.log('My name is xcatliu');
// }

// let u:undefined=undefined;
// let n:null=null;

// // any可以是任何类型
// let myFavoriteNumber:any='乔丹';
// myFavoriteNumber=23
// let anyThing:any='hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// typescript可以做类型的推导
// let something='seven';
// something=7;

// 联合类型
let myFavoriteNumber:string|number;
myFavoriteNumber='seven';
myFavoriteNumber=7;
// myFavoriteNumber=false;

// function getLength(something:string|number):string{
//     return something.toString();
// }


// typescript会进行静态的类型检查
let myFavoriteNumber:string|number;
myFavoriteNumber='seven';
console.log(myFavoriteNumber.length);
myFavoriteNumber=7;
console.log(myFavoriteNumber.length);