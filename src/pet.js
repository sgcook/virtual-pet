const MAXIMUM_FITNESS = 10;
const INITIAL_VALUE = 0;
const FITNESS_INCREASE = 4;
const HUNGER_INCREASE = 5;
const FITNESS_DECREASE = 3;
const AGE_INCREASE = 1;
const HUNGER_DECREASE = 3;
const HUNGER_ALERT = 5;
const FITNESS_ALERT = 3;

function Pet(name) {
    this.name = name;
    this.age = INITIAL_VALUE;
    this.hunger = INITIAL_VALUE;
    this.fitness = INITIAL_VALUE;
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    this.age += AGE_INCREASE;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
};

Pet.prototype.walk = function() {
    if((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS) {
      this.fitness += FITNESS_INCREASE;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function() {
    if((this.hunger - HUNGER_DECREASE) >= INITIAL_VALUE) {
      this.hunger -= HUNGER_DECREASE;
    } else {
      this.hunger = INITIAL_VALUE;
    }
}

Pet.prototype.checkUp = function() {
    if(this.fitness <= FITNESS_ALERT && this.hunger <= HUNGER_ALERT) {
        return "I am hungry AND I need a walk";
    } else if(this.fitness <= FITNESS_ALERT) {
        return "I need a walk";
    } else if (this.hunger >= HUNGER_ALERT) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
}

module.exports = Pet;