var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["GuestUser"] = 2] = "GuestUser";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log("User Role:", userRole);
// Array
let marks = [45, 67, 34, 78];
console.log("Marks:", marks);
// Tuple
let user = [101, "Niti"];
console.log("User:", user);
// Tuple with push/pop
let bookcode = [1001, "Java"];
bookcode.push(1002, ".Net");
console.log("After Push:", bookcode);
bookcode.pop();
console.log("After Pop:", bookcode);
// Map
let userMap = new Map();
userMap.set(101, "Niti");
userMap.set(102, "Jiya");
userMap.set(103, "Kamal");
console.log("Map Value:", userMap.get(101));
// for...of loop
let items = ["Laptop", "Mouse", "Keyboard"];
for (let item of items) {
    console.log("The values in array:", item);
}
export {};
