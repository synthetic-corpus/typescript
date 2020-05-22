var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        // When you make the constructor like this, you don't have to repeat things.
    }
    Department.prototype.describe = function () {
        console.log("The Department is " + this.name + ". Has and ID of " + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.getEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var dept = new Department('Biology', '13');
dept.addEmployee(['ted', 'danza', 14]);
dept.addEmployee(['brick', 'top', 09]);
dept.describe();
dept.getEmployees();
