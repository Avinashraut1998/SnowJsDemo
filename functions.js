/*
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of 
statements that performs a task or calculates a value, but for a procedure to qualify as a function, 
it should take some input and return an output where there is some obvious relationship between the input and the output. 
To use a function, you must define it somewhere in the scope from which you wish to call it.

A JavaScript function is a block of code designed to perform a particular task. 

A JavaScript function is executed when "something" invokes it (calls it).

*/

// function sumOfTwo() {
//        console.log("This is our javascript function");  
// }

// sumOfTwo();    // Function Invocation


// function sum() {
//    let a = 100;
//    let b = 100;
//    let c = a + b
//    return c;
    
// }

// console.log(sum());

/*
The return keyword in JavaScript serves to end the execution of a function and specify the value that the function should output.
*/
 

// function sumOfVals() {
//     let a = 135;
//     let b = 135;
//     console.log("Before return");
//     return a * b;  
// }

// console.log(sumOfVals());

// sumOfVals()


// function sumOfTwo() {
//     let a = "Royal"
//     let b = "Palace"
//     let c = "Udaipur"
    
//     return `The most bueautiful palace in rajasthan is ${a} ${b} ${c}`

// }

// console.log(sumOfTwo());

// parameters
// function sumOfTwoVals(num1, num2, num3) {
//    return num1 + num2 + num3
// }


// // Arguments
// console.log(sumOfTwoVals(5, 5, 10));   

// sumOfTwoVals()



// function sumOfTwoVals(a, b ,c) {
//      let res = a + b + c;
//      return res;
      
// }

// console.log(sumOfTwoVals(5, 10, 20))

// rest operator

// function sumOfVals(...nums) {
//     return nums;
// }

// console.log(sumOfVals(500, 1000, 2000));



// this keyword

// let obj = {
//     userName : "ViratK",
//     Fname : "Virat",
//     Lname : "Kohli",
//     details : function userDetail(){
//            console.log(`User details : ${this.Fname} ${this.Lname} and userName is : ${this.userName}`);
           
//     }
// }
// console.log(obj.details());



// const user = {  
//     userName : "ViratK",
//     Fname : "Virat",
//     Lname : "Kohli",  
// }

// function handleObj(anyObj){
//    console.log(`user name : ${anyObj.userName}  
//                 Full name : ${anyObj.Fname} ${anyObj.Lname}`);
   
// }

// handleObj(user)


//Arrow Function


// function sumOfTwo(a, b , c) {
//     console.log(a , b , c);
    
// }

// sumOfTwo(5, 10, 15)



//Arrow Function
// const sumOfTwo = () => {
//     console.log("this is our arrow function");
    
// }

// sumOfTwo()


// const sumOfTwoVals = (num1, num2) => {
//       return num1 * num2;
// }

// console.log(sumOfTwoVals(50, 10));


// IIFE 
// Immediately Invoked Function Expression (IIFE)

// function fun1 () {
//     console.log("Normal Function");
    
// }


// const fun2 = () => {
//     console.log("Arrow Function");
    
// }

// (function Fun3() {
//     console.log("IIFE Immediately Invoked Function Expression");
    
// })()


