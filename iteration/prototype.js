// prototype in js

let superhero = [ "shaktiman", "spiderman"]

let heropower = {
    spider: "sling",
    shaktiman: "skyway",

   getSpiderPower: function () {
    console.log(`the power of spider is ${this.spider}`);
    
    
   }

}
Object.prototype.fiza = function () {
    console.log(`fiza is present in all objects`);
    
}
Array.prototype.heyfiza = function () {
    console.log(`fiza say helo `);
    
}

// heropower.fiza()
superhero.heyfiza() 
// heropower.heyfiza() 

// here heyfiza function not declare in heropower and not have acess to this value.


/*           inheritance      */ /* setPrototypeOf() */

let username = "arooj             "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`this length is : ${this.trim().length}`);
    
}
username.trueLength()
"hafsa".trueLength()
"rabia".trueLength()