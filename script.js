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

function grandparent(){
    var a = 200;
    console.log(a);
    function parent(){
        var b = 400;
        console.log(b);
        
        function child(){
            var c = 800;
            console.log(c);

            console.log(a);
        }
        console.log("this is different line")
        child();
    }
    parent();
}
grandparent();

console.log("let scope ")

function grandparent(){
    let a = 200;
    console.log(a);
    function parent(){
        let b = 400;
        console.log(b);
        
        function child(){
            let c = 800;
            console.log(c);

            console.log(a);
        }
        console.log("this is different line")
        child();
    }
    parent();
}
grandparent();