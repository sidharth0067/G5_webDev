

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
