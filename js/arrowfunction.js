

const user = {
    username: "arooj",
    price: 999,

    weclomemessage: function () { 
        console.log(`${this.username} , welcome to our website` );
         //   console.log(this);

        
    }
}
user.weclomemessage()
  //  console.log(this);


  function one() {
    let hi = "helo"
    console.log(this.hi);          // " this " is not use in function:  same as it can't be use in variable function:
    
  }

    //   one()     


/*********************   arrow function ************** */

const add = () => {
    let odd = "me"
   console.log(this);
    
}
  //  add()                          //  " this also give {}  in the output of an arrow function"    basic


 const hold = ( num1 , num2 ) => {                       // aroow function in an variable

return num1 + num2

}
 console.log(hold(2,3)); 

 // other  way to write the arrow function

 const heading = ( h1, h2) =>  h1 + h2
 console.log(heading(1,2));
          //or
const heading2 = ( h1, h2) => (h1 + h2)           // this is mostly use in react:
 console.log(heading2(1,2)); 

 //   object ko excess krny k liy usy () mai wrap krna must hai

 const heading3 = ( h1, h2) => ({ section: "helo"}) 
 console.log(heading3());
                                                                      

 /*****************  Immediately Invoke Function Expression (IIFE)    **************************/


(
    function one () {
        //name IIFE
        console.log(`this  is new function`);
        
    }
)();                            //; is used to end the function
 
// array also use in iife


( ( name ) => {
    //simple IIFE
    console.log(`helo world ${name}`)
}
)("hitesh ");