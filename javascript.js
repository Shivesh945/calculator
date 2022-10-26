// var a=0;
// if (a>0) {
//     console.log("Positive Number")
// }else if(a<0){
//     console.log("negitive Number")
// }else{
//     console.log("equal to 0")
// }

// var a=5;
// while(a>=1){
//     console.log(a);
//     a--;
// }
// var a;
// if( typeof(a) ) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }
// function sub(a , b){
// console.log(a , b);
// return a-b;
// }
// var result=sub(10,6);

// console.log(result);

// function mul(a,b){
//     console.log(a,b);
//     return a*b;
// }
// var result=mul(1,1);
// console.log(result);

// console.log(j);
// function ss(){
//     console.log(a);
//     var a=10;
// }
// var j=10;

// x = 5;
// console.log(x);
// var x;

// hoisted();

// function hoisted() {
//     console.log('Hoisted');
// }
// function multiply(a, b) {
//     return a*b;
// };

// console.log(multiply);
// var a = 10;

// function test() {
//     var a = 20;
// }

// test(); 
// console.log(a);


// var arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);


// var arr=new Array(5);
// arr[1]=500;
// arr[2]=23;
// arr[3]=50;

// arr.push[5];
// console.log(arr);
// var arr=[1,2,3,5];


// arr.splice(2,0,5,5)
// console.log(arr);

// var arr=[1,2,3,4,5,6];

// // for(var i=0; i<=arr.length; i++){
// // console.log(arr[i]);
// // }
// function print(ele){
// console.log(ele);
// }
// arr.forEach(print);


// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'three') {
//         words.shift();
//     }
// });

// var color = ['red', 'orange', 'blue', 'violet'];

// var removed = color.splice(2);

// console.log(color);
// console.log(removed);


// function a(){
//     function b() {
//         return 3;
//     }

//     return b();

//     function b() {
//         return 8;
//    }
// } 

// console.log(a());

// var city = {Mau:"275101",Sahadatpura: 656};
// city.kopagunj = 275305;
// city.rasra=226017;
// city["shivesh"]=23;
// delete city["Mau"]
// console.log(city);


// var arr=[1,2,3,4];
// arr[5]="Shivesh";
// console.log(arr);

// var sec=10;
// for(var i=10;i<sec;i--){
//     console.log(sec[i]);
// }

// function sayhello() {
//     console.log("Hello");
// }

// setInterval(sayhello,3000);

var sec=10;
function sayhello(){
    console.log("Say Hello" ,sec);
    sec--;
    if(sec==0){
        clearInterval(is)
    }
}

var is= setInterval(sayhello, 3000)


var d = {h: 2, j: 3}

var e = d
var f = {...d}

console.log(e === d)
console.log(f === d) 