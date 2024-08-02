class myuser {
    constructor( username ){
         this.username = username
         
    }

    logMe(){
     console.log(`USERNAME: ${this.username}`);
    }
    static createId(){         // static is used to not acess the value 
        return `456`
    }
}
const hafsa = new myuser("hafsa")
console.log(hafsa);

// console.log(hafsa.createId())
