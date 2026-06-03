var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Array of employees
var employees = [
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
employees = employees.map(function (emp) {
    return emp.id === 2
        ? __assign(__assign({}, emp), { salary: 45000 }) : emp;
});
console.log("\nAfter Updating Employee");
console.log(employees);
// ----------------------------
// Remove Employee
// ----------------------------
employees = employees.filter(function (emp) { return emp.id !== 1; });
console.log("\nAfter Removing Employee");
console.log(employees);
