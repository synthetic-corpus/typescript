// Code goes here!
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("The Department is " + this.name);
    };
    return Department;
}());
var dept = new Department('Biology');
dept.describe();
