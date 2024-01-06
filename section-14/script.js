'use strict';

const Person=function(firstName, birthYear){
 this.firstName=firstName;
 this.birthYear=birthYear;

 //never to this
 this.calcAge=function(){
    console.log(2037-this.birthYear);
 }
}
const jonas = new Person('Jonas',1991)

//1. New {} is created
//2. fubctuin is called this={}
//3. {} linked to prototype
//4. function automaticly return {}
console.log(jonas);
const matilda = new Person('Matilda',2014)
console.log(jonas, matilda);
const jay='jay'
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

