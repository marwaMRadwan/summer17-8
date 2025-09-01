// conditional statements
// (true)? 1: 2
// if(cond){

// }
// else{

// }

// let age = +prompt("please enter your age")
// document.write(age, typeof age)

// if(age >= 21) {
//     document.writeln("adult")
// }
// else{
//     document.writeln("child")
// }

// if( age >= 60) document.writeln("old")
// else if( age >= 21) document.writeln("old")
// else if( age > 0) document.writeln("old")
// else  document.writeln("invalid age value")

/*
age < 12.    ticket = 5
age>12 and age <18.   10
<60.   20
> 60.  15
*/

// let numOfPassengers = prompt("no of passengers")
// let age = prompt("age")
// let price
// if(age<0) document.writeln("invalid age")
// else if( age < 12 ) price = 5
// else if( age < 18 ) price = 10
// else if( age < 60 ) price = 20
// else price = 15

// if(price){
//     document.writeln( numOfPassengers * price)
// }


/*
purchase  >= 100. => discount 20%
purchase  >= 50. => discount 10%
purchase  < 50 => discount 0%

*/

// switch case
// let d = 1

// switch(d){
//     case 1: document.writeln("sunday"); break
//     case 2: document.writeln("monday"); break
//     case 3: document.writeln("tue"); break
//     case 4: document.writeln("wed"); break
//     case 5: document.writeln("thu"); break
//     case 6: document.writeln("fri"); break
//     case 7: document.writeln("sat"); break
//     default: document.writeln("invalid")
// }

// loops
// for ,for in ,for of ,foreach, while, do while
// let num=1, sum = 0
// while(num<=10){
//     sum += num. // 0 1. 1 2. 3 3  6 4. 
//     num++
// }
// console.log(sum)

// let num = +prompt("enter a number"), sum=0

// while(num>0){
//     sum+=num
//     num = +prompt("enter a number")
// }

// console.log(sum)

// let num, sum=0
// do{
//     num=+prompt("enter a number")
//     if(num<0) break

//     sum+=num
// }while(true)

// console.log(sum)

// let sum=0
// for(let ind=1; ind<10; i++){
//     sum+=ind
// }

// let x = 1
// while(x<10){
//     sum+=x
//     x++
// }

// let xx=0
// for(;xx==5;){
//     xx= prompt("enter val")
// }

// for(;;){

// }
// while(true){

// }


//objects
// { } []
// let a = [ 1, false, 5, "hello", 3.3 ]
// let b = new Array(1,3,"hh", true)
// a[60] = 3
// console.log(a[59])
// console.log(a.length);
// console.log(a[a.length-1]);
// console.log(a.at(2))

// items = ["Item01", "Item02", "Item03", "Item04", "Item05","Item06", "Item07", "Item08", "Item09", "Item10","Item11", "Item12", "Item13", "Item14", "Item15"]

// items.push("test")
// console.log(items)
// items.pop()
// console.log(items)
// items.shift()
// console.log(items)
// items.unshift("hello")
// console.log(items)

// for(let i = 0; i< items.length; i++){
//     console.log(items[i]);
// }
// for(let item of items){
//     console.log(item);
// }

// for(let k in items){
//     console.log(items[k]);
// }
// let sum=0
// items.forEach((item, index, arr)=>{
//     sum+=item    
// });

let data = ["HTML", "CSS", "PHP", "html"], data2 = [1, 2, 3]
// data.splice(0,2)
// data.splice(2, 0, "JS", "Bootstrap")
// console.log(data);

// data = data.concat(data2)
// console.log(data);

// console.log(data.lastIndexOf("HTML"))

let result = data.filter( function(el) {
    return el.toLowerCase() == "html"
})
console.log(result);
