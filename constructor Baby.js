function Baby(name, age, favoriteToy) {

    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;

}

Baby.prototype.play = function(toy) {

    if(toy === this.favoriteToy) return `Playing with ${this.favoriteToy}`
}

let baby = new Baby("Danny", 3 , "cars")
console.log(baby)
console.log(baby.play("cars"))