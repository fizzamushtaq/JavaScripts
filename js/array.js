/***************************************array***************************************** */

const Arr1 = [1,2,3,4,6]                       // the elements can be string boolean number etc.

console.log(Arr1 [0]);

// array methods :

Arr1.push(10)                               //used to add value
Arr1.pop()                                   //used to remove last value.

Arr1.unshift(7)                              //used to add element in start
Arr1.shift()                                  // used to remove fisrt element os array


console.log(Arr1.includes(7));                 //used to determine the element is present or not result in boolean
console.log(Arr1.indexOf(19));                  //used to determine the element value locate in array

const nextarr = Arr1.join()                        //this used to join to array and change their datatype into strimg

console.log(Arr1);
console.log(nextarr);

//slice and splice

const arr2 = [0,9,8,7,6]

console.log("A", arr2);

const nya = arr2.slice(0,4)
console.log(nya);

console.log("B", arr2);

//splice ex:

const nya2 = arr2.splice(0,4)
console.log("C", arr2);
console.log(nya2);                                               


const marvel_hero  = ["spiderman", "thor" , "flash"]
const pak_hero = ["quaideazam", "iqbal", "fatima"]

/*marvel_hero.push(pak_hero)*/                                    //use to collapase two array
console.log(marvel_hero);

const new_heros = marvel_hero.concat(pak_hero)                     // used to combine two arrray in one new array

console.log(new_heros);

//other method spread operator:

const new_heros2 = [...marvel_hero,...pak_hero]                   //most prefer to use
console.log(new_heros2);

// combine all array if it present in inside one array or more

const anotherarray = [1,2,3,4, [5,6,8] ,6,89,9,[5,5,4, [3,4,5,6,]]]
const realarrray =  anotherarray.flat(Infinity)
console.log(realarrray);


//when uh pick code from online some time it is in the form of element or object. soo it can be convert into array

console.log(Array.isArray("fiza"));           //isarray use to determine that array is present or not
console.log(Array.from("fiza"));                 // from use to create array from object,string or elemnt

console.log(Array.from({name: "fiza"}));          //intersting case for interviews   // output = []  bcon we have to declare that make array to the key or value  inside the object
   

//other way to create array from the variables

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3));