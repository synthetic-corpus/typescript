function Logger(target: Function){
    console.log('Logging!');
    console.log(target)
}

// @ is a special Identifier
// @ points at a funtion, which is the decorater
// The decorator requires an arguement
@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('New person is being created.')
    }
}

const anyone = new Person()
console.log(anyone)