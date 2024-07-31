/********************              why we don't use "var" in modern j.s              ***************** */

//                                    this example help to understand the concept***********

var a = 900
let b = 500

if (true) {
    var a = 100
    let b = 200
    const c = 400 
    console.log("inner:", b); 
    
}
console.log(b);
console.log(a);
//console.log(c);

/*********************************   nested scope      ************************** */

function one(totalperson) {
    const firstperson = "laiba"
    function two(insideperson) {
        const loggin = "website"
        console.log(firstperson);
        
    }
    two()
   // console.log(loggin);        // it can't be execute becoz parent function cannot be excess  value from its child but the child can: 
    
}
one()         // this function not be excute:


//  example for the " if " 

if (true) {
    const firstperson = "nazish"
    if (firstperson === "nazish") {
        const website = " youtube"
        console.log(firstperson + website);
        
    }
   // console.log(website);             //error: it can't be excess outside the child scope
    
}

//  console.log(firstperson);            // error: it can't be excess outside the scope:

/*+++++++++++++++++++             intersting                 ++++++++++++++++++++++*/

//    function can be write into the variable:

console.log(addone( 4));            // it can be write before function:
function addone(num) {
    return num + 1
    
}

console.log(addone( 4)); 

//    function can be write into the variable:

const add2 = function helo(num2) {
    return num2 + 2
    
}

console.log(add2(2));             // it can't be excute defor the variable: otherwise it cause error