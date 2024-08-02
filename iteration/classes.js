//ES6

class user {
    constructor (userName, Email, Password) {
    this.username = userName
    this.email = Email
    this.password = Password
    }
    encryptPassword (){
        return(`${this.password} abdc`);
        
    }
    changeuserName(){
        return(`${this.username.toUpperCase()}`)
    }
}
const data =  new user("fiza","fizagmail.com",123);
console.log(data.encryptPassword());
console.log(data.changeuserName());


//  behind the seen 


function datauser (userName, Email, Password) {
    this.username = userName
    this.email = Email
    this.password = Password
}

datauser.prototype. encryptPassword = function (){
    return(`${this.password} abdc`)}

datauser.prototype.changeuserName = function(){
    return(`${this.username.toUpperCase()}`)
}
const tea =  new datauser("hitesh","hiteshgmail.com",123);
console.log(tea.encryptPassword());
console.log(tea.changeuserName());

// second example of class 

class myuser {
    constructor( username ){
         this.username = username
         
    }

    logMe(){
     console.log(`USERNAME: ${this.username}`);

    }
}

class Teacher extends myuser{
    constructor( username, Email,passwords){
        super(username)
        this.Email = Email
        this.Password = passwords
    }

    addCourse (){
        console.log(`this is the new course ${this.username}`);
        
    }
}
const dataofteacher  = new Teacher("rabia", "rchgmail.com", 123) 
dataofteacher.addCourse()

const helouser = new myuser("say hi")
helouser.logMe()
