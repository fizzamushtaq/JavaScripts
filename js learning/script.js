//write somthing on the console of web page
/*fullname = "fiza mushtaq";
age = 20;
price = 30.30
console.log(age);
const student = {
    fullName: "fizza",
    age: 20,
    cgpa: 3.78,
    ispass: true
};
student["age"] = student["age"] + 1;
console.log(student["age"])*/
//arthimetic operators
/*let a = 5;
let b = 6;
console.log("a = ", a, " & b = ", b);
console.log("a - b = ", a-b);
console.log("a + b = ", a + b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); //5 power 6
//unary  operators

let c = 8;
let d = 6;

console.log("c = ", c, " & d = ", d);
a++;
console.log("c = ", c);
//assignment operators
let e = 8;
let f = 6;
e *= 3; //e = e * 3
console.log("e = ", e); // 24
alert("helo fiza")
//write anything on web page.
document.write("java learning");
//three types of  variable scope:
//1: globle scope: visible from anywhere in the program: for example
/*fullname = "fiza mushtaq";
age = 20;
price = 30.30
console.log(age);
// its can be write in the function or not does'nt make error:
let r = 99;
if( r>5 ){
    let s = 30;
    console.log(s);
  
}*/
// 2: function scope: its only run when uh write something in "fs"

function example(){
    var fs = "helo fiza";

    console.log(fs);

}
example();

//block scope example: it is only access by funtion block variable:

function example(){
    if(true){
        let bv = "hows ur day";
        console.log(bv);

    }

}
example();
// conditional statement 

let value = "helo";

switch (typeof value) {
    case "Number":
        console.log("Number")
    break;
        case "string":
             console.log("string")
            break;
            case "Boolean":
                console.log("Boolean")
                 break;
    default:
        console.log("other");
        break;
}

//other example of switch condition

let dayName = 4;

switch(dayName){
    case 1:
        dayName = "Sunday";
        break;
        case 2:
        dayName = "Monday";
        break;
        case 3:
        dayName = "Tuesday";
        break;
        case 4:
        dayName = "Wednesday";
        break;
        case 5:
        dayName = "Thursday";
        break;
        case 6:
        dayName = "Friday";
        break;
        case 7:
        dayName = "Saturday";
        break;
        default:
            dayName = "invalid day number"
            break;

}
console.log("the day is:" + dayName);

//ternary operator

let age = 16;
let msg = (age >= 18) ? "you are adult" : "you are a minor";
console.log(msg);
//loops: use to repeat a block of code
//for loop:
for(let f = 1; f <= 10; f++){
    console.log(f);

}
// while loop
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}
//do...while loop

let d = 3;

do{
    console.log(d)
    d++;
}while(d<=5);

//parameters and arguments example: (firstname, lastname) these are varaible when we call parameter and rabia("bill", "gates") this is the argument when we call to excecuate the in body:

function rabia(firstname, lastname){
    console.log("hi " + firstname +" " + lastname);
}
rabia("bill", "gates");
//default parameter

/*function sum( x, y){
    console.log(x+y);

}
sum(20,30);
//case
function sum( x, y){
    console.log(x+y);

}
sum(20); */// 10 + undefined so the output is NaN. if you want the output then it should be y=0 so the output become 20
//array function: compact way to write a function
function sum(a, b){
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
};
arrowSum(3, 6);
//arr.foreach method
let Numbers = [1,2,3,4,];

Numbers.forEach((Numbers)=>{
    console.log(Numbers * Numbers);
} );








