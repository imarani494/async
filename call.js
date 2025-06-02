function personInfo(){
    console.log(`Name:${this.name},Age:${this.age}`);
}
const person={
    name:"imran",
    age:23,

}
personInfo.call(person);
