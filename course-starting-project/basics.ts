function add(n1: number, n2: number, logResult: boolean){
    if(logResult){
        console.log(n1+n2)
    }
    return n1 + n2
}

const number1 = 5
const number2 = 2.8

add(number1, number2, true)
