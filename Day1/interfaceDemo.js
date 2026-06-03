"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userData = {
    id: 101,
    name: "Niti",
    salary: 65757,
    calculateIncrement: function () {
        return this.salary + this.salary * 0.01;
    }
};
console.log("Id:", userData.id);
console.log("Name:", userData.name);
console.log("Salary:", userData.salary);
console.log("Incremented Salary:", userData.calculateIncrement());
var Hr = /** @class */ (function () {
    function Hr(basicsalary) {
        this.basicsalary = basicsalary;
    }
    Hr.prototype.showSalary = function () {
        console.log("Salary:", this.basicsalary);
    };
    return Hr;
}());
var obj1 = new Hr(6575);
obj1.showSalary();
