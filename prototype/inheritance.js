// The base Employee class
module.exports = {};
function Employee() {
    this.name = "";
    this.dept = "general";
}
module.exports.Employee = Employee;
// Manager class inherits from Employee
function Manager() {
    Employee.call(this);
    this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
module.exports.Manager = Manager;

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;
module.exports.WorkerBee = WorkerBee;

function SalesPerson() {
    WorkerBee.call(this);
    this.quota = 100;
    this.dept = "Sales";
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;
module.exports.SalesPerson = SalesPerson;

function Engineer() {
    WorkerBee.call(this);
    this.machine = "";
    this.dept = "Engineering";
}
Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;
module.exports.Engineer = Engineer;
