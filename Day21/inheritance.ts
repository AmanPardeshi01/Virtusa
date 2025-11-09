class Animal {
    protected species: string;

    constructor(species: string) {
        this.species = species;
    }
    move(distance: number): void {
        console.log(`${this.species} moved ${distance} meters.`);
    }
}
class Dog extends Animal {
    private breed: string;

    constructor(species: string, breed: string) {
        super(species); // Call the parent class constructor
        this.breed = breed;
    }

    bark(): void {
        console.log("Woof! Woof!");
    }
}

const mydog = new Dog("Canine", "Goldern Retriever");
mydog.bark();
mydog.move(20);