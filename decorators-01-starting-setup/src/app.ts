function Logger(log: String){
    //
    return function(target: Function){
        // This function still responds to the Target below
        console.log(log)
        console.log(target)
    }
}

// @ is a special Identifier
// @ points at a funtion, which is the decorater
// The decorator requires an arguement
@Logger('I am about to log...')
class Person {
    name = 'Max';

    constructor() {
        console.log('New person is being created.')
    }
}

const anyone = new Person()
console.log(anyone)