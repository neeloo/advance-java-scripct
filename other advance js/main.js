//scope**************

// let a = 10;
// function outer() {
//     let b = 20;

//     function inner() {
//         let c = 30;
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();


//closure**************

// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     //inner();
//     return inner;
// }
// //outer();
// const fn = outer();
// fn();
// fn();

//***************function currying */

// function sum(a, b, c) {
//     return a + b + c;
// }
// //console.log(sum(2,3,5));

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);

//             }
//         }
//     }
// }
// const num = curry(sum);
// console.log(num(2)(3)(6));

// const add2 = num(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);


//this keywords********************

// function Name(name){
//     console.log(`my name is ${name}`)
// }
// Name('nilu')
// Name('nilu singh');

//how to determine 'this'///////////////////

//impersonlicit

// const person={
//     name:'swatantra',
//     sayMyName:function(){
//       console.log(`my name is a ${this.name}`)
//     },
// }
// person.sayMyName();

// // //expersonlicit

// function sayMyName(){
//     console.log(`my name is  ${this.name}`)
// }
// sayMyName.call(person)

// // //new binding

// function person(name){
//     this.name=name
// }
// const a1=new person('nilu');
// const a2=new person('niliswatantara');
// console.log(a1.name,a2.name);

// //default binding

// sayMyName();



//order of personrecendance////////////////

// function person(fname, lname) {
//     this.firstname = fname;
//     this.lastname = lname;
// }
// const person1 = new person('nilu', 'singh')
// const person2 = new person('swatantar', 'verma')

// person1.getFullName = function () {
//     return this.firstname + ' ' + this.lastname
// }
// console.log(person1.getFullName());

// person2.getFullName = function () {
//     return this.firstname + ' ' + this.lastname
// }
// console.log(person2.getFullName());

//    //   prototype******************
// person.prototype.getFullName = function () {
//     return this.firstname + ' ' + this.lastname
// }
// console.log(person1.getFullName());
// console.log(person2.getFullName());


//inheritance in prototype function**********

// function person(fname, lname) {
//     this.firstname = fname;
//     this.lastname = lname;
// }
// person.prototype.getFullName = function () {
//     return this.firstname + ' ' + this.lastname
// }
// function superHero(fname,lname){
//     person.call(this,fname,lname)
//     this.issuperHero=true;
// }
// superHero.prototype.fightCrime=function(){
//     console.log('Fighting crime');
// }
// superHero.prototype=Object.create(person.prototype)

// const batman=new superHero('nilu','singh');
// superHero.prototype.constructor=superHero
// console.log(batman.getFullName())


//use of constructor****************

class person{
    constructor(fname,lname){
        this.firstname=fname
        this.lastname=lname
    }
    sayName(){
        return this.firstname + ' ' + this.lastname
    }
   
}
const p1=new person('swatantar','verma')
console.log(p1.sayName())

class superHero extends person{
    constructor(fname,lname){
        super(fname,lname)
        this.issuperHero=true
    }
    fightCrime(){
        console.log('fighting crime')
    }
}
const n=new person('nilu','swatantar')
console.log(n.sayName())








