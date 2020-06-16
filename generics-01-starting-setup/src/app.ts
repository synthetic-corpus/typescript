// Code goes here!
const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('All Done here')
    },1800);
})

function merge<T extends object, U>(A:T, B:U){
    return Object.assign(A,B)
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
countAndDescribe('a series of characters')