function Ninja(name){
    var self = this
    this.name= name;
    this.health = 100;
    let speed = 3;
    let strength = 3;
    this.sayName = function(){
        console.log(this.name)
    }
    this.showStats = function(){
        console.log('')
        console.log(this.name)
        console.log(this.health)
        console.log(`Speed: ${speed}`)
        console.log(`Strength: ${strength}`)
        console.log('')
    }
    this.drinkSake = function(){
        this.health += 100
    }
    this.getStrong = function(){
        strength += 1
    }
    this.punch = function(target){
        if (!(target instanceof Ninja)){
            console.log('Target was not a ninja')
            return this
        }
        target.health -= 5
        console.log(`${target.name} was punched by ${this.name} and lost 5 health.`)
        return this
    }
    this.kick = function(target){
        if (!(target instanceof Ninja)){
            console.log('Target was not a ninja')
            return this
        }
        target.health -= 15
        console.log(`${target.name} was kicked by ${this.name} and lost 15 health.`)
        return this
    }
}

var mike = new Ninja('Mike')
var john = new Ninja('John')
mike.showStats()
john.showStats()
mike.punch(john)
mike.kick(john)
mike.punch(Array)
john.showStats()
mike.showStats()
