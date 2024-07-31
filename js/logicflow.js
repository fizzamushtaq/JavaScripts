const username = true
const temperature = 40
if (temperature === 40) {
    console.log("tem. less than 50");
    
} else {
    console.log("greater than 50");
    
}

const score = 100
if (score > 50) {
    const power = "fly"
    console.log(`this the give ${power}`);
    
}

// other way to write a scope 

const balance = 1000
if (balance > 500)  console.log("test");           // but this mehtod is not preferable:


//********************  nested conditons    *****/

const budget = 1000
if (budget < 300) {
    console.log("budget less than 300");
    
} else if (budget < 500) {
    console.log("budget less than 500");
    
} else if (budget < 900) {
    console.log("budget less than 900");
    
} else {
    console.log(" budget less than 1200");
    
}


const userloggin = true
const debitcard = true
const loginfromgoogle = false
const loginfromemail = true

//                       logic operators

if (userloggin && debitcard) {
    console.log("allow to acess for shopping");
    
} else {
    console.log(" this user not allow for shooping, first loogin");
}
if (loginfromgoogle || loginfromemail ) {                                       //   || is use for " OR " condition
    console.log("user loggin");
    
} 

//    Nullish coalescing operator (??)      >  sare kahani null or undefined py hai.  this mehtod use to remove error

let val1;
//      val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);
 

//      Terniary operator          */

 //  syntax         condition ? true : false ;

 const teaprice = 100
 teaprice <= 80 ?  console.log(" less than 80"):  console.log(" greater than 80");


/***************************    Switch statement ********************* */

const month = 3

switch (month) {
    case 1: 
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 3:
        console.log("apirl");
        break;                            //  it match all the breakpoint except default: it can use by string or other datatype

    default:
        console.log("default case match");
        break;
}


/****************  true & false value   ************************ */

// falsy value : 

// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan (not a number)

// truthy values: 
//    "0" , 'false' , "  " , [ ] , { } , function(){} ,


const emptyobhj = {}

if (Object.keys(emptyobhj).length == 0) {
    console.log("object is empty");
    
}

