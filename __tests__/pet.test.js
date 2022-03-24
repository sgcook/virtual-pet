const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        const pet = new Pet("Fido");
        expect(pet.name).toEqual("Fido");
    });

    it("has an initial age of 0", () => {
        const pet = new Pet("Fido");
        expect(pet.age).toEqual(0);
    });
    
    it("has an initial hunger of 0", () => {
        const pet = new Pet("Fido");
        expect(pet.hunger).toEqual(0);
    });

    it("has an initial fitness of 0", () => {
        const pet = new Pet("Fido");
        expect(pet.fitness).toEqual(0);
    });
});

describe("growUp", () => {
    it("increments the age by 1", () => {
        const pet = new Pet("Fido");
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
    });

    it("increments hunger by 5", () => {
        const pet = new Pet("Fido");
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
    });

    it("decreases fitness by 3", () => {
        const pet = new Pet("Fido");
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(-3);
    });
});

describe("walk", () => {
    it("increases fitness by 4", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 4;
        pet.walk();
    
        expect(pet.fitness).toEqual(8);
    });

    it("increases fitness to a maximum of 10", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
    });
});

describe("feed", () => {
    it("decreases hunger by 3", () => {
        const pet = new Pet("Fido");
    
        pet.hunger = 3;
        pet.feed();
    
        expect(pet.hunger).toEqual(0);
    });
    
    it("decreases hunger to a minimum of 0", () => {
        const pet = new Pet("Fido");
    
        pet.hunger = 1;
        pet.feed();
    
        expect(pet.hunger).toEqual(0);
    });
});

describe("checkUp", () => {
    it("returns \"I need a walk \" if fitness is 3 or less", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 1;
        pet.hunger = 6;
    
        expect(pet.checkUp()).toBe("I need a walk");
    });
    
    it("returns \"I am hungry\" if hunger is 5 or more", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 4;
        pet.hunger = 5;
    
        expect(pet.checkUp()).toBe("I am hungry");
    });
    
    it("returns \"I am hungry AND I need a walk\" if fitness is 3 or less and hunger is 5 or more", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 1;
        pet.hunger = 2;
    
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });
    
    it("returns \"I feel great\" if hunger is greater than 5 and fitness is greater than 3", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 4;
        pet.hunger = 4;
    
    
        expect(pet.checkUp()).toBe("I feel great!");
    });
});

describe("isAlive", () => {
    it("returns false if pet's fitness is 0 or less", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = -1;
        pet.hunger = 0;
        pet.age = 0;
    
        expect(pet.isAlive).toEqual(false);
    });
    
    it("returns false if pet's hunger is 10 or more", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 0;
        pet.hunger = 10;
        pet.age = 0;
    
        expect(pet.isAlive).toEqual(false);
    });
    
    it("returns false if pet's age is 30 or more", () => {
        const pet = new Pet("Fido");
    
        pet.age = 30;
        pet.fitness = 0;
        pet.hunger = 0;
    
        expect(pet.isAlive).toEqual(false);
    });
    
    it("returns true if pet is fit, fed, and under 30", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 6;
        pet.hunger = 9;
        pet.age = 29;
    
        expect(pet.isAlive).toEqual(true);
    });
});







    