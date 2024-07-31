/**************************objects constructor********* */

const tinderuser = new Object()           //  syntax of singletone object

const tinderuser2 = {}                   // suntax to write non-singletone object

tinderuser2.name = "fiza"
tinderuser2.email = "fizach@google.com"
tinderuser2.loggin = false

  //console.log(tinderuser2); 


/*************************nested objects *************/

const regularuser = {
    name: {
        username: {
            fullname:{
                firstname: "hitesh",
                lastname:  "chodhary"
            }

        }
    }
}

// console.log(regularuser.name.username.fullname.lastname);

/***********************combine one or more objects************* */

const obj1 = {a:"1",b:"2", c:"3"}
const obj2 = {c:"1",d:"2", e:"3"}

// first method 
//const obj3 = Object.assign({},obj1,obj2)            // {} (target) this used for accurate reuslt to add one or more:

// 2nd method:

const obj4 = {...obj1,...obj2}
console.log(obj4);

//when the value come from database:

const user = [
    {
        id: "123",
        email: "fiza@gmail.com"
    },
    {
        id: "123",
        email: "fiza@gmail.com"
    }
]
user[1].email
console.log(Object.keys(tinderuser2));                      // use to excess all the keys of the any object:
console.log(Object.values(tinderuser2));
console.log(Object.entries(tinderuser2));



console.log(tinderuser2.hasOwnProperty('name'));


/***************************de-structure of an object************************ */

const school = {
    teacher: "fiza",
    student: 100
}

const { teacher} = school
console.log( teacher);

// in api write form of an object is like as:
/*
 { "name" : "helo",
    "id" : 123
}                                     */
