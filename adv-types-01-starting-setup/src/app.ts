// Code goes here!
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

// this is called an intersection type\
// One can use "interface" here. One can also use inheritence.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date()
}

// For Experiment only
type Combinable = string | number;
type Numeric = number | boolean;
type Both = Combinable & Numeric;

const both: Both = 1