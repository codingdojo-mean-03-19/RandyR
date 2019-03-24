function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
}

this.sayName = function(){
    console.log('My name is' + this.name);
    return this;
}

this.showStats = function(){
    console.log('Name: ' + this.name + 'Strength: ' + strength + 'Speed: ' + speed + 'Health: ' + this.health);
    return this;
}

this.drinkSake = function(){
    addHealth = this.health + 10
    return this;
}

this.punch = function(){
    ninja.health -= 5;
    console.log(ninja.name + "was punched by" + this.name + "and lost 5 health");
    return this;
}

this.kick = function(){
    damage = strength * 5;
	ninja.health -= damage;
	console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + "health");
	return this;
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

const blueNinja = new Ninja("Bruce");
		const redNinja = new Ninja("Lee");

		blueNinja.sayName();
		redNinja.sayName();

		blueNinja.punch(redNinja);
		redNinja.kick(blueNinja);

		blueNinja.showStats();
		redNinja.showStats();