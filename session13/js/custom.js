// let data = [1,2,3]

// let user = {
//     name: "marwa",
//     age: 40,
//     job: "developer"
// }

// console.log(user.name)
// console.log(user["age"]);
// const users = [
//     { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
//     { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
//     { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
//     { id: 4, name: "David", age: 35, email: "david@example.com" },
//     { id: 5, name: "Eva", age: 22, email: "eva@example.com" },
//     { id: 6, name: "Frank", age: 40, email: "frank@example.com" },
//     { id: 7, name: "Grace", age: 27, email: "grace@example.com" },
//     { id: 8, name: "Hannah", age: 31, email: "hannah@example.com" },
//     { id: 9, name: "Ian", age: 29, email: "ian@example.com" },
//     { id: 10, name: "Jane", age: 26, email: "jane@example.com" },
// ];
// console.log("user Data : ")
// users.forEach((user, ind) => {
//     console.log(`name : ${user.name}
// age: ${user.age}
// ----------------------------------`)
// })


// let user = {
//     name:"marwa",
//     age: 40,
//     print: 
// }
// print()

// function print(){
//     console.log("hello")
// }


// console.log(x)
// console.log(y)
// var x = 5
// let y = 6

// myFun()
// anyanymos
// const myFun = function () {
//     console.log("test")
// }
// arrow function
// const myFun = () => {
//     console.log("test")
// }

// myFun()



// const myFun = function (a, b = 0) {
//     a = a + 3
//     b = b + 5
//     return a+b
// }

// myFun(5,4)
// let x = "hello", y = 6
// let z = myFun(x)
// console.log(z);


// userName= "ahmed", age=20
// console.log(`your user name is ${userName} and age is ${age}`)

// const bmiCal = (h, w) =>  h / w ** 2

// let arr = [2,1,4,3,2,7,6,5,0]

// const removeOddEven = (typeOfRemove = "even")=>{
//     let modulesResult 
//     typeOfRemove=="even"? modulesResult=1 : modulesResult= 0
//     return arr.filter(el=> el%2 == modulesResult )
// }

// console.log(removeOddEven("even"))


// const sum = (...x)=>{
//     console.log(x)
// }

// sum(1,2,3,4)


// const divide = (a, b) => {
//     if(b===0) return "cann't divide by 0"
//     return a / b
// }

// console.log(divide(5, 0))

// let arr = [1,2,3]

// const addToArray = ( a , val )=>{
//     a.push(val)
// }

// console.log(arr);
// addToArray(arr, 7)
// console.log(arr);

// let user = {name:"marwa"}
// const addToUser = (user, val)=> user.age = val
// addToUser(user, 40)
// console.log(user)


// const calc = (operation, ...nums ) => {
//     switch(operation){
//         case "+": add(nums); break;
//         case "-": sub(nums); break;
//         case "*": mul(nums); break;
//         default: console.log("invalid operation")
//     }
// }
// const add = (nums)=>{
//     let result = 0
//     nums.forEach(n => result+=n);
//     return result
// }
// const mul = (nums)=>{
//     let result = 0
//     nums.forEach(n => result*=n);
//     return result
// }
// const sub = (nums)=>{
//     let result = 0
//     nums.forEach(n => result-=n);
//     return result
// }


const user = { 
    name:"marwa",
    age:40,
    print: function(){
        console.log(this)
    }
}
user.email = "marwa@techsexperts.com"
delete user.age
user.print()