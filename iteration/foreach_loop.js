const mynewObject = {
    js : " javascript",
    cpp: "c++",
    rb: "rbuy",
    swift : "swift for app"
}

for (const key in mynewObject) {
  //   console.log(`${key}, shortcuts for ${mynewObject[key]}`);
   
}

const programing = [ "js", " ruby","c++"]
for (const key in programing) {
  //   console.log(programing[key]);
    
}

/***************   callback function ********* */

const programing2 = [ "js", "ruby","c++"]

programing2.forEach(function (items) {
   //  console.log( items);
    
} )

// other way :

const coding = [1, 2, 3,4]
function printme (variousitems) {
    //  console.log(variousitems);
    
}
coding.forEach(printme)

//           callback function in arrow

programing2.forEach( ( val ) => {      // there are different parameters that are use here ( )
     // console.log(val);
})
programing2.forEach( ( val , index , arr ) => {     
     //  console.log(val , index, arr);
})
 

//        excess into nested objects:

const newcoding = [
    {
        username: " fiza",
        language: " javascript"
    
    },
    {
        username : "arooj",
        language: " python"
    
    }
]

newcoding.forEach( ( items ) => {
    // console.log(items.language);
})

const mynewObject2 = {
    js : " javascript",
    cpp: "c++",
    rb: "rbuy",
    swift : "swift for app"
}
//  foreach loop store in a variable 
/*
const values = mynewObject2.forEach( ( items ) => {
    console.log(items);
    return items                                                     // error
})                                                        

console.log(values);                               */

const newnums = [ 1,2,3,4,5,6,7,8,9,10]
 let realvalues = newnums.filter(( num) => num >5 )
 //  console.log(realvalues);
 let realvalues2 = newnums.filter(( num) => {
     return num >5                                    // return is must  jb scope{} use krty hai: 
    })
  // console.log(realvalues);

 // same way with other logic  with foreach and if function

 const nums = [ 1,2,3,4,5,6,7,8,9,10]
 const newvalues =  nums.forEach((vals) => {
    if (vals > 5) {
        nums.push(vals)
        
    }
    
 });
const real = nums.map((newnym) => newnym + 2
 
);
 //  console.log(real);

// chaining method 

const real2 = nums.map((newnym) => newnym * 2              // it give the new values after excute 
 ).map((newnym) => newnym + 1)                             // this map use the new value and add 1 in it: 
.filter((newnym) => newnym >= 10)

 //  console.log(real2);

 // reduce function :
   
 const otherex = [ 1, 2 , 3, 4]
 /*   const newval = otherex.reduce (function (acc , cuurval ) {
    console.log( ` acc: ${ acc} and cuuval ${cuurval}` );
    return acc + cuurval
    
  } , 0 )
    console.log(newval); */

    // write in a arrow function this is the modern way to write reduce function

    const newval2 = otherex.reduce(( acc , cuurval ) => acc + cuurval , 0)
      console.log( newval2);

