
/************************declare str method one****************************** */

const name = "hi"
const age  = " frndz"

/*console.log(name + age )*/      // this synttax is old use do this instead:

console.log(`frndz how r uh and ${name} this is my${age}`)      //this is modern way to write code*/ this is called string interpolation


/*****************************method two******************************************/

const gameName = new String('fiza-ch')     //this other method to write a string; with this syntax you can find otther value of this string;

console.log(gameName [0]); 
console.log(gameName.__proto__);                 //{}  output in terminal
console.log(gameName.charAt(3));                 //a output. here we can find out the position of the characters in string.
console.log(gameName.indexOf('z'));                 //a output. here we can find out the  of the characters in string.


const hello = gameName.substring(1,4)                 //the last value not include(4), it helps to find charcter doing to number in string
console.log(hello);

const newhello = gameName.slice(-3, 2)                 // negative value means it can count the character reversly
console.log(newhello);



const newstringmethod = "  fiza   "
console.log(newstringmethod);                          // in this it show space with output
console.log(newstringmethod.trim());                  //use for no space in web, when user type to much with space. simple solution


const url = "https://fizach//%20ch"
console.log(url.replace('%20', '-'))

                //we can split the string 
console.log(gameName.split('-'));