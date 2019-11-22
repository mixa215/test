// let num = 20;

// function showFirsMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirsMessage("Hellow World!");
// console.log(num);



// let calc = function(a,b) {
//     return(a + b);
// }
let calc = (a,b) => a+b

console.log(calc(3,4));

console.log(calc(8,4));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());