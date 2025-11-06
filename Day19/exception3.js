console.log("Program continues...");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input data!");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

