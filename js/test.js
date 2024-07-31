"use strict"; //treat all code as new version//
//alert( 3+3 ) //we are using nodejs

//code readability should be high//


/*const accountId = 12345
let accountEmail = "fich@gmail.com"
var accountPassword  = "212121"
let accountCity = "chichawatni"*/

//console.table([accountId, accountEmail, accountCity, accountPassword])



//*******************datatypes:*************************

//string ="" , number 2 10 53power, bollen = true/false statement, null is standalone value/

// symbol = unique (return datatype)
// object ,( typeof use to show the  datatype)

console.log(typeof null); //object
console.log(typeof undefined); //undefined

//*******************conversion of datatypes:*******************************

// 44 = 44
// "44abc" = NaN=>not a number
//True = 1,false = 0 

//let isloggedin = "fiza"
//let booleanisloggedin = Boolean(isloggedin)
//console.log(booleanisloggedin);
//1=true, 0= false, "" empty string = 0 (false)
// anyname = 1(true)


  //************    operations**********  */
//it include in plus,minus mathematics

//console.log(2**2);  for add power
//console.log(2+3);
//console.log(2%3);

/**********we can also add strings***********/

let str1 = "fiza"
let str2 = " Mushtaq"
let str3 = str1 + str2
console.log(str3)


/********converstion age string phly toh baki sb b string k thor mai hi add hongyn*****************/


console.log("2" + 1 +3)
console.log(1+2+"4")


/** ******** conditon; if oe esle ans in boolean ******************/
 
/*console.log( 1!=4 )*/
//=== strickly check


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //***********************two type of memory in j.s*******************

 // 1:stack( primitive)  2:heap(non-primitive)

 //ex:
 
 let youTube = "helo"
 let anotherName =  "youTube"
 anotherName = "chaicode"
 
 console.log(youTube);
 console.log(anotherName);

 //heap ex:


 let userOne = {
    email: "fizach@gmail.com"
 }

 let userTwo = userOne
 userTwo.email = "hitesh@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)
 