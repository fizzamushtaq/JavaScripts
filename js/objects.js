//  object literal:        In objects we add key and  "value"  

//**************how use symbole in an object as a key*****//************** */


const mySym = Symbol("key1")


 const userJs =  {
    name: "helo",
    "full name": "fiza mushtaq",                   // this can only acess by [] in console
    age: "20",
    location: "chichawatni",
    [mySym] : "mykey1",                               //the value os symbole is not change but the syntax to right a symbol is that */
    userloggin: false,
    "city": "lhr",
    lastloginday: ["monday"]

  }

  // method to excess:

  console.log(userJs.city);
  console.log(userJs["full name"]);
  console.log(userJs[mySym]);

  userJs.location = "Pakpatan"

     /*   Object.freeze(userJs)  */                  // here no one can change the value of the object:
  
  userJs.city = "chichawatni"                        // uh can change any value of the object

 // console.log(userJs); */
  

/******************how to add function in object */  

userJs.greeting = function () {                                  //funtion1
    
    console.log("helo can i help uh?");
}

console.log(userJs.greeting());           
  
userJs.greetingtwo = function() {                                  // function2

    console.log(`helo can i help uh?,${this.location},${this.city}`);
    
}
console.log(userJs.greetingtwo());                           












