type Person = {
    name: string;
};

type Employee = {
    employeeId: number
};

type Staff = Person & Employee;

const Staff = {
    name: "Aman",
    employeeId: 101
}

// let userld: ID;

// userld = 101;

// userld ="A123";

// userld = true;  Error (boolean not allowed)

// Here, ID acts as a shortcut for string | number.
