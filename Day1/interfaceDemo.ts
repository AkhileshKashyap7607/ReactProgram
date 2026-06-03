export {};

interface Users {

    id: number;
    name: string;
    salary: number;

    calculateIncrement(): number;
}

let userData: Users = {

    id: 101,
    name: "Niti",
    salary: 65757,

    calculateIncrement(): number {

        return this.salary + this.salary * 0.01;
    }
};

console.log("Id:", userData.id);

console.log("Name:", userData.name);

console.log("Salary:", userData.salary);

console.log(
    "Incremented Salary:",
    userData.calculateIncrement()
);

// --------------------------------

interface Salary {

    basicsalary: number;

    showSalary(): void;
}

class Hr implements Salary {

    constructor(public basicsalary: number) { }

    showSalary(): void {

        console.log("Salary:", this.basicsalary);
    }
}

let obj1 = new Hr(6575);

obj1.showSalary();