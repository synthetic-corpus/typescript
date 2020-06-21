function Logger(log: String){
    //
    return function(target: Function){
        // This function still responds to the Target below
        console.log(log)
        console.log(target)
    }
}

function WithTemplate(template: string, hookID: string){
    console.log('With Template is running first,,, right?')
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
@Logger('This is going to get loooog')
@WithTemplate('<h3>empty string here</h3>','appout')
// Multiple Decoraters can be run on a single fucntion.
// They execute from bottom up.
class Person {
    name = 'Max';

    constructor() {
        console.log('New person is being created.')
    }
}

const anyone = new Person()
console.log(anyone)