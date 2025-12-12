
let a=10;
let b=20;
console.log(a+b);

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

mul=(a,b)=>{
    return a*b;
}

console.log(add(2,3));
console.log(sub(4,9));
console.log(mul(2,2));

const person=new Object({
    firstname:"Aravind",
    lastname:"kumar",
    age:22
})

console.log(`hello ${person.firstname+" "+person.lastname} your age is ${person.age}`);

let m=function car(cname,color){
    this.cname=cname,
    this.color=color,
    this.type="manual"
}
let car1=new m("kia","white");

console.log(`car name is ${car1.cname} and color is ${car1.color} and type is ${car1.type}`);

let txt="";
for(let x in car1){
    txt+=car1[x]+" ";
}
console.log(txt);
const d=new Date(2025-11-10)
console.log(d);



