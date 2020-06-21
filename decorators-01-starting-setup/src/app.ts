function Logger(log: String){
    //
    return function(target: Function){
        // This function still responds to the Target below
        console.log(log)
        console.log(target)
    }
}

function WithTemplate(template: string, hookID: string){
    return function(_: Function){
        const hookEL = document.getElementById(hookID)
        if(hookEL){
            hookEL.innerHTML = template;
        }
    }
}

@WithTemplate('<h3>empty string here</h3>','appout')
class Person {
    name = 'Max';

    constructor() {
        console.log('New person is being created.')
    }
}

const anyone = new Person()
console.log(anyone)