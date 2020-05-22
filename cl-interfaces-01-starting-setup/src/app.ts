class Department {
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  /* protected Variables are variables that can be accessed by an extended class */
  protected employees: string[] = []; 
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  /* static methods. Can be used w/o instiating the class */
  static createEmployee(name: string){
    return {name: name};
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  /* getter. Is a function that gets a private variable. Used to better control acces */

  get mostRecentReport() {
    // must return somthing
    if (this.lastReport){
      return this.lastReport;
    }
    throw new Error('No Report found.')
    // Using this would allow read acces, but is not allow set access via dot notation yet.
    // read like dept.mostRecentReport w/o parathenthesis. Access as if it is a variable.
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); // Must always use super before rest of constructor
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();