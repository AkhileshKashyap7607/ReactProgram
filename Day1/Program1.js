var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("Student Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
var obj = new Student("Alice", 20);
obj.display();
