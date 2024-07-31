/*
function country (city, ocean) {
    console.log(city + ocean);
    
}                                           

const result = country("lahore",   "indianocean")
console.log(result);           */                           //output: datatype is undefined 

// other method to write a function:

function country (city, ocean) {
   //  let result= city + ocean
   //  return result
   return city + ocean
    
}
const result = country("lahore",   "indianocean")

console.log("result: " ,result);

function userloggin(username = "fiza") {                      // we can also add default value with parameters:
    if (!username) {                              //   ( username === undefined)   condition statement other written syntax
        console.log("please enter your username");
        
    }                                                               // this condition is excute if it is true
    return `${username} just logged in`
    
}
userloggin("arooj")
 console.log(userloggin("arooj"));


 /******************* how to use rest operator and add multiple arrguments************** */

 function calculatorcartvalues(val1, val2,...num1) {
    return num1
    
 }
console.log(calculatorcartvalues(100,200,300,400));                 // output in the form of a array:

/************how to pass an object in a function************ */

const user = {
     username: "fatmia",
     price: 1000
}

function myusername(anyobject) {
    console.log(`this is the new user ${anyobject.username} and their price is ${anyobject.price}`);
    
}

//myusername(user)                    // we can also edit the values of the objects:

myusername({
    username: "fazia",
    price:  200
})

//  for array:

const newArray = [ 100, 200, 400, 500]

function returnmyarray(getarray) {
    return  getarray[1]
    
}
// console.log(returnmyarray(newArray));
console.log(returnmyarray([100, 300, 900, 500]));
