//recurtion
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }

}
alert(pow(2, 4));

//closure**************
var add = (function () {
    var count = 0;
    return function () {
        count += 1;
        return count;
    }
})
add();
add();

//new Function**************
// syntex of function
//let fun=new Function([arg1,arg2,... argN],functionBody);

let sum = new Function('a', 'b', 'return a+b');
alert(sum(2, 3));

//Array function*********
nam = () => {
    document.getElementById("demo").innerHTML .this;
}
//window object call the function
window.addEventListener("load", nam);
//buttom object call function
document.getElementById("btn").addEventListener("click", nam);


//rest parameter *********
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2));
console.log(fun(1, 2, 3));
console.log(fun(3, 5, 7, 8));

//spread oprater*****
let a=[1,2,3];
let b=[4,5,6];
a=[...a,...b]; 
console.log(a); //[1,2,3,4,5,6]

//global object***********
alert("Hellow");
//similar
window.alert("Hellow");

//function objecct*************
function sayName(){
    alert("hi");
}
alert(sayName.name); //sayName
function f2(a,b){}
function many(a,b,... more){}
alert(f2.length); //2
alert(many.length); //2

//SetTimeOut and SetInterval***************
function say(){
    alert("hii");
}
setTimeout(say,1000);

let timeout=setInterval(()=> alert('tick'),2000);

setTimeout(()=>{clearInterval(timeout);alert('stop');},5000);

//function binding**************
let user={
    firstname:"nilu"
}
function fun(){
    alert(this.firstname);
}
let funuser=fun.bind(user);
funuser(); //nilu


//javascripct namespace**********

let num=5;
var obj={};
var str="hellow nilu";
function sum(x,y){
    total=x+y;
    return total;
}
numr=sum(3,4);


//prototype************
//prototype inheritance********
let pet={
    eat:true
}
let dog={
    jump:true
}
dog._proto_ =pet;
alert(dog.jump);   //true
alert(dog.eat);     //true


let pet={
    eat:
}
