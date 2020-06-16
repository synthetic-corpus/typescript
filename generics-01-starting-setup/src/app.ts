// Code goes here!
const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('All Done here')
    },1800);
})

function merge<T extends object, U extends object>(A:T, B:U){
    return Object.assign(A,B);
}

const mergedObj = merge({name: 'Gill', things: ['Sport']}, {shows: ['Star Trek']})

// Using an interface to only accept things that have a .length property
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T): [T, string]{
    let description: string = 'Has no Value';
    if (element.length > 0){
        description = `This thing has a lenght of ${element.length}`
    }
    return [element, description]
}

// anything you put into this function must have a length
console.log(countAndDescribe('a series of characters'))

// Ensures that the first parameter is an object.
// ensures that the second paramter is a keyof the first parameter.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return "the Value is ... " + obj[key]
}

/// Using Partials her.

interface CourseGoal {
    title: string;
    description: string;
    completedUntil: Date;
}

// Using "Partial" implies that an empty object, will
// *eventually* fulfill the interface requirements.
// Otherwise, this code would have errors.

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completedUntil = date;
    return courseGoal as CourseGoal
}