class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('My name is' + this.name);
    }
    showStats(){
        console.log('Name: ' + this.name + 'Strength: ' + this.strength + 'Speed: ' + this.speed + 'Health: ' + this.health);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

class superSensei extends Ninja{
    constructor(name){
        super(name);
        this.strength = 10;
        this.speed = 10;
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const newNinja = new Ninja('Ryu');
const superSensei = new superSensei('Master Splinter')
newNinja.showStats();
newNinja.drinkSake();
superSensei.showStats();
superSensei.speakWisdom();

