
let arr1=['1','1','3','4'];

let newarr1=[];
for( let i of arr1){
  console.log(i);
  newarr1.push(i);
}

newarr1.forEach((ele)=>console.log(ele));
console.log(newarr1);

let obj1={
  model:'generic'
}

let obj2= {
  namemoel:"tesla"
}

Object.setPrototypeOf(obj2,obj1);
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getOwnPropertyNames(obj2));

function class1(name,age,dinner,havedinner,restrict){
  if(!new.target){
    throw new Error("Please use new Keord ")
  }
  this.name=name;
  this.age=age;
  this.dinner=dinner;
  this.restrict=restrict;
  this.havedinner=()=>{
    if(this.dinner==true){
      return true;
    }
    else{
      return false;
    }
  }
}

let object1=new class1('srihas',21,false);
let object2=new class1('srihas',21,false);
console.log(class1.getOwnPropertyNames);
console.log(object1.havedinner());
console.log(object1.age);

class Emploee {
  #salar
  constructor(name,salar){
    this.name=name;
    this.#salar=salar;
  }
  setsalar(value){
    this.#salar=value;
  }
  getsalar(){
    return `${this.#salar}`;
  }
}

class john extends Emploee{
  havebonus(){
    return `${this.name} -- ${this.salar}`;
  }
}
let emp=new Emploee('srihas',20000);
let emp1=new john('srojasd',50000);
emp.setsalar(225255);
console.log(emp.getsalar());
console.log(emp1.getsalar());
console.log(emp1.havebonus());