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

