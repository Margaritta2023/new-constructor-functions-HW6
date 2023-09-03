function Person(name,age){
    this.name = name ;
    this.age = age;
    this.stomach = [];
  
}

Person.prototype.eat  = function (str){
   if(this.stomach.length < 10) this.stomach.push(str);
}

Person.prototype.poop =  function (){
    this.stomach.length = 0;
}

Person.prototype.toString =  function (){

    return `${this.name},${this.age}`
}

const p1 = new Person("Samuel", 24);
console.log(p1.eat("shaurma"));
console.log(p1);
console.log(p1.poop());
console.log(p1);
console.log(p1.toString());
console.log(p1);
