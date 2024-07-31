//  for loop 

for (let i = 0 ; i <= 5 ; i++) {
    const element = i;
    //   console.log(element);
    if (element == 5) {
      //  console.log("5 is the best number");
        
    }
    
}

/***************             nested loops              ********************** */

for (let i = 1; i <= 5; i++) {
   // console.log(`this is outer ${i}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`this is inner loop ${j}, this is iuter loop${i}`);
       //  console.log(i + '*' + j + '=' + i*j);
        
    }
    
}


const myArray = ["flash", " batmen", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   //  console.log(element);
    
}

//   break and continue:     keywords of loops

/*

for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`this 5 is  detected`);
        break
        
    }
    console.log(`value of i is ${index}`);
    
} 
    
*/
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
      //  console.log(`this 5 is  detected`);
        continue
        
    }
    // console.log(`value of i is ${index}`);
    
}

/***************             while loops              ********************** */

let helo = 0
while (helo <= 10) {
    console.log(`this new lopp ${helo}`);
    helo = helo + 2
    
}

let mynewArray = ["helo", "hi", "bye" , "allah hafiz"]
let arr = 0
while (arr < mynewArray.length) {
    console.log(`this value is ${mynewArray[arr]}`);
    arr = arr +1
    
}

/***************             Do / while loops              ********************** */
let h = 11
do {
    console.log(`the value of h is ${h}`);
     h++
} while (h <= 5);

/***************             "for of"  loops              ********************** */

const score = [ 1,2,3,4,5]
for (const num of score) {                          // iteration koi b name ho skta hai
    console.log(num);
    
}

const greeting = " helo world "
for (const greet of greeting) {
    console.log(`each charcter is ${greet}`);
    
}

const newmethodofmap = new Map()
newmethodofmap.set("usa" , "united state of america")
newmethodofmap.set("in" , "india")
newmethodofmap.set("pak" , "pakistan")
// console.log(newmethodofmap);

//  by destructuring the loop and get each key value:

for (const [key, value] of newmethodofmap) {
    console.log(key , ':-', value);
    
}

// for of loop for an object:

const myObject = {
    name : "fiza",
    fathername: " Mushtaq"
}
for (const [object, value ] of myObject) {
    console.log(object,':-', value);
    
}                                           //output : error cause object is not iterable in forof loop
