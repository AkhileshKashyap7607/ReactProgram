interface Employee {
    id: number;
    name: string;
    salary: number;
}

// Array of employees
let employees: Employee[] = [

    {
        id: 1,
        name: "Akhilesh",
        salary: 30000
    },

    {
        id: 2,
        name: "Rahul",
        salary: 40000
    }

];

console.log("Initial Employees");
console.log(employees);

// ----------------------------
// Add Employee
// ----------------------------

employees.push({

    id: 3,
    name: "Aman",
    salary: 50000

});

console.log("\nAfter Adding Employee");
console.log(employees);

// ----------------------------
// Update Employee
// ----------------------------

employees = employees.map((emp) =>

    emp.id === 2

        ? { ...emp, salary: 45000 }

        : emp
);

console.log("\nAfter Updating Employee");
console.log(employees);

// ----------------------------
// Remove Employee
// ----------------------------

employees = employees.filter((emp) => emp.id !== 1);

console.log("\nAfter Removing Employee");
console.log(employees);