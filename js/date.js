// dates and different method to write it*/

//date = datatype is object

const mydate = new Date();
console.log(mydate);                  //this not be a readable date
console.log(mydate.toString());
console.log(mydate.toUTCString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

// in j.s month start from 0

/*

let myCreatedate = new Date(2024,0,222)                     //yy-mm-dd
console.log(myCreatedate.toLocaleString());
console.log(myCreatedate.toDateString());
                                                   */



let Createdate = new Date(16-9-2024)                   //mm-dd-yy
console.log(Createdate.toLocaleString());

// how to find time in minutes of the given date to presented date*///

 /*
let mytime = Date.now()
console.log(mytime);

console.log(Createdate.getTime());
                                             */
//date in milisec//

console.log(Math.floor(Date.now()/1000));
 
//other methods:

let date = new Date()
console.log(date.getMonth());                //you can find current date, month, year, day:


//other way to print date*/

//     `${mydate.getMonth()};`          //
  

//     custom way to define your time, week, calender           //

date.toLocaleString('default', {
    weekday: "long"
})
console.log(date);
