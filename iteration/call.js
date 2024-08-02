function setUserName(username) {
    this.username = username
    console.log("called");  
}

function creatUser(username , password, email) {
    setUserName.call(this,username)  // this is must to call the method 
    this.email = email 
    this.password = password
}
const code =  new creatUser("fiza", 123, 'fizach@gmail.com' )
console.log(code);
