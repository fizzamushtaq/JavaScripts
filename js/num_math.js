//**************************************Numbers*************************** */

const score = 300
console.log(score);

const balance = new Number(100);             //this method use for the accurate number 
console.log(balance);


console.log(balance.toString());              // conerstion of number into string:

console.log(balance.toString().length);       //to find the length of the string

console.log(balance.toFixed(2));              /// it is used in e-commerece web for fraction value


const othernum = 124.677                       // its used for precise the value
console.log(othernum.toPrecision(3));            //output 125, you must sure about the value

const otherexample = 10000000                    // use to more readable value
console.log(otherexample.toLocaleString('en-IN'));


/*********************************maths************************************************** */
/*
 
console.log(Math);                                 
console.log(Math.abs(-4));                       //abs: absolute value
console.log(Math.round(4.6));    
                                      */

console.log(Math.ceil(4.6));                  //here we can choice uper value or lower value
console.log(Math.floor(4.6));                  //here we can choice lower before the fraction  value or lower value
console.log(Math.min(4,3,9,8,1));                
console.log(Math.max(4,3,9,8,1));                

 console.log(Math.random());                  //value always in 0-1
 console.log((Math.random()*10) +1);                  //this syntax use for the exact range in 10
 console.log(Math.floor(Math.random()*10) +1);                


 const min = 10
 const max = 20
 console.log(Math.floor(Math.random(max-min) +1) + min );          // this is used to declare the min or max value:

