// console.log("Hello world");

// var a=200;
// console.log(a)
// function abc(){
//     console.log("Hello World");
// }

// var a = 322;

// var b=5000;

// console.log(b);

// setTimeout(()=>{
//     console.log("I am SetTimeout");
// },2000);

// console.log("End of Program");

// xyz();

// var xyz = () =>{
//     console.log("this is xyz function");
// }

// xyz();
// console.log("end");

// function grandparent(){
//     var a = 200;
//     console.log(a);
//     function parent(){
//         var b = 400;
//         console.log(b);
        
//         function child(){
//             var c = 800;
//             console.log(c);

//             console.log(a);
//         }
//         console.log("this is different line")
//         child();
//     }
//     parent();
// }
// grandparent();

// console.log("let scope ")

// function grandparent(){
//     let a = 200;
//     console.log(a);
//     function parent(){
//         let b = 400;
//         console.log(b);
        
//         function child(){
//             let c = 800;
//             console.log(c);

//             console.log(a);
//         }
//         console.log("this is different line")
//         child();
//     }
//     parent();
// }
// grandparent();





// 2 july 2025

// function calculate(param1){
//     console.log("calculate  BL");
//     param1();
// }
// var sumOfTwo=()=>{
//     console.log("Sum of Two Working");

// }
// calculate(sumOfTwo);


// Higher Order Functions
// function calculate(logicFunction,a,b){
//     return logicFunction(a,b);
// }

// // Logical Functions
// function add(a,b){
//     return a+b;
// }

// // Logical Functions
// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5));
// console.log(calculate(sub,3,5));

// function Task(logicfunction,name,fees){
//     return logicfunction(name,fees);
//     return logicfunction(fees);
//     return greeting(name,fees,EMI);
// }

// function StudentDetails(name,fees){
//     return {name,fees};
// }
// var fee=0;
// function EMI(fees){
//     fee = fees/10;
//     return fee
// }

// function greeting(name,fees,emi){
//     return `Student name is ${name} having fees ${fees} with emi ${emi}`;
// }
// console.log(StudentDetails("Aakash",30000));
// console.log(EMI(30000));
// console.log(greeting("Aakash",30000,fee))


// setTimeout(()=>{
//     console.log("hello settimeout");
// },3000)


// setInterval(() => {
//     console.log("hello setInterval");
// }, 2000);


// DAY 3

console.log("start script");

// function walkinRes(){
//     setTimeout(() => {
//         console.log("i am going in the restuarant");
//     }, 5000);
// }


// function checkMenu(){
//     setTimeout(() => {
//         console.log("chrecking menu");
//     }, 2000);
// }

// function walkinRes(cb){
//     console.log("walking in hotel");
//     setTimeout(cb,2000);
// }

// function checkingMenu(cb){
//     console.log("checking menu now");
//     setTimeout(cb,4000);
// }

// function ordering(cb){
//     console.log("ordering food");
//     setTimeout(cb,5000);
// }

// function havingLunch(cb){
//     console.log("having my lunch");
//     setTimeout(cb,7000);

// }

// function payBill(){
//     console.log("paying the bill");
// }

// walkinRes(()=>{
//     checkingMenu(()=>{
//         ordering(()=>{
//             havingLunch(()=>{
//                 payBill();
//             });
//         });
//     });
// });


// var cart = ["shoes", "shirt", "watches"];
// var prices = {
//     "shoes" : 3000,
//     "shirt" : 1999,
//     "watches": 3000
// };

// function createOrder(cart){
//     let totalPrice = 0;
//     let noOfItem = cart.length;
//     for(let item of prices){
//         totalPrice+=prices[item]||0;
//     }
//     return {totalPrice,noOfItem};

// }

// function placeOrder(price, noOfItem){
//     //generate order id and go to the payment gateway;
// const orderId = Math.random;
// console.log(`Order ID: ${orderId}`);
// console.log(`Total items: ${noOfItem} `);
// console.log(`Total price: ${totalPrice}`);


// const paymentSuccess = orderPayment(orderId,totalPrice,noOfItem);
// return paymentSuccess;

// }

// function orderPayment(order,price,noOfItem){
//     //place order
//     console.log(`processing payment for order ${orderId}. please wait!`);
//     console.log(`Amount: ${totalPrice}`);


//     const paymentSuccessful = true;

//     if(paymentSuccessful){
//         console.log(`payment successful for order ID ${orderId}`);
//         return true;
//     }
//     else{
//         console.log(`payment failed for order ID ${orderId}`);
//         return true;
//     }

// }

// function orderStatus(){
//     console.log(`Order ${orderId} is successful`);
//     console.log(`total items : ${noOfItem}`);
//     console.log(`Total amount paid ${totalPrice}`);

// }



// createOrder(()=>{
//     placeOrder(()=>{
//         orderPayment(()=>{
//             orderStatus();
//         });
//     });
// });





// var cart = ["shoes", "shirt", "watches"];
// var prices = {
//     "shoes": 3000,
//     "shirt": 1999,
//     "watches": 3000
// };

// function createOrder(cb) {
//     let totalPrice = 0;
//     let noOfItem = cart.length;

//     // Calculate total price based on items in the cart
//     for (let item of cart) {
//         totalPrice += prices[item] || 0; // Add price if item exists in prices
//     }

//     // Simulate asynchronous behavior with setTimeout
//     setTimeout(() => {
//         console.log(`Order created: Total Price = $${totalPrice}, Number of Items = ${noOfItem}`);
//         cb(totalPrice, noOfItem); // Call the callback with totalPrice and noOfItem
//     }, 1000); // 1 second delay
// }

// function placeOrder(totalPrice, noOfItem, cb) {
//     // Generate a unique order ID
//     const orderId = Math.floor(Math.random() * 1000000); // Random order ID
//     console.log(`Order ID: ${orderId}`);
//     console.log(`Total items: ${noOfItem}`);
//     console.log(`Total price: $${totalPrice}`);

//     // Simulate going to the payment gateway
//     setTimeout(() => {
//         const paymentSuccess = orderPayment(orderId, totalPrice, noOfItem);
//         cb(paymentSuccess); // Call the callback with payment success status
//     }, 1000); // 1 second delay
// }

// function orderPayment(orderId, totalPrice, noOfItem) {
//     // Simulate payment processing
//     console.log(`Processing payment for order ${orderId}. Please wait!`);
//     console.log(`Amount: $${totalPrice}`);

//     // Simulate a successful payment
//     const paymentSuccessful = true; // In a real scenario, this would depend on payment gateway response

//     if (paymentSuccessful) {
//         console.log(`Payment successful for order ID ${orderId}`);
//         return true; // Indicate that the order was placed successfully
//     } else {
//         console.log(`Payment failed for order ID ${orderId}`);
//         return false; // Indicate that the order was not placed
//     }
// }

// function orderStatus(orderId, totalPrice, noOfItem) {
//     console.log(`Order ${orderId} is successful`);
//     console.log(`Total items: ${noOfItem}`);
//     console.log(`Total amount paid: $${totalPrice}`);
// }

// // Main flow
// createOrder((totalPrice, noOfItem) => {
//     placeOrder(totalPrice, noOfItem, (paymentSuccess) => {
//         if (paymentSuccess) {
//             orderStatus(Math.floor(Math.random() * 1000000), totalPrice, noOfItem); // Generate a new order ID for status
//         }
//     });
// });



//monday - 7th july

// console.log("start script");

// let arr = [2,4,6,7,8];

// const newArr = arr.map((x)=>x*2);

// console.log(newArr);


// //PROTOTYPES ___in js

// let arr2 = [5,5,3,5,7,8];
// function doubleData(x){
//     return x*x;
// }
// Array.prototype.mapReplica = function(logic) {
//     let outputArr = [];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }

// const myProtoData = arr2.mapReplica(doubleData);

// console.log(myProtoData);



// /// filters in js 
// console.log("filters in js");

// const word= ["spray", "hello", "present", "world"];

// const result = word.map((word)=> word.length>6);

// console.log(result);

// function check(x){
//     if(x.length>6){
//         return x;
//     }
//     return;
// }

// Array.prototype.checkLength = function(logic) {
//     let outputArr = [];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             outputArr.push(this[i]);
//         }
//     }
//     return outputArr;
// }

// const mapRep = word.mapReplica((word)=>word.length>6);

// const ProtoResult = word.checkLength(check);
// console.log(ProtoResult);
// console.log(result);

// REDUCE IN JS

// console.log("reduce in js");

// const array1 = [1,2,4,5,7,8];

// const intitialValue = 0;

// function arraySum(x){
//     let sum =0;
//     for(let i=0;i<x.length;i++){
//         sum+=x[i];
//     }
//     return sum;
// }


// Array.prototype.reduced = function(logic){
//     return (logic(this));
// }

// console.log("prototype- ");
// const result = array1.reduced(arraySum);
// console.log(result);

// const sumWithInitial = array1.reduce((accumulator,currentValue)=> accumulator + currentValue,intitialValue);

// console.log(sumWithInitial);


// //sir's method 

// // // reduce prototype
// function sum1(acc,curr){
    
//     return acc+curr;
// }


// Array.prototype.reduceReplica=function(logic,initialValue){
//         let result=initialValue;

//         for(let i=0;i<this.length;i++){
//             result=logic(result,this[i]);
//         }
//         return result;
// }

// const result2 =array1.reduceReplica((acc,curr)=>acc+curr,0); // here (acc, curr)=>acc+curr is the logic as a whole and 0 is initial value given;
// console.log(result2);


// console.log("8th july - promises");

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("foo foo trutles");
//     },3000);
// });

// myPromise.then((res)=> console.log(res));
// myPromise.catch((err)=> console.log(err));

// console.log(myPromise);

// function pranshPlacement(placementStep,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("pransh got the placement" + placementStep);
//             console.log(""+placementStep);
//         }, delay);
//     });
// }

// pranshPlacement("pransh got the placement",5000)
// .then(()=> pranshPlacement("Party time",3000))
// .then(()=> pranshPlacement("working",5000))
// .then(()=> pranshPlacement("layed off",3000))
// .catch((err)=> console.log(err));


// const myPromise = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         reject("hola");
//     },2000)
// });


// const myPromise2 = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         resolve("amigos");
//     },4000)
// });


// const myPromise3 = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         resolve("xyc");
//     },6000)
// });


// const myPromise4 = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         resolve("nevermind");
//     },8000)
// });


// const myPromise5 = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         resolve("chal hatt");
//     },10000)
// });

// Promise.all([myPromise,myPromise2,myPromise3,myPromise4,myPromise5])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));



// Promise.allSettled([myPromise,myPromise2,myPromise3,myPromise4,myPromise5])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));


// Promise.any([myPromise,myPromise2,myPromise3,myPromise4,myPromise5])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));



// // 
// Promise.race([myPromise,myPromise2,myPromise3,myPromise4,myPromise5])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));


// //july 16th
// console.log("16th july");

// console.log("17th july  - event emitter NOde JS");

// const EventEmitter = require('node:events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('start',()=>{
//     console.log("started");
// })
// eventEmitter.emit('start');

// eventEmitter.on('start',(number)=>{
//     console.log(`started ${number}`);
// })

// eventEmitter.emit("start",8);

// eventEmitter.on('start', (start, end) => {
//   console.log(`started from ${start} to ${end}`);
// });

// eventEmitter.emit('start', 1, 100);


// eventEmitter.once('start', (start, end) => {
//   console.log(`started from ${start} to ${end}`);
// });

// eventEmitter.emit('start', 1, 100);

// at emit and on 'start' or any other name must be same 