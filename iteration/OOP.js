const user = {
    username: "fiza mushtaq",
    passwordId: 234,
    loggin: true,

    getUserDetails: function () {
        console.log(`username : ${this.username}`);
        
    }
}

console.log(user.username);

// constructor function:  keyword => new  
// it is use to prevent from overwrite the code
//  constructore property is the reference of the give function:
 
function log(username, userCount, signedin ) {
   this.username = username;
   this.userCount = userCount;
   this.signedin = signedin

   return this
    
}
 const userOne =  new log("fiza", 12 , true)
 console.log(userOne.constructor);
 const usertwo = new log("arooj", 45, false)
 console.log(usertwo);


//  function behave as a object 

function multiplynum (num) {
    return num*5
    
}

multiplynum.power = 2

// console.log(multiplynum(5));
// console.log(multiplynum.power);
// console.log(multiplynum.prototype);

function createuser (userName, score ) {
    this.username = userName
    this.score = score
    
}

createuser.prototype.increment = function () {
    this.score++
}
createuser.prototype.printMe = function () {
    console.log(`this is the price of table is ${this.score}`);
    
}
const table = new createuser('table', 50)
const chair = new createuser("chair", 100)
table.printMe()
// chair.printMe()

// Here what happens behind the scene when a "new" keyword is used? 

// A new object is created the "new" keyword initiate the creation of a new Java script object.
// A prototype is linked the newly created object gets linked to the prototype property of the constructor function this means it has access to properties and methods define on the constructors prototype. 
// The constructor is called: The constructor function is called with the specified argument and this is born to the newly created object if no explicit written value is specified from the constructor, JavaScript assume this, the newly created object, to be in the intended return value.
// The newly object is return: after that the constructor function has been called, if it does not return a non primitive value ( object array function etc)  the newly created object is returned.


// ptototype. js

