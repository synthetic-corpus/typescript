function Logger(log: String){
    //
    return function(target: Function){
        // This function still responds to the Target below
        console.log(log)
        console.log(target)
    }
}

function WithTemplate(template: string, hookID: string){
    return function(target: any){
        const hookEL = document.getElementById(hookID)
        // Calls the actual targeted function.
        const person = new target();
        if(hookEL){
            hookEL.innerHTML = template;
            hookEL.querySelector('h3')!.textContent = person.name
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