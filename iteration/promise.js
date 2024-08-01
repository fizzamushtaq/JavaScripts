// mostly promises are confuse not created:
 // how promises create

//  fetch('https//something.com').then().catch().finally();

const promiseOne = new Promise(function (reslove, reject) {
    
    // do async task
    // do callback , cryptography, network 
    setTimeout(function () {
        console.log("A async task is complete");
        reslove();        // use to connect with then
    }, 1000);
})
promiseOne.then( function () {
    console.log("promise consumed");
    
})

//  other way to write the promise 
new Promise(function (reslove, reject) { 
    setTimeout(function () {
        console.log("A async task is two");
        reslove();       
    }, 1000);
}).then(function () {
    console.log("promise 2 is completed");
    
})

const promisethree = new Promise(function (reslove, reject) {
    setTimeout(function () {
        console.log("Async task is third");
        reslove({userName: "fizza mushtaq", id: 1234});     
    }, 1000);
})
promisethree.then( function (user) {
    console.log(user);
    
})

const promisefour =  new Promise((resolve, reject) => {
setTimeout(function () {
    let err = true                     // err can be false
    if (!err) {
        resolve({username: "arooj", password: 123})
         } else {
            reject('ERROR: something went wrong')
         }
},1000)
    
});
promisefour
.then((userone) => {
    console.log(userone);
    return userone.username    
})
.then((myusername) => {
    console.log(myusername);
    })
.catch(function (error) {
        console.log(error);
        
}).finally(() => console.log("The promise is either reslove or rejected"))

// use of async: it most of time use in database like as then use but it can't be directlt handle error:
 
const promisefive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let err = true                     // err can be false
        if (!err) {
            resolve({username: "hitesh", password: 123})
             } else {
                reject('ERROR: js went wrong')
             }
    },1000)
})
 async function consumepromise() {
    try {
        const response =  await promisefive
    console.log(response);
    } catch (error) {
      console.log(error);  
    }
    
}
consumepromise()

// promise six

// async function getAllUser() {
//  try {
//     const reponse = await fetch('https://api.github.com/users/fizzamushtaq')
//     const data = await reponse.json()
//     console.log(data);
//  } catch (error) {
//     console.log('e: erorr');
//  }
// }
// getAllUser()
 

// other method to write this same promise:

fetch('https://api.github.com/users/fizzamushtaq')
.then(async (response) => {
  const data = await response.json();
    console.log(data);  
})
.catch((erorr) => console.log('E: error'))