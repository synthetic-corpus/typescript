// Code goes here!
class Department {
    name: String;

    constructor(n: string) {
        this.name = n
    }

    describe() {
        console.log(`The Department is ${this.name}`)
    }
}

const dept = new Department('Biology');
dept.describe()